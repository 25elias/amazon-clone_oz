
import Link from "next/link";
import Card from "./Card";

const Books = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h3 className="pb-2 font-bold text-wrap">Best Sellers in Sports & Outdoors</h3>
        <Link href="/" className="text-xs">Show more</Link>
      </div>
        <Card />
    </div>
  );
};

export default Books;