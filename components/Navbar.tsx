"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const styles = {
  header: "fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md",
  container: "container mx-auto flex h-16 items-center justify-between px-4",
  logo: "font-bold text-xl tracking-tight cursor-pointer",
  nav: "hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground",
  navLink: "hover:text-foreground transition-colors",
  actions: "flex items-center gap-4",
};

export default function Navbar() {
  return (
    <motion.header initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>Armme</a>
        
        <nav className={styles.nav}>
          <a href="#features" className={styles.navLink}>Présentation</a>
          <a href="#pricing" className={styles.navLink}>Formules</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost" size="sm" asChild><a href="#contact">Connexion</a></Button>
          <Button size="sm" asChild><a href="#contact">Démarrer</a></Button>
        </div>
      </div>
    </motion.header>
  );
}