"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <motion.h1 {...animations.title} className={styles.title}>
          Propulsez votre activité avec <span className={styles.titleGradient}>Armme</span>
        </motion.h1>

        <motion.p {...animations.subtitle} className={styles.subtitle}>
          La plateforme moderne pour concevoir des sites vitrines à couper le souffle. Alliez la performance à l'élégance du design minimaliste.
        </motion.p>

        <motion.div {...animations.ctaContainer} className={styles.ctaContainer}>
          <Button size="lg" className={styles.ctaPrimary} asChild>
            <a href="#contact">Commencer maintenant <ArrowRight className="h-4 w-4" /></a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#about">En savoir plus</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  heroSection: "w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-background px-4 py-12",
  heroContent: "max-w-4xl mx-auto flex flex-col items-center text-center gap-6",
  title: "text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.1]",
  titleGradient: "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",
  subtitle: "text-muted-foreground text-lg sm:text-xl max-w-2xl",
  ctaContainer: "flex flex-wrap items-center justify-center gap-4 mt-4",
  ctaPrimary: "gap-2",
};

const animations = {
  title: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
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
  }
};