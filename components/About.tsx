"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          
          {/* Côté Gauche : Texte */}
          <motion.div {...animations.fadeInLeft} className={styles.aboutLeft}>
            <div className={styles.aboutBadge}>
              <User className="h-3.5 w-3.5" />
              <span>Qui sommes-nous ?</span>
            </div>
            <h2 className={styles.aboutTitle}>Une approche centrée sur votre <span className="text-primary">réussite</span></h2>
            <p className={styles.aboutText}>
              [Écris ici ton premier paragraphe de présentation. Par exemple : Fondée par des passionnés du web, Armme est née avec l'ambition de casser les codes de la création de sites vitrines.]
            </p>
            <p className={styles.aboutText}>
              [Écris ici ton deuxième paragraphe. Explique tes valeurs ou ton histoire : Nous croyons qu'un site web ne doit pas seulement être beau, il doit être une arme de conversion massive pour votre business.]
            </p>
            <div className="pt-2">
              <Button variant="link" className="p-0 gap-1 text-base" asChild>
                <a href="#contact">Discuter de votre projet <ArrowUpRight className="h-4 w-4" /></a>
              </Button>
            </div>
          </motion.div>

          {/* Côté Droit : Visuel */}
          <motion.div {...animations.fadeInRight} className={styles.aboutRight}>
            <div className={styles.aboutVisualBox}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                <span className="text-sm font-medium text-muted-foreground">[ Insère ton image ou illustration ici ]</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  aboutSection: "w-full py-24 bg-background overflow-hidden",
  container: "container mx-auto px-4",
  aboutGrid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
  aboutLeft: "flex flex-col gap-5 text-left",
  aboutBadge: "inline-flex items-center self-start gap-2 px-3 py-1 rounded-full border bg-muted text-xs font-medium text-muted-foreground",
  aboutTitle: "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
  aboutText: "text-muted-foreground text-base sm:text-lg leading-relaxed",
  aboutRight: "w-full flex justify-center",
  aboutVisualBox: "w-full max-w-[500px] aspect-[4/3] relative bg-muted/30 rounded-2xl",
};

const animations = {
  fadeInLeft: {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  }
};