"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "12", label: "Years Experience" },
  { value: "40+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

export function StatsSection() {
  return (
    <section className="relative border-y border-border bg-cream/50 bg-noise">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <span className="font-display text-5xl lg:text-6xl">{stat.value}</span>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Luminary Health",
    category: "Healthcare Platform",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    size: "large",
  },
  {
    title: "Nordic Fashion",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
  {
    title: "Fintech Dashboard",
    category: "SaaS Product",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
  {
    title: "Atlas Architecture",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    size: "large",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="relative bg-noise">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <span className="label-caps text-terracotta">Selected Work</span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">
              Projects that define us.
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group cursor-pointer ${
                project.size === "large" ? "lg:col-span-7" : "lg:col-span-5"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="label-caps text-background/70">{project.category}</span>
                  <h3 className="mt-2 font-display text-2xl text-background">{project.title}</h3>
                </div>
              </div>
              <div className="mt-4 lg:hidden">
                <span className="label-caps">{project.category}</span>
                <h3 className="mt-1 font-display text-xl">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
