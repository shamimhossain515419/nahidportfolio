import Image from "next/image";

const ProductCard = ({card}) => {
     const {img}=card
     return (
          <div className=" w-full ">
                <Image width={400} height={500}  className=" w-full object-contain   h-[400px]" src={img} alt=""></Image>
          </div>
     );
};

export default ProductCard;