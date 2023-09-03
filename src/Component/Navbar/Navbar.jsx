"use client"
import { useState } from "react";
import Container from "../Container/Container";
import Manubar from "./Manubar";
import Link from "next/link";
import { FaBars } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'

const Navbar = () => {
     const [Open, setOpen] = useState(true)
     return (
          <div className='px-2 w-full bg-[#fff] fixed py-3      top-0  left-0 right-0 z-50   shadow'>
               <Container>
                    <div className=' '>
                         <div className=' flex justify-between items-center'>
                              <div className=' flex  items-center gap-4'>
                                   <Link href="/"> <h1 className='  py-2 font-semibold  text-2xl text-color   uppercase'> Nahid Hossain</h1></Link>
                              </div>
                              <div className=' hidden md:block  space-x-5'>
                                   <Link href={'/'}> Home</Link>
                                   <Link href={'/about'}> About</Link>
                                   <Link href={'/work'}> Work </Link>
                                   <Link href={'/contact'}> Contact Us</Link>
                                   <div className="  inline-block  ">
                                        <div className=" flex  items-center gap-4">
                                             <Link className=" mx-2 text-[#1877F2]" target="_black" href={'https://www.facebook.com/nhidhosain'}><BsFacebook size={20}></BsFacebook></Link>
                                             <Link className=" mx-2 text-[#4d8bdc]"  target="_black" href={'https://www.linkedin.com/in/nahid-hossain-8540ba255'}> <BiLogoLinkedin size={20}></BiLogoLinkedin></Link>

                                        </div>
                                   </div>
                              </div>





                              <div onClick={() => setOpen(!Open)} className=' md:hidden '>

                                   {
                                        Open ? <FaBars size={24} className=' '> </FaBars> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                   }

                              </div>
                         </div>

                         <div className='  md:hidden'>
                              {
                                   Open ? "" : <Manubar setOpen={setOpen}></Manubar>
                              }
                         </div>


                    </div>
               </Container>

          </div>
     );
};

export default Navbar;