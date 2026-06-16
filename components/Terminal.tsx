"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, ShieldAlert, Download } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  
  const isFirstRender = useRef(true);

  useEffect(() => {
    setIsMounted(true);
    setHistory([
      {
        command: "system-init",
        output: "Système ARMME initialisé avec succès. Tapez 'help' pour voir les commandes disponibles.",
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, [history]);

  const commands: Record<string, () => React.ReactNode> = {
    help: () => (
      <div className={styles.cmdHelpGrid}>
        <div><span className="text-emerald-400">help</span> : Affiche cette liste</div>
        <div><span className="text-emerald-400">about</span> : Qui suis-je ?</div>
        <div><span className="text-emerald-400">cv</span> : Télécharge mon CV immédiatement</div>
        <div><span className="text-emerald-400">skills</span> : Liste mes compétences tech</div>
        <div><span className="text-emerald-400">clear</span> : Nettoie l'écran du terminal</div>
        <div><span className="text-emerald-400">secret</span> : ???</div>
      </div>
    ),
    about: () => (
      <p className="text-zinc-300">
        Développeur Fullstack passionné par les interfaces dynamiques, Next.js et le design léché. 
        Actuellement en train de propulser le projet <span className="text-amber-400">ARMME</span>.
      </p>
    ),
    cv: () => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/cv.pdf"; 
        link.download = "CV_Developpeur.pdf";
        link.click();
      }, 500);

      return (
        <span className="text-blue-400 flex items-center gap-2">
          <Download className="w-4 h-4 animate-bounce" /> 
          Préparation du fichier... Téléchargement de 'CV_Developpeur.pdf' démarré !
        </span>
      );
    },
    skills: () => (
      <div className={styles.cmdSkillsFlex}>
        {["React 19", "Next.js 16", "Tailwind v4", "TypeScript", "Radix UI", "Framer Motion"].map((skill) => (
          <span key={skill} className={styles.skillBadge}>
            {skill}
          </span>
        ))}
      </div>
    ),
    secret: () => (
      <span className="text-red-400 flex items-center gap-2">
        <ShieldAlert className="w-4 h-4" /> Accès refusé. Le protocole d'autodestruction n'est pas activé... pour l'instant.
      </span>
    ),
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmedInput = input.trim().toLowerCase();
      
      if (!trimmedInput) return;

      if (trimmedInput === "clear") {
        setHistory([
            {
                command: "system-clear",
                output: "Système ARMME nettoyé avec succès. Tapez 'help' pour voir les commandes disponibles.",
                timestamp: new Date().toLocaleTimeString(),
            },
        ]);
        setInput("");
        return;
      }

      const timestamp = new Date().toLocaleTimeString();
      let output: React.ReactNode;

      if (commands[trimmedInput]) {
        output = commands[trimmedInput]();
      } else {
        output = (
          <span className="text-rose-500">
            Commande inconnue: "{trimmedInput}". Tapez 'help' pour obtenir de l'aide.
          </span>
        );
      }

      setHistory((prev) => [...prev, { command: input, output, timestamp }]);
      setInput("");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.header}>
        <div className={styles.headerTitleContainer}>
          <TerminalIcon className={styles.headerIcon} />
          <span className={styles.headerText}>armme-core@front:~</span>
        </div>
        <div className={styles.headerButtonsContainer}>
          <div className={styles.dotClose} />
          <div className={styles.dotMinimize} />
          <div className={styles.dotMaximize} />
        </div>
      </div>

      <div className={styles.historyArea}>
        {!isMounted ? (
          <div className="space-y-1">
            <div className={styles.historyRowHeader}>
              <div className={styles.historyPromptInfo}>
                <span className="text-emerald-500">➜</span>
                <span className="text-zinc-400">guest@armme:~$</span>
                <span className="text-zinc-200 font-bold">system-init</span>
              </div>
              <span className="opacity-0">00:00:00</span>
            </div>
            <div className={styles.historyOutput}>
              Système ARMME initialisé avec succès. Tapez 'help' pour voir les commandes disponibles.
            </div>
          </div>
        ) : (
          history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className={styles.historyRowHeader}>
                <div className={styles.historyPromptInfo}>
                  <span className="text-emerald-500">➜</span>
                  <span className="text-zinc-400">guest@armme:~$</span>
                  <span className="text-zinc-200 font-bold">{item.command}</span>
                </div>
                <span>{item.timestamp}</span>
              </div>
              <div className={styles.historyOutput}>{item.output}</div>
            </div>
          ))
        )}
      </div>

      <div className={styles.inputArea}>
        <span className={styles.inputArrow}>➜</span>
        <span className={styles.inputPromptPrefix}>guest@armme:~$</span>
        <input
          type="text"
          value={input}
          disabled={!isMounted}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isMounted ? "Tapez une commande... (ex: help, cv)" : "Chargement..."}
          className={styles.inputField}
        />
        <div className={styles.inputBadge}>
          <span>Enter</span>
        </div>
      </div>
    </motion.div>
  );
}

const styles = {
  container: "w-full max-w-2xl mx-auto bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden font-mono text-sm text-zinc-200",
  header: "flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800 select-none",
  headerTitleContainer: "flex items-center gap-2",
  headerIcon: "w-4 h-4 text-zinc-400",
  headerText: "text-xs text-zinc-400 font-semibold tracking-wider uppercase",
  headerButtonsContainer: "flex gap-1.5",
  dotClose: "w-3 h-3 rounded-full bg-rose-500/20 border border-rose-500/40",
  dotMinimize: "w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40",
  dotMaximize: "w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40",
  historyArea: "p-4 h-80 overflow-y-auto space-y-3 custom-scrollbar",
  historyRowHeader: "flex items-center justify-between text-xs text-zinc-500",
  historyPromptInfo: "flex items-center gap-1",
  historyOutput: "pl-5 text-zinc-300 leading-relaxed",
  inputArea: "flex items-center gap-2 px-4 py-3 bg-zinc-900/40 border-t border-zinc-800",
  inputArrow: "text-emerald-500 animate-pulse font-bold",
  inputPromptPrefix: "text-zinc-500 text-xs",
  inputField: "flex-1 bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-600 focus:ring-0 font-mono disabled:opacity-50",
  inputBadge: "flex items-center gap-1 text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-700",
  
  cmdHelpGrid: "grid grid-cols-1 sm:grid-cols-2 gap-1 text-zinc-400",
  cmdSkillsFlex: "flex flex-wrap gap-2 text-zinc-300",
  skillBadge: "px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-xs",
};