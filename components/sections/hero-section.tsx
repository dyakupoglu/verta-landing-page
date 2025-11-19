"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import heroImage from "@/public/heroImage.svg";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.33, 1, 0.68, 1] as const },
  viewport: { once: true, amount: 0.2 },
});

const TRUST_INDICATORS = [
  { icon: Shield, text: "Fully Licensed" },
  { icon: CheckCircle2, text: "100% Secure" },
] as const;

export function HeroSection() {
  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-background to-muted/30 py-20 lg:py-32"
    >
      <div className="container mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          {...fadeIn(0)}
          className="flex flex-col justify-center gap-8 row-start-2 lg:row-auto"
        >
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight lg:text-6xl text-customText">
              Join Germany&apos;s trusted lottery membership platform
            </h1>

            <p className="text-lg text-muted-foreground lg:text-xl leading-relaxed">
              Verta Limited connects you to verified, secure, and compliant lottery memberships
              across Germany. Experience peace of mind with every draw.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-customBg hover:bg-customHover text-white font-semibold group"
              onClick={handleContactClick}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-customBg hover:text-white hover:bg-customHover border-customBg font-semibold"
              onClick={handleContactClick}
            >
              Learn More
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            {TRUST_INDICATORS.map((indicator) => (
              <div
                key={indicator.text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <indicator.icon className="h-5 w-5 text-customBg" />
                <span className="font-medium">{indicator.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeIn(0.2)}
          className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl row-start-1 lg:row-auto"
        >
          <Image
            src={heroImage}
            alt="People celebrating winning the lottery"
            fill
            className="object-fill"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
