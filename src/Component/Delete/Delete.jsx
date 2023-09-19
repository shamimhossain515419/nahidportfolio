
'use client'

import Image from "next/image";
import { BsFillTrash3Fill } from "react-icons/bs";

const Delete = ({ card }) => {
     const handleDelete = (id) => {
          fetch(`https://hahidportfolio-47qlar1hj-shamimusman515419.vercel.app/product/${id}`, {
               method: "DELETE"
          }).then(res => res.json()).then(result => {

               if (result) {
                    window.location.reload();
               }

          })
     }

     return (
          <div className=" boxshadow  p-4 rounded-md  flex gap-10 justify-between items-center ">

               <div className=" h-[100px] w-[100px] rounded-full   ">
                    <Image className=" h-[100px] w-[100px] rounded-full   " width={200} height={200} src={card?.img} alt="img"></Image>
               </div>
               <div onClick={() => handleDelete(card?._id)} className=" cursor-pointer bg-[#ff404083] p-2 rounded-full ">
                    <BsFillTrash3Fill size={24} className=" text-red-600"></BsFillTrash3Fill>
               </div>

          </div>
     );
};

export default Delete;