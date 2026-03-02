import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import BookSection from "./components/BookSection";
import Experiences from "./components/Experiences";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <BookSection />
      <Experiences />
      <CallToAction />
      <Footer />
    </main>
  );
}
