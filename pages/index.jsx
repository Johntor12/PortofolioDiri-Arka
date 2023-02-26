import Navbar from "../pages/components/Navbar/navbar";
import Hero from "../pages/components/Hero/index";
import Skills from "../pages/components/Skill/index";
import Experience from "../pages/components/Experience/index";
import Footer from "../pages/components/Footer/footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col relative justify-center align-items-center bg-gradient-to-r from-[#010332] to-black min-h-[90vh] text-white">
        <Navbar></Navbar>
        <Hero></Hero>
        <Skills></Skills>
        <Experience></Experience>
        <Footer></Footer>
      </main>
    </>
  );
}
