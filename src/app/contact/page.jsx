'use client'
import ContactBox from '@/Component/ContactPage/ContactBox';
import Container from '@/Component/Container/Container';
import Link from 'next/link';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
const ContactPage = () => {
return (
          <div>

               <div className=" relative py-10">
                    <div>
                         <div className=" my-8  text-center">
                              <p className=" text-base  uppercase "> Contact</p>
                              <h1 className=" text-color mb-3 text-xl md:text-2xl xl:text-4xl font-semibold "> Contact With Me</h1>
                         </div>
                    </div>

                    <Toaster />

                    <Container>
                         <div className="    rounded-lg  mx-auto  px-6 py-3">

                              <div className="  md:grid md:grid-cols-2 items-center md:gap-20">
                                   <div className="   p-1 md:p-4 ">
                                        {/* <Image   width={1000}  className="  w-[500px]   mx-auto text-center p-1  md:p-4 h-[350px] object-contain"  src={contactImage} alt="" /> */}
                                        <h1 className=" text-lg  md:text-xl  font-semibold"> Md: Nahid Hossain</h1>
                                        <h3 className=" text-lg font-semibold my-2 "> Graphic Designer</h3>
                                        <p className=" mt-4 text-lg "> I am available for freelance work. Connect with me via email and call into my account.</p>
                                        <h1 className=" text-base font-semibold">Phone:  <span className=" text-lg">+88 01765822494 </span> (whatsApp) </h1>
                                        <h1 className=" text-base font-semibold">Email:  <span className=" text-lg"> nhidhossain@gamil.com </span></h1>

                                        <div className="buttonBox  m-2  boxshadow p-2 inline-block">
                                             <Link href={'https://www.facebook.com/nhidhosain'} target='_blank'><FaFacebook className=' text-2xl  '></FaFacebook></Link>
                                        </div>
                                        <div className="buttonBox  m-2  boxshadow p-2 inline-block">
                                             <Link href={'https://www.linkedin.com/in/nahid-hossain-8540ba255/'} target='_blank'><FaLinkedinIn className=' text-2xl  '></FaLinkedinIn></Link>
                                        </div>
                                   </div>
                                   <div>
                                      <ContactBox></ContactBox>
                                        
                                    </div>
                              </div>

                         </div>
                    </Container>


                   
               </div>

               <Toaster
                    position="top-center"
                    reverseOrder={false}
               />

          </div>
     );
};

export default ContactPage;