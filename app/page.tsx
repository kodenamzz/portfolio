import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Experience from "@/components/Experience";
import Approaches from "@/components/Approaches";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import TechStacks from "@/components/TechStacks";
import DarkModeSwitch from "@/components/DarkModeSwitch";

export default function Home() {
  return (
    <main className="relative bg-neutral-100 dark:bg-black-100  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <DarkModeSwitch />
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
