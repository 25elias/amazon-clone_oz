import Link from 'next/link';
import Image from 'next/image';
import products from '../../../../../public/api/products';

const Card = () => {
  return (
    <div className="flex gap-2 overflow-x-auto">
        {
            products.slice(0,4).map(({path, image, title}) => { 
                return(
                    <Link key={path} href={path}>
                        <Image
                        src={image}
                        alt={title} 
                        width={200}
                        height={200} 
                        className="min-w-50 h-50 max-h-50"/>
                    </Link>
                )
            })
        }
    </div>
  );
};


export default Card;