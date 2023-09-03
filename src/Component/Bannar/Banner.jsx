
import Image from "next/image";
import { FaHandSparkles } from 'react-icons/fa'
import Link from "next/link";
import BannerParagramp from "./BannerParagramp";
const Banner = () => {
     return (
          <div>
               <div className='  md:mx-[150px] max-w[2400] 2xl:px-32 xl:px-24 md:px-16 px-3'>
                    <div className=" grid  grid-cols-1 md:grid-cols-2 gap-5 items-center md:min-h-[80vh]">
                         <div>
                              <h1 className=" text-base md:text-lg font-medium uppercase mt-2"> WELCOME TO MY PORTFOLIO</h1>
                              <h1 className=" text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold my-2 capitalize">Hi, I’m Nahid Hossain</h1>
                              <h1 className=" text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold my-2 capitalize "> a  <span className=" text-[#1a53ff]"> graphic designer </span> </h1>
                              <BannerParagramp></BannerParagramp>
                              <div>
                                   <div className=" inline-block ">
                                        <Link
                                             href="/contact"
                                             className=" flex buttonBox my-6  text-lg boxshadow items-center gap-2"
                                        >
                                             <span>Say Hello</span>
                                             <FaHandSparkles size={24}></FaHandSparkles>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                         <div>

                              <div className="  mx-auto max-w-[400px] p-5 bg-[#ECF0F3] boxshadow rounded-xl ">
                                   <div>
                                        <Image width={500} height={400} alt="" src={"https://i.ibb.co/YZLrWRL/329701389-2478861195602911-7076735125260146376-n.jpg"}></Image>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;