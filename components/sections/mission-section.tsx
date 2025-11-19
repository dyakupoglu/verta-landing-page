"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import verified from "@/public/verified.svg";
import secure from "@/public/secure.svg";
import support from "@/public/support.svg";

const MISSION_HIGHLIGHTS = [
  {
    title: "Verified memberships",
    description:
      "All memberships are licensed, fully verified, and compliant with German regulations to ensure maximum security.",
    image: verified,
    imageAlt: "Analytics graph showing member growth and verification statistics",
    badge: "Licensed",
  },
  {
    title: "Transparent & secure",
    description:
      "We maintain total transparency—clear pricing, simple terms, and secure member enrollment with robust data protection.",
    image: secure,
    imageAlt: "Product launch illustration representing our transparent service launch",
    badge: "Secure",
  },
  {
    title: "Convenient support",
    description:
      "Our team helps every step, from explaining your options to ensuring you join safely and confidently.",
    image: support,
    imageAlt: "Friendly support representative waving and ready to assist",
    badge: "24/7 Support",
  },
] as const;

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.33, 1, 0.68, 1] as const },
  viewport: { once: true, amount: 0.2 },
});

export function MissionSection() {
  return (
    <section id="mission" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto max-w-6xl space-y-12 px-6">
        <motion.div {...fadeIn(0)} className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-customText lg:text-4xl">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your security is our priority. We provide fully compliant and transparent lottery
            memberships
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {MISSION_HIGHLIGHTS.map((item, index) => (
            <motion.div key={item.title} {...fadeIn(0.1 + index * 0.1)}>
              <Card className="h-full border-border hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="relative mb-2 flex h-48 items-center justify-center bg-gradient-to-br from-muted to-muted/50 rounded-lg p-6 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={200}
                      height={200}
                      className="object-contain transition-transform group-hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-customText">{item.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {item.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
