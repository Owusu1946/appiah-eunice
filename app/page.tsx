import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Experiences />
      <CallToAction />
      <Footer />
    </main>
  );
}
