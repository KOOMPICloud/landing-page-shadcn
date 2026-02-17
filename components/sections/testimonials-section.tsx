"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Axiom transformed our digital presence completely. Their attention to detail and strategic thinking elevated our brand to new heights.",
    author: "Sarah Chen",
    role: "CEO, Luminary Health",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "Working with Axiom felt like having an extension of our team. They understood our vision and executed flawlessly.",
    author: "Marcus Webb",
    role: "Founder, Nordic Fashion",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "The team's creative approach and technical expertise delivered results beyond our expectations. Truly exceptional work.",
    author: "Elena Rodriguez",
    role: "CTO, Atlas Architecture",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
];

const clients = [
  "Luminary", "Nordic", "Atlas", "Fintech", "Vertex", "Echo", "Prism", "Nova"
];

export function TestimonialsSection() {
  return (
    <section className="relative bg-noise">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="label-caps text-terracotta">Testimonials</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl">
            Words from our partners.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-elegant"
            >
              <blockquote className="text-lg leading-relaxed text-foreground/80">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <p className="mb-8 text-center label-caps text-muted-foreground">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {clients.map((client, i) => (
              <motion.span
                key={client}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="font-display text-xl text-muted-foreground/40 transition-colors hover:text-muted-foreground"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
