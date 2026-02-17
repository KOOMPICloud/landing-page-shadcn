"use client";

import { motion } from "framer-motion";
import { Layers, PenTool, Code, Sparkles } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description: "We craft compelling brand narratives and visual identities that resonate with your audience and stand the test of time.",
    icon: PenTool,
  },
  {
    number: "02",
    title: "Digital Product",
    description: "From concept to launch, we design and build digital products that solve real problems and delight users.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Development",
    description: "Clean, scalable code built with modern technologies. We bring designs to life with precision and care.",
    icon: Code,
  },
  {
    number: "04",
    title: "Motion Design",
    description: "Thoughtful animations and interactions that add personality and enhance the user experience.",
    icon: Sparkles,
  },
];

export function ServicesSection() {
  return (
    <section className="relative border-t border-border bg-secondary/30 bg-noise">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="label-caps text-terracotta">What We Do</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl">
            Services built for
            <br />
            modern brands.
          </h2>
        </motion.div>

        <div className="grid gap-px bg-border lg:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-background p-8 lg:p-12 transition-colors duration-300 hover:bg-secondary/50"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl text-muted-foreground/30 transition-colors group-hover:text-terracotta/50">
                  {service.number}
                </span>
                <service.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <h3 className="mt-8 font-display text-2xl">{service.title}</h3>
              <p className="mt-4 text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
