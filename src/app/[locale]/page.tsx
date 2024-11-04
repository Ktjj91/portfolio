import Nav from "@/components/scratch_components/Nav";
import About from "@/components/scratch_components/About";
import Services from "@/components/scratch_components/Services";
import Projects from "@/components/scratch_components/Projects";
import Contact from "@/components/scratch_components/Contact";
import Footer from "@/components/scratch_components/Footer";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Nav />
        <main className="p-4 w-full md:m-4">
            <About />
            <Services />
            <Projects />
            <Contact />
        </main>
        <Footer />
        <Link href="/public">
            <FaArrowAltCircleUp className="text-6xl fixed right-5 bottom-5 z-50" />
        </Link>
    </div>
  );
}
