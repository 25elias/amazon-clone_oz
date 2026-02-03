import React from "react";
import products from "../../../../../../public/api/products";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="p-3  bg-white border border-gray-200 shadow-md rounded">

         <h3 className="mb-2">lorem ipsum</h3>
      <div className="grid grid-cols-2 gap-2">
        {products.slice(0, 4).map(({ title, image, path }) => {
          return (
            <div key={path} className="">
              <div className="">
                <Image
                  src={image}
                  alt={title}
                  width={100}
                  height={110}
                  className="w-25 max-h-35 min-h-35"
                />
              </div>
              <h6 className="pt-1 text-xs text-gray-500 font-normal">
                {title}
              </h6>
            </div>
          );
        })}
      </div>
      <Link
        href="/"
        className="pt-2 text-xs text-gray-700 underline underline-offset-2 decoration-gray-400 font-normal"
      >
        See more
      </Link>
    </div>
  );
};

export default Card;
