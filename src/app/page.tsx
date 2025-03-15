import { Carrousel, Contact, Footer, Header, Hero, History, Products } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <History />
        <Carrousel />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
