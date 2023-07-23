import Nav from "@/components/Nav";
import Line from "@/components/Line";
import HeroSection from "@/components/Sections/HeroSection";
import Section2 from "@/components/Sections/Section2";
import SectionFeatures from "@/components/Sections/SectionFeatures";
import { SectionAbout } from "@/components/Sections/SectionAbout";
import { SectionPrice } from "@/components/Sections/SectionPrice";
import Footer from "@/components/Footer";

export default function Home() {
  const editorLink = "https://editor.buildyourresume.online/signup";
  
  return (
    // make whole page with 10/12 width and center it on above medium screens
    <div className="app px-[11%] py-[2.5rem]  flex flex-col gap-20  ">
      {/* paint each section */}
      <Nav editorLink={editorLink} />
      <HeroSection />
      <Line />
      <Section2 editorLink={editorLink} />
      <Line />
      <SectionFeatures editorLink={editorLink} />
      <Line />
      <SectionAbout editorLink={editorLink} />
      <Line />
      <SectionPrice editorLink={editorLink} />
      <Line />
      <Footer />
    </div>
  );
}
