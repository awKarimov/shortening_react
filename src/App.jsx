import "./i18n";
import Header from "./components/Header/Index";
import Hero from "./components/Hero/Hero";
import Advertisement from "./components/Advertisement/Advertisement";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Advertisement />
      <Cta />
      <Footer />
    </>
  );
}
