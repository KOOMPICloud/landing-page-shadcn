"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-noise">
      <div className="absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-sage/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-terracotta/15 blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="label-caps text-terracotta">Start a Project</span>
          <h2 className="mt-6 font-display text-4xl lg:text-6xl">
            Ready to build something extraordinary?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Let's discuss how we can help bring your vision to life. 
            Our team is ready to partner with you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2 bg-foreground text-background hover:bg-foreground/90">
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
