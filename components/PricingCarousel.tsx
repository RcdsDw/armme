"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const formulas = [
  {
    name: "Essentiel",
    price: "29€",
    desc: "Parfait pour démarrer votre activité en ligne sereinement.",
    features: ["Site vitrine 3 pages", "Optimisation SEO de base", "Support par email", "Hébergement inclus"],
    popular: false,
  },
  {
    name: "Premium",
    price: "79€",
    desc: "La formule idéale pour booster votre croissance.",
    features: ["Site vitrine illimité", "SEO Avancé & Local", "Animations premium", "Support 24/7", "Tableau de bord"],
    popular: true,
  },
  {
    name: "Sur Mesure",
    price: "Contact",
    desc: "Pour les entreprises aux besoins spécifiques et complexes.",
    features: ["Design unique de zéro", "Intégrations API & CRM", "Accompagnement dédié", "Maintenance mensuelle"],
    popular: false,
  },
];

export default function PricingCarousel() {
  return (
    <section id="pricing" className="w-full py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nos Formules</h2>
          <p className="text-muted-foreground">Des offres claires et adaptées à chaque étape de votre développement.</p>
        </div>

        {/* Conteneur du Carrousel Shadcn */}
        <div className="max-w-4xl mx-auto px-8">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {formulas.map((formula, index) => (
                <CarouselItem key={index} className="md:grid-cols-1 lg:basis-1/2 xl:basis-1/3 p-2">
                  <Card className={`h-full flex flex-col transition-all relative ${formula.popular ? "border-primary shadow-lg scale-102" : ""}`}>
                    {formula.popular && (
                      <span className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">
                        Populaire
                      </span>
                    )}
                    <CardHeader className="text-left">
                      <CardTitle className="text-xl font-bold">{formula.name}</CardTitle>
                      <CardDescription className="min-h-[40px] mt-2">{formula.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow text-left">
                      <div className="mb-6">
                        <span className="text-3xl font-extrabold">{formula.price}</span>
                        {formula.price !== "Contact" && <span className="text-muted-foreground text-sm">/mois</span>}
                      </div>
                      <ul className="space-y-3 text-sm">
                        {formula.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant={formula.popular ? "default" : "outline"}>
                        {formula.price === "Contact" ? "Nous contacter" : "Choisir cette offre"}
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}