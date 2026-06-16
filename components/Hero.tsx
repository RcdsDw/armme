"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Terminal from "@/components/Terminal";
import React from "react";

export default function Hero() {
  return (
    <section style={styles.heroSection}>
      <div style={styles.heroGrid}>
        
        <div style={styles.textContent}>
          <motion.h1 {...animations.title} style={styles.title}>
            Propulsez votre activité avec <span style={styles.titleGradient}>Armme</span>
          </motion.h1>

          <motion.p {...animations.subtitle} style={styles.subtitle}>
            Conception de sites vitrines d'élite et ingénierie web sur mesure. Alliez la performance technique brute à l'élégance d'un design minimaliste pour transformer vos visiteurs en clients.
          </motion.p>

          <motion.div {...animations.ctaContainer} style={styles.ctaContainer}>
            <Button size="lg" className="gap-2" asChild>
              <a href="#contact">
                Discuter de votre projet <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#about">Découvrir mon expertise</a>
            </Button>
          </motion.div>
        </div>

        <motion.div {...animations.terminal} style={styles.terminalWrapper}>
          <Terminal />
        </motion.div>

      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  heroSection: {
    width: "100%",
    minHeight: "calc(100vh - 4rem)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--background)",
    padding: "3rem 1rem",
    overflow: "hidden",
    position: "relative",
  },
  heroGrid: {
    width: "100%",
    maxWidth: "80rem",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "3rem",
    alignItems: "center",
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    maxWidth: "42rem",
    margin: "0 auto",
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
    fontWeight: 800,
    letterSpacing: "-0.05em",
    lineHeight: 1.1,
    color: "var(--foreground)",
  },
  titleGradient: {
    backgroundImage: "linear-gradient(to right, #2563eb, #4f46e5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  },
  subtitle: {
    color: "var(--muted-foreground)",
    fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
    lineHeight: 1.6,
  },
  ctaContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: "0.5rem",
  },
  terminalWrapper: {
    width: "100%",
    maxWidth: "36rem",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    minHeight: "416px",
  },
};

const animations = {
  title: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  subtitle: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.15, duration: 0.5 }
  },
  ctaContainer: {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3, duration: 0.5 }
  },
  terminal: {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.4, duration: 0.6 }
  }
};