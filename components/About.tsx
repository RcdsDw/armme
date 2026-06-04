"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          
          <motion.div {...animations.fadeInLeft} className={styles.aboutLeft}>
            <div className={styles.aboutBadge}>
              <User className="h-3.5 w-3.5" />
              <span>Mon approche</span>
            </div>
            <h2 className={styles.aboutTitle}>
              Un seul interlocuteur pour donner vie à vos <span className="text-primary">projets</span>
            </h2>
            <p className={styles.aboutText}>
                Professionnel et certifié Concepteur Développeur, je mets mon expertise technique au service de projets de toutes tailles. De la création d'un site vitrine simple, épuré et percutant, jusqu'à la conception d'architectures logicielles plus complexes avec déploiement automatisé, je maîtrise l'intégralité de la chaîne de valeur.
            </p>
            <p className={styles.aboutText}>
                Que vous ayez besoin d'installer une présence en ligne efficace ou d'une intervention ponctuelle en renfort sur un projet existant, je m'adapte à vos besoins. Sans aucun intermédiaire, vous bénéficiez d'une collaboration agile, d'une exécution fluide et d'un site optimisé pour les performances brutes de votre activité.
            </p>
            <div className={styles.btnContainer}>
              <Button variant="link" className={styles.linkBtn} asChild>
                <a href="#contact">Discuter de votre projet <ArrowUpRight className="h-4 w-4" /></a>
              </Button>
            </div>
          </motion.div>

          <motion.div {...animations.fadeInRight} className={styles.aboutRight}>
            <div className={styles.aboutVisualBox}>
              <div className={styles.placeholderBox}>
                <span className={styles.placeholderText}>[ Insère ton image ou illustration ici ]</span>
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
  aboutTitle: "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]",
  aboutText: "text-muted-foreground text-base sm:text-lg leading-relaxed",
  btnContainer: "pt-2",
  linkBtn: "p-0 gap-1 text-base",
  aboutRight: "w-full flex justify-center",
  aboutVisualBox: "w-full max-w-[500px] aspect-[4/3] relative bg-muted/30 rounded-2xl",
  placeholderBox: "absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20",
  placeholderText: "text-sm font-medium text-muted-foreground",
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