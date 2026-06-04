"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      lastName: formData.get("lastName"),
      firstName: formData.get("firstName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contactez-moi</h2>
          <p className={styles.subtitle}>Une question ? Un projet en tête ? Écrivez-moi, je vous réponds en moins de 24h.</p>
        </div>

        <div className={styles.grid}>
          <motion.div {...animations.fadeInLeft} className={styles.infoColumn}>
            <h3 className={styles.infoTitle}>Restons en contact</h3>
            <p className={styles.infoText}>Prêt à transformer ton présence en ligne ? Rencontrons-nous ou discutons à distance.</p>
            <div className={styles.infoList}>
              <div className={styles.infoItem}><Mail className={styles.icon} /> contact@armme.com</div>
              <div className={styles.infoItem}><Phone className={styles.icon} /> +33 1 23 45 67 89</div>
              <div className={styles.infoItem}><MapPin className={styles.icon} /> Paris, France</div>
            </div>
          </motion.div>

          <motion.form {...animations.fadeInRight} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nameGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Nom</label>
                <Input name="lastName" placeholder="Dupont" required disabled={loading} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Prénom</label>
                <Input name="firstName" placeholder="Jean" required disabled={loading} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <Input name="email" type="email" placeholder="jean.dupont@email.com" required disabled={loading} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea name="message" className={styles.textarea} placeholder="Parlez-nous de votre besoin..." required disabled={loading} />
            </div>
            
            <Button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? (
                <>Envoi en cours... <Loader2 className="h-4 w-4 animate-spin" /></>
              ) : (
                <>Envoyer le message <Send className="h-4 w-4" /></>
              )}
            </Button>

            {status === "success" && <p className="text-sm font-medium text-emerald-600 mt-2">Message envoyé avec succès !</p>}
            {status === "error" && <p className="text-sm font-medium text-destructive mt-2">Une erreur est survenue, veuillez réessayer.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: "w-full py-20 bg-background",
  container: "container mx-auto px-4",
  header: "text-center max-w-2xl mx-auto mb-16",
  title: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
  subtitle: "text-muted-foreground",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto",
  
  infoColumn: "space-y-6 justify-center flex flex-col",
  infoTitle: "text-xl font-bold",
  infoText: "text-muted-foreground",
  infoList: "space-y-4",
  infoItem: "flex items-center gap-3 text-muted-foreground",
  icon: "text-primary h-5 w-5",

  form: "space-y-4 border p-6 rounded-xl bg-card shadow-sm text-left",
  nameGrid: "grid grid-cols-2 gap-4",
  formGroup: "space-y-2",
  label: "text-sm font-medium",
  textarea: "w-full min-h-[100px] p-3 rounded-md border bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  submitBtn: "w-full gap-2",
};

const animations = {
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true }
  }
};