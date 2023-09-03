import Image from "next/image";
import ProductCard from "../ProductCard/ProductCard";
const VisitingCard = async () => {
     const res = await fetch('https://hahidportfolio.vercel.app/product', {
          cache: 'no-cache'
     });
     const product = await res.json();
     const projectData = product?.sort((a, b) => new Date(b.date) - new Date(a.date));

     return (
          <div className=" my-10 mb-10 ">
               <div className='  md:mx-[150px] max-w[2400] 2xl:px-32 xl:px-24 md:px-16 px-3'>
                    <div  >
                         <div className=" text-center ">
                              <h1 className=" text-xl text-[#1a53ff] md:text-2xl  xl:text-3xl  mt-4 font-bold"> Visiting Card Design</h1>
                              <p className=" text-base font-semibold my-2  ">   latest Work</p>
                         </div>

                         <div className=" my-11">
                              <div className=" grid md:grid-cols-3 gap-2 justify-center">

                                   {
                                        product?.slice(0, 3).map(item =>
                                             <div key={item._id} className=" cursor-pointer relative  w-full   ">
                                                  <Image width={500} height={500} className=" w-[500px]   relative object-contain  " src={item?.img} alt=""></Image>
                                                  <div className=" top-0 duration-300  absolute hover:bg-[#00000093] w-full h-full ">

                                                  </div>
                                             </div>)
                                   }


                              </div>
                         </div>
                    </div>
               </div>


          </div>
     );
};

export default VisitingCard;