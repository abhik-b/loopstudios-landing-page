import Head from "next/head";
import Creations from "../components/Creations";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Leader from "../components/Leader";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LoopStudios | Abhik B</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Hero />
      <Leader />
      <Creations />
      <Footer />
    </div>
  );
}
