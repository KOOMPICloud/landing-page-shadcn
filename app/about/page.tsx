"use client";

import { motion } from "framer-motion";
import { Navigation, Footer } from "@/components/layout";
import { CTASection } from "@/components/sections";

const team = [
  {
    name: "Alexandra Stone",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "James Chen",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sofia Rodriguez",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Park",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
];

const values = [
  {
    title: "Craft",
    description: "Every pixel matters. We obsess over the details that others overlook, knowing they make the difference between good and exceptional.",
  },
  {
    title: "Purpose",
    description: "Design without strategy is decoration. We ensure every decision serves a clear purpose and drives measurable results.",
  },
  {
    title: "Partnership",
    description: "We don't just work for clients—we work with them. True collaboration leads to outcomes neither party could achieve alone.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative bg-noise mesh-gradient pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="label-caps text-terracotta">About Us</span>
              <h1 className="mt-6 text-editorial">
                A studio built on
                <br />
                <span className="text-muted-foreground">principle.</span>
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="relative border-t border-border bg-noise">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <h2 className="font-display text-3xl lg:text-4xl">
                  We believe great design is invisible—
                  <br />
                  it just works.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-6 lg:col-start-7"
              >
                <p className="text-lg text-muted-foreground">
                  Founded in 2012, Axiom began with a simple belief: that exceptional digital 
                  experiences come from the intersection of strategic thinking and meticulous craft. 
                  Over a decade later, that belief still guides everything we do.
                </p>
                <p className="mt-6 text-lg text-muted-foreground">
                  We're a collective of strategists, designers, and engineers united by a passion 
                  for solving complex problems with elegant solutions. Our work spans industries 
                  and continents, but our approach remains consistent—deep collaboration, 
                  rigorous process, and unwavering attention to detail.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-border bg-secondary/30 bg-noise">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="label-caps text-terracotta">Our Values</span>
              <h2 className="mt-4 font-display text-4xl">What drives us.</h2>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-3">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="font-display text-6xl text-muted-foreground/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl">{value.title}</h3>
                  <p className="mt-4 text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-t border-border bg-noise">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="label-caps text-terracotta">The Team</span>
              <h2 className="mt-4 font-display text-4xl">Meet the makers.</h2>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-xl bg-secondary">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
