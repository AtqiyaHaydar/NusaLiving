import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="mt-2 flex flex-col items-center gap-y-20">
      <Hero />
      <AboutUs />
    </main>
  );
}
