import  Card from "./FloatingCard/Card";
import { DealCard } from "./FloatingCard/DealCard";

export default function HeroProdacts() {
  return (
    <div className="post wrapper max-h-max">
      <DealCard />
      <Card />
      <Card /> 
      <Card /> 
      <Card /> 
    </div>
  );
}
