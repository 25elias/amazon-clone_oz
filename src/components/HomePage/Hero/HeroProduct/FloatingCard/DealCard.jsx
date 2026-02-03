import Image from "next/image";
import products from "../../../../../../public/api/products";
import Link from "next/link";

export const DealCard = () => {
  return (
    <div className="p-3 bg-white border border-gray-200 shadow-md rounded">
         <h3 className="mb-2 py-3">lorem ipsum</h3>
        <div className=' grid grid-cols-2 gap-1'>
        {products.slice(0, 4).map(({ title, image, path }) => {
            return (
                <div  key={path} className="">
                <Image
                    src={image}
                    alt={title}
                    width={120}
                    height={130}
                    className="w-30 max-h-35 min-h-35"
                />
                </div>
            );
        })}
        </div>
        <Link href='/'  className='pt-1 text-xs text-gray-700 underline underline-offset-2 decoration-gray-400 font-normal'>
        See more
        </Link>
    </div>
  );
};
