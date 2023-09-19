import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ card }) => {
     const { img ,_id} = card;
     return (
              <Link href={`/work/${_id}`} className=" cursor-pointer relative  w-full   ">
                 <Image width={500} height={500} className=" w-[500px]   relative object-contain  " src={img} alt=""></Image>
                  <div className=" top-0 duration-300  absolute hover:bg-[#00000093] w-full h-full ">
                     
                 </div>
             </Link>
     );
};

export default ProductCard;