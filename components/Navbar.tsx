"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className={styles.header}
    >
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          Armme
        </a>
        
        <nav className={styles.nav}>
          <a href="#about" className={`${styles.navLink} ${styles.linkIndigo}`}>
            À propos
            <span className={`${styles.underline} bg-indigo-600`} />
          </a>
          <a href="#features" className={`${styles.navLink} ${styles.linkBlue}`}>
            Services
            <span className={`${styles.underline} bg-blue-600`} />
          </a>
          <a href="#contact" className={`${styles.navLink} ${styles.linkViolet}`}>
            Contact
            <span className={`${styles.underline} bg-violet-600`} />
          </a>
        </nav>

        <div className={styles.actions}>
          <Button size="sm" className={styles.ctaBtn} asChild>
            <a href="#contact">Me contacter</a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

const styles = {
  header: "fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md",
  container: "container mx-auto flex h-16 items-center justify-between px-4",
  logo: "font-extrabold text-xl tracking-tight cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity",
  nav: "hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground",
  
  navLink: "relative py-2 transition-colors duration-300 group",
  underline: "absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
  
  linkBlue: "hover:text-blue-600",
  linkIndigo: "hover:text-indigo-600",
  linkViolet: "hover:text-violet-600",
  
  actions: "flex items-center gap-4",
  ctaBtn: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none shadow-sm transition-all duration-300",
};