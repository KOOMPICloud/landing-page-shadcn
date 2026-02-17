"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Navigation, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small projects and startups beginning their journey.",
    price: "5,000",
    period: "project",
    features: [
      "Brand strategy workshop",
      "Visual identity design",
      "Responsive website (5 pages)",
      "Basic SEO setup",
      "2 revision rounds",
      "4-week delivery",
    ],
    featured: false,
  },
  {
    name: "Professional",
    description: "Comprehensive solution for growing businesses ready to scale.",
    price: "15,000",
    period: "project",
    features: [
      "Everything in Starter",
      "Custom illustration & iconography",
      "Advanced animations & interactions",
      "CMS integration",
      "Analytics dashboard setup",
      "4 revision rounds",
      "8-week delivery",
      "30-day post-launch support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Full-service partnership for established organizations.",
    price: "Custom",
    period: "",
    features: [
      "Everything in Professional",
      "Dedicated project team",
      "Multi-platform design system",
      "Custom development",
      "Performance optimization",
      "Security audit",
      "Ongoing partnership",
      "Priority support",
    ],
    featured: false,
  },
];

const services = [
  {
    title: "Brand Strategy",
    description: "Research, positioning, messaging, and visual identity.",
    price: "From $8,000",
  },
  {
    title: "Product Design",
    description: "User research, UX design, and prototyping.",
    price: "From $12,000",
  },
  {
    title: "Web Development",
    description: "Frontend development, CMS, and deployment.",
    price: "From $10,000",
  },
  {
    title: "Motion Design",
    description: "Animations, micro-interactions, and video.",
    price: "From $5,000",
  },
];

export default function PricingPage() {
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
              <span className="label-caps text-terracotta">Pricing</span>
              <h1 className="mt-6 text-editorial">
                Investment in
                <br />
                <span className="text-muted-foreground">excellence.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Transparent pricing for exceptional work. Every project is unique, 
                but these packages provide a foundation for our collaboration.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative border-t border-border bg-noise">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "relative rounded-2xl border p-8 lg:p-10",
                    plan.featured
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card"
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-terracotta px-3 py-1 text-xs font-medium text-background">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl">{plan.name}</h3>
                  <p className={cn(
                    "mt-2",
                    plan.featured ? "text-background/70" : "text-muted-foreground"
                  )}>
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="font-display text-5xl">${plan.price}</span>
                    {plan.period && (
                      <span className={cn(
                        "ml-2",
                        plan.featured ? "text-background/60" : "text-muted-foreground"
                      )}>
                        / {plan.period}
                      </span>
                    )}
                  </div>
                  <Button
                    className={cn(
                      "mt-8 w-full",
                      plan.featured
                        ? "bg-background text-foreground hover:bg-background/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    )}
                  >
                    Get Started
                  </Button>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={cn(
                          "mt-0.5 h-5 w-5 shrink-0",
                          plan.featured ? "text-background" : "text-foreground"
                        )} />
                        <span className={plan.featured ? "text-background/80" : ""}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
              <span className="label-caps text-terracotta">À La Carte</span>
              <h2 className="mt-4 font-display text-4xl">Individual services.</h2>
              <p className="mt-4 text-muted-foreground">
                Need something specific? We also offer individual services tailored to your needs.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center justify-between gap-8 rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-soft"
                >
                  <div>
                    <h3 className="font-display text-xl">{service.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <span className="shrink-0 font-display text-lg">{service.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-t border-border bg-noise">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="font-display text-3xl lg:text-4xl">
                Not sure which package fits?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Let's talk. We'll help you find the right approach for your project and budget.
              </p>
              <Button size="lg" className="mt-8 bg-foreground text-background hover:bg-foreground/90">
                Schedule a Call
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
