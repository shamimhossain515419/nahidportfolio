import GetProduct from "@/Utili/GetProduct";
import Image from "next/image";
import Link from "next/link";
import { BsEye } from "react-icons/bs";


const VisitingCard = async () => {
     const product = await GetProduct();
     const projectData = product?.sort((a, b) => new Date(b.date) - new Date(a.date));

     return (
          <div className=" my-10 mb-10 ">
               <div className='  md:mx-[150px] max-w[2400] 2xl:px-32 xl:px-24 md:px-16 px-3'>
                    <div  >
                         <div className=" text-center ">
                              <h1 className=" text-xl text-[#1a53ff] md:text-2xl  capitalize xl:text-3xl  mt-4 font-bold"> latest Work</h1>

                         </div>

                         <div className=" my-11">
                              <div className=" grid md:grid-cols-3 gap-2 justify-center">

                                   {
                                        projectData?.slice(0, 3).map(item =>
                                             <div key={item._id} className=" cursor-pointer relative  w-full   ">
                                                  <Link href={'/work'}>
                                                       <Image width={500} height={500} className=" w-[500px]   relative object-contain  " src={item?.img} alt=""></Image>
                                                       <div className=" top-0 duration-300  absolute hover:bg-[#00000093] w-full h-full ">

                                                       </div>
                                                  </Link>
                                             </div>)
                                   }


                              </div>

                              <div className=" flex mt-10  justify-center items-center gap-2">

                                   <div className=" inline-block ">
                                        <Link
                                             href="/work"
                                             className=" flex buttonBox my-6  text-lg boxshadow items-center gap-2"
                                        >
                                             <span>See my all work</span>
                                             <BsEye size={24}></BsEye>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>


          </div>
     );
};

export default VisitingCard;