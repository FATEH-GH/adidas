import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import QualityProduct from "@/components/QualityProduct";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import Updates from "@/components/Updates";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Products />
      <QualityProduct />
      <Services />
      <SpecialOffer />
      <Customers />
      <Updates />
      <div className="border-2 border-slate-600 rounded-full mx-10" />
      <Footer />
    </main>
  );
}
