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
        <Hero />
        <History />
        <Carrousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
