import Navbar from "@/components/navbar";
import Herosection from "@/components/herosection";
import Sponsor from "@/components/sponsor";
import Rules from "@/components/rules";
import Timeline from "@/components/timeline";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Quickfacts from "@/components/quickfacts";
import Quickaccess from "@/components/quickaccess";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-white page-bg">
      <Navbar />
      <main>
        <Herosection />
        <Sponsor />
        <Quickfacts />
        <Rules />
        <Timeline />
        <Cta />
        <Quickaccess />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
