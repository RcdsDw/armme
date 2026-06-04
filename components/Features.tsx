"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Monitor, Sparkles, Code, CheckCircle2 } from "lucide-react"; // Icônes adaptées aux services

const services = [
  {
    id: "service-1",
    title: "Site Vitrine Standard",
    icon: <Monitor className="h-6 w-6 text-blue-600" />,
    shortDesc: "La solution rapide pour poser les bases de votre présence en ligne.",
    fullDesc: "Idéal pour les artisans, indépendants ou petites entreprises qui ont besoin d'être visibles sur Google. Comprend une page d'accueil percutante, une page de présentation de vos services et un formulaire de contact.",
    bullets: ["Design responsive (mobile, tablette, PC)", "Optimisation SEO Google", "Statistiques de visites intégrées"]
  },
  {
    id: "service-2",
    title: "Site Vitrine Sur Mesure",
    icon: <Code className="h-6 w-6 text-indigo-600" />,
    shortDesc: "Une expérience utilisateur unique développée selon vos exigences exactes.",
    fullDesc: "Pour les entreprises qui veulent se démarquer de la concurrence avec une identité forte. Nous concevons le design à partir d'une feuille blanche et intégrons des fonctionnalités avancées (système de réservation, espace client, filtres dynamiques).",
    bullets: ["Maquette unique et sur mesure", "Intégration d'outils tiers (CRM, Stripe, Agenda)", "Animations avancées fluides"]
  },
  {
    id: "service-3",
    title: "Optimisation & Refonte",
    icon: <Sparkles className="h-6 w-6 text-violet-600" />,
    shortDesc: "Modernisez votre vieux site web pour maximiser vos conversions.",
    fullDesc: "Votre site actuel est lent ou ne vous apporte aucun client ? Nous reprenons votre structure pour la migrer sur Next.js afin de diviser par 3 le temps de chargement, d'améliorer votre score SEO et de moderniser le design pour capter l'attention.",
    bullets: ["Audit de performances complet", "Migration vers une stack moderne", "Amélioration du taux de conversion"]
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Nos Services & Expertises</h2>
          <p className={styles.subtitle}>Cliquez sur un service pour découvrir le détail de nos prestations.</p>
        </div>

        {/* Grille de cartes asynchrones au scroll */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div key={service.id} {...animations.card(index * 0.15)}>
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <div className={styles.iconBox}>{service.icon}</div>
                  <CardTitle className={styles.cardTitle}>{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className={styles.cardContent}>
                  <p className={styles.shortDesc}>{service.shortDesc}</p>
                  
                  {/* Le fameux Accordion Shadcn pour déplier les cartes */}
                  <Accordion type="single" collapsible className="w-full mt-4">
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className={styles.trigger}>
                        Voir les détails du service
                      </AccordionTrigger>
                      <AccordionContent className={styles.accordionContent}>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.fullDesc}
                        </p>
                        <ul className="space-y-2">
                          {service.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// --- CENTRALISATION DES STYLES ---
const styles = {
  section: "w-full bg-muted/40 border-y py-24",
  container: "container mx-auto px-4",
  header: "text-center max-w-2xl mx-auto mb-16",
  title: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
  subtitle: "text-muted-foreground text-lg",
  grid: "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start",
  card: "h-full bg-card shadow-sm hover:shadow-md transition-shadow duration-300",
  cardHeader: "flex flex-row items-center gap-4 space-y-0 pb-3",
  iconBox: "p-2 rounded-lg bg-background border",
  cardTitle: "text-xl font-bold tracking-tight",
  cardContent: "text-left pt-2",
  shortDesc: "text-muted-foreground text-sm sm:text-base min-h-[50px]",
  trigger: "text-xs font-semibold uppercase tracking-wider text-primary hover:no-underline pt-2 pb-0 justify-start gap-2",
  accordionContent: "pt-4 border-t mt-4 text-sm",
};

const animations = {
  card: (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { delay, duration: 0.5 }
  })
};