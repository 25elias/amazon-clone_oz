import Books from "@/components/HomePage/BestSellers/books/Books";
import SportsOutdoor from "@/components/HomePage/BestSellers/sports_&_outdoors/Sports_&_Outdoor";
import ToysGames from "@/components/HomePage/BestSellers/toys_&_games/Toys_&_Games";
import { Hero } from "@/components/HomePage/Hero/Hero";


export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <div className="relative -top-90 py-12 wrapper">
        <ToysGames />
        <SportsOutdoor />
        <Books />
      </div>
    </div>
  );
}
