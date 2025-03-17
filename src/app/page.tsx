"use client";
import { Element } from "react-scroll";
import {
  Carrousel,
  Contact,
  Footer,
  Header,
  Hero,
  History,
} from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Element name="root">
          <Hero />
        </Element>
        <Element name="history">
          <History />
        </Element>
        <Element name="products">
          <Carrousel />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      <Footer />
    </div>
  );
}
