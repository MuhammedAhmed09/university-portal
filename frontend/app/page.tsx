import Features from "@/components/app/features";
import Footer from "@/components/app/footer";
import Hero from "@/components/app/hero";
import Navbar from "@/components/app/navbar";
import Roles from "@/components/app/roles";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-y-6">
      <Navbar />
      <Hero />
      <Roles />
      <Features />
      <Footer />
    </div>
  );
}
