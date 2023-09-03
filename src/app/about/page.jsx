import Image from 'next/image';
import React from 'react';
import aboutImage from '../../../public/dark 1.1.jpg'
import { FaHandSparkles } from 'react-icons/fa';
import Link from 'next/link';

const AboutPage = () => {
     return (
          <div className=' mt-5 md:py-11 max-w-[800px] mx-auto text-center'>
               <div>
                    <div className=' w-[250px] h-[250px]  mx-auto   text-center rounded-full   overflow-hidden mt-5'>
                         <Image className=' mx-auto text-center rounded-full' layout='responsive' src={aboutImage} alt=''></Image>
                    </div>

                    <div>
                         <h1 className=' text-base font-semibold  my-3 md:text-xl 2xl:text-3xl '>Nahid Hossain</h1>
                         <h2 className=' py-2 text-sm md:text-lg font-medium  xl:text-xl mt-2'> Jr. Designer / Art Director</h2>
                    </div>
                    <div className=' my-7'>

                         <p className=' base font-light'>I’m an independent graphic designer located in Bogura,Bangladesh. My on-the-job experience with Tech Genius Agency has offered me a well-rounded skill set in graphic design.  I have experience in creating results-driven, creative design solutions with a specialization in poster and brand identity design. I believe in getting your products on the shelf with a beautiful yet utilitarian design that delivers results and engages customers. I’m inspired by companies with big visions and by start-ups with big dreams, and I want to help you build something incredible. If you are in the market for help with your brand, get in touch and let’s talk.</p>
                    </div>


                    <div  className=' my-5'>
                         <div className=" inline-block ">
                              <Link
                                   href="/contact"
                                   className=" flex buttonBox my-6  text-lg boxshadow items-center gap-2"
                              >
                                   <span>Get in Touch</span>
                                 
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AboutPage;