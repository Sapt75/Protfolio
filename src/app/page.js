import Header from "./components/header";
import Banner from "./components/banner";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Expertise from "./components/expertise";
import Experience from "./components/experience";
import Achievements from "./components/achievements";
import Contact from "./components/contact";
import Cta from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Intro />
      <Skills />
      <Portfolio />
      <Expertise />
      <Experience />
      <Achievements />
      <Contact />
      <Cta />
      <Footer />
    </>
  );
}
