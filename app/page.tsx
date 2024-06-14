import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Places } from "@/components/Places";
import { Schedule } from "@/components/Schedule";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Schedule />
      <Places />
    </>
  );
}
