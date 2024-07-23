import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import TechStacks from "@/components/TechStacks";
import DarkModeSwitch from "@/components/DarkModeSwitch";
import About from "@/components/About";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative bg-neutral-100 dark:bg-black-100  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <DarkModeSwitch />
        <About />
        <Grid />
        <TechStacks />
        <RecentProjects />
        <Experience />
        {/* <Approaches /> */}
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
