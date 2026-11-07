# Multi-stage Dockerfile for Next.js Full-Stack Application
# Single container serving both API and frontend

FROM node:24-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/main#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Copy .env file for build (if exists)
COPY .env* ./

# Build Next.js
# An app without a public/ folder still has one for the copy below
RUN mkdir -p public
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
# The app's folder is its user's, and the files are copied as theirs (--chown):
# a `RUN chown -R` after the copies stored every file a second time, about
# 90 MB more to push and pull on every deploy.
RUN chown nextjs:nodejs /app

# Copy necessary files
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# public/ is not part of the standalone build: without it every file in it (logos, pictures, scripts) is a 404
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Create data directory for SQLite database
RUN mkdir -p /data/db && chown -R nextjs:nodejs /data/db

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
