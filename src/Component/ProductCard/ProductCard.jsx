import Image from "next/image";

const ProductCard = ({ card }) => {
     const { img } = card;
     return (
              <div className=" cursor-pointer relative  w-full   ">
                 <Image width={500} height={500} className=" w-[500px]   relative object-contain  " src={img} alt=""></Image>
                  <div className=" top-0 duration-300  absolute hover:bg-[#00000093] w-full h-full ">
                     
                 </div>
             </div>
     );
};

export default ProductCard;