import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import FinalCTA from "@/components/sections/FinalCTA";
import { MessageCircle } from "lucide-react";
import ServiceIntro from "@/components/sections/ServiceIntro";
import WhyBoneso from "@/components/sections/WhyBoneso";
import ServicesDetail from "@/components/sections/ServicesDetail";
import Location from "@/components/sections/Location";
export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceIntro />
      <WhyBoneso />
      <ServicesDetail />
      <Projects />
      <Process />
      <FinalCTA />
      <Location />
      <Footer />
      <a
        href="#estimate"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-[9px] bg-[#18A2DF] px-5 py-3 text-sm font-bold tracking-wide text-[#0F1923] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E2C06A]"
      >
        <MessageCircle size={17} />
        Let's Chat
      </a>
      <main></main>
    </>
  );
}
