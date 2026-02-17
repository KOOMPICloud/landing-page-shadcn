"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  work: [
    { label: "Case Studies", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Process", href: "#" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  social: [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl lg:text-5xl">
                Let's create something remarkable together.
              </h2>
              <p className="mt-6 max-w-md text-background/60">
                We partner with ambitious brands and people to build remarkable digital products, experiences, and platforms.
              </p>
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <span className="label-caps text-background/40">Work</span>
                <ul className="mt-6 space-y-3">
                  {footerLinks.work.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="label-caps text-background/40">Company</span>
                <ul className="mt-6 space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="label-caps text-background/40">Social</span>
                <ul className="mt-6 space-y-3">
                  {footerLinks.social.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <span className="text-sm text-background/40">
            © 2024 Axiom Studio. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-background/40 hover:text-background/70">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-background/40 hover:text-background/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
