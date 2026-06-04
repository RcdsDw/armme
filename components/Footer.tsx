export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/20 py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Armme. Tous droits réservés.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-foreground transition-colors">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}