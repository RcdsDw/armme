import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <Hero />
      <About />
      <Features />
      <ContactForm />
    </main>
  );
}