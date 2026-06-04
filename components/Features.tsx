"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Monitor, Code, Sparkles, Layers, ShieldCheck, Cpu, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "service-1",
    title: "Site Vitrine Standard",
    icon: <Monitor className="h-6 w-6" />,
    shortDesc: "La solution rapide et efficace pour poser les bases de votre présence en ligne.",
    fullDesc: "Idéal pour les indépendants, artisans ou petites entreprises qui ont besoin d'une visibilité immédiate et propre. Je conçois un site vitrine épuré, percutant et ultra-rapide qui va droit au but pour convertir vos visiteurs en clients.",
    bullets: ["Design fluide & responsive (Mobile, Tablette, PC)", "Optimisation SEO Google (Référencement naturel)", "Formulaire de contact sécurisé et statistiques de visites"],
    themeColor: "text-blue-600 bg-blue-50 border-blue-100 dark:bg-blue-950/30 dark:border-blue-900/50"
  },
  {
    id: "service-2",
    title: "Site Vitrine Sur Mesure",
    icon: <Code className="h-6 w-6" />,
    shortDesc: "Une expérience utilisateur unique développée selon vos exigences exactes.",
    fullDesc: "Pour les structures qui veulent se démarquer avec une identity forte. Du maquettage graphique initial au développement Fullstack (Front-End & Back-End), je conçois votre projet à partir d'une feuille blanche pour intégrer vos fonctionnalités spécifiques.",
    bullets: ["Maquettage UX/UI personnalisé et exclusif", "Gestion complète des Bases de Données (BDD)", "Intégrations sur mesure (Réservations, Stripe, CRM)"],
    themeColor: "text-indigo-600 bg-indigo-50 border-indigo-100 dark:bg-indigo-950/30 dark:border-indigo-900/50"
  },
  {
    id: "service-3",
    title: "Optimisation & Refonte",
    icon: <Sparkles className="h-6 w-6" />,
    shortDesc: "Modernisez votre site web existant pour maximiser vos performances.",
    fullDesc: "Votre site actuel est lent, daté ou ne génère aucun prospect ? Je réalise un benchmark complet de vos performances et migre votre structure vers une stack moderne et ultra-rapide (Next.js) pour booster votre taux de conversion et votre score SEO.",
    bullets: ["Audit technique & Benchmark de performances complet", "Migration de code vers une architecture moderne", "Optimisation SEO et réduction drastique des temps de chargement"],
    themeColor: "text-violet-600 bg-violet-50 border-violet-100 dark:bg-violet-950/30 dark:border-violet-900/50"
  },
  {
    id: "service-4",
    title: "Architecture & Renfort",
    icon: <Layers className="h-6 w-6" />,
    shortDesc: "Une intervention ponctuelle et agile en renfort sur vos bases de code.",
    fullDesc: "Besoin d'un coup de main expert sur un projet existant ? J'interviens de manière ciblée sur votre code pour débloquer des situations complexes, restructurer une architecture logicielle ou développer de nouvelles briques applicatives, le tout sans intermédiaire.",
    bullets: ["Collaboration agile et directe avec vos équipes", "Analyse, refactoring et sécurisation de code existant", "Flexibilité maximale sur la durée de l'intervention"],
    themeColor: "text-blue-600 bg-blue-50 border-blue-100 dark:bg-blue-950/30 dark:border-blue-900/50"
  },
  {
    id: "service-5",
    title: "DevOps & CI/CD",
    icon: <ShieldCheck className="h-6 w-6" />,
    shortDesc: "Automatisez vos déploiements pour une infrastructure cloud sécurisée.",
    fullDesc: "Sécurisez vos mises en production grâce à la mise en place de pipelines CI/CD automatisés. Je configure et optimise vos environnements de déploiement pour que chaque modification de code soit testée et mise en ligne proprement, sans aucune interruption de service.",
    bullets: ["Mise en place de pipelines CI/CD de bout en bout", "Configuration d'infrastructures Cloud", "Automatisation des processus et sécurisation des environnements"],
    themeColor: "text-indigo-600 bg-indigo-50 border-indigo-100 dark:bg-indigo-950/30 dark:border-indigo-900/50"
  },
  {
    id: "service-6",
    title: "Intégration IA & Automatisation",
    icon: <Cpu className="h-6 w-6" />,
    shortDesc: "Connectez vos outils aux technologies d'Intelligence Artificielle.",
    fullDesc: "Insérez de l'intelligence et de l'automatisation dans vos flux de travail ou vos applications. Qu'il s'agisse de connecter des API d'IA modernes, de traiter de la donnée de manière intelligente ou d'automatiser des tâches répétitives, je rends vos plateformes plus autonomes.",
    bullets: ["Connexion et configuration d'API d'IA (OpenAI, etc.)", "Scripts d'automatisation de processus métiers", "Traitement et structuration intelligente de la donnée"],
    themeColor: "text-violet-600 bg-violet-50 border-violet-100 dark:bg-violet-950/30 dark:border-violet-900/50"
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.subtitle}>Cliquez sur un service pour découvrir les détails de la prestation.</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const colors = service.themeColor.split(" ");
            const textColor = colors[0];
            const bgColor = colors[1];
            const borderColor = colors[2];

            return (
              <motion.div key={service.id} {...animations.card(index * 0.15)}>
                <Card className={styles.card}>
                  <CardHeader className={styles.cardHeader}>
                    <div className={`${styles.iconBox} ${bgColor} ${borderColor} ${textColor}`}>
                      {service.icon}
                    </div>
                    <CardTitle className={`${styles.cardTitle} ${textColor}`}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className={styles.cardContent}>
                    <p className={styles.shortDesc}>{service.shortDesc}</p>
                    
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
                                <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${textColor}`} />
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
            );
          })}
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: "w-full bg-muted/40 border-y py-24",
  container: "container mx-auto px-4",
  header: "text-center max-w-2xl mx-auto mb-16",
  title: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
  subtitle: "text-muted-foreground text-lg",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start",
  card: "h-full bg-card shadow-sm hover:shadow-md transition-shadow duration-300",
  cardHeader: "flex flex-row items-center gap-4 space-y-0 pb-3",
  iconBox: "p-2.5 rounded-xl border flex items-center justify-center transition-all",
  cardTitle: "text-lg font-bold tracking-tight",
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