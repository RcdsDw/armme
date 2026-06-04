"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé ! (Simulation)");
  };

  return (
    <section id="contact" className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Contactez-nous</h2>
          <p className="text-muted-foreground">Une question ? Un projet en tête ? Écrivez-nous, on vous répond en moins de 24h.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Infos de contact */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 justify-center flex flex-col">
            <h3 className="text-xl font-bold">Restons en contact</h3>
            <p className="text-muted-foreground">Prêt à transformer votre présence en ligne ? Rencontrons-nous ou discutons à distance.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground"><Mail className="text-primary h-5 w-5" /> contact@armme.com</div>
              <div className="flex items-center gap-3 text-muted-foreground"><Phone className="text-primary h-5 w-5" /> +33 1 23 45 67 89</div>
              <div className="flex items-center gap-3 text-muted-foreground"><MapPin className="text-primary h-5 w-5" /> Paris, France</div>
            </div>
          </motion.div>

          {/* Formulaire pur */}
          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-xl bg-card shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nom</label>
                <Input placeholder="Dupont" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Prénom</label>
                <Input placeholder="Jean" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="jean.dupont@email.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea className="w-full min-h-[100px] p-3 rounded-md border bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Parlez-nous de votre besoin..." required />
            </div>
            <Button type="submit" className="w-full gap-2">
              Envoyer le message <Send className="h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}