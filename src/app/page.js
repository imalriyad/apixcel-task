import HomePodcast from "@/components/home/HomePodcast";
import Hero from "@/components/shared/header/hero/Hero";

export default function Home() {
 
  return (
    <div className="py-4">
      <Hero></Hero>
      <HomePodcast></HomePodcast>
    </div>
  );
  
}
