"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award } from "lucide-react";

const WHY_FEATURES = [
  {
    icon: Target,
    title: "Dedicated to Excellence",
    description:
      "Verta Limited is dedicated to combining the thrill of Germany's lottos with a seamless and secure membership experience. We care deeply about transparency and the safety of our members.",
  },
  {
    icon: Users,
    title: "Personalized Support",
    description:
      "Our support team personally assists each customer, explains how memberships work, and answers every question so you feel confident and informed.",
  },
  {
    icon: Award,
    title: "Trusted & Reliable",
    description:
      "Whether you're new to lotto or have played for years, Verta Limited makes joining simple, compliant, and stress-free. Trust us for a fair, reliable, and rewarding journey to every draw.",
  },
] as const;

// const STATS = [
//   { value: "10,000+", label: "Active Members" },
//   { value: "100%", label: "Compliant" },
//   { value: "24/7", label: "Support" },
//   { value: "5★", label: "Rating" },
// ] as const;

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.33, 1, 0.68, 1] as const },
  viewport: { once: true, amount: 0.2 },
});

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-6 space-y-16">
        {/* Header */}
        <motion.div {...fadeIn(0)} className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-customText lg:text-4xl">
            Why choose Verta Limited?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of security, transparency, and convenience
          </p>
        </motion.div>

        {/* Stats */}
        {/* <motion.div {...fadeIn(0.1)} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-customBg">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div> */}

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-3">
          {WHY_FEATURES.map((feature, index) => (
            <motion.div key={feature.title} {...fadeIn(0.2 + index * 0.1)}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-customBg/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-customBg" />
                  </div>
                  <h3 className="text-xl font-semibold text-customText">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
