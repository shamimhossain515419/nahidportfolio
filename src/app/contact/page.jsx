'use client'
import Container from '@/Component/Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import contactImage from '../../../public/Momo-inn 3.jpg'

const ContactPage = () => {

     const sendEmail = () => {

     }
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

                              <div className="  md:grid md:grid-cols-2 md:gap-20">
                                   <div className="   p-1 md:p-4 ">
                                        <Image   width={1000}  className="  w-[500px]   mx-auto text-center p-1  md:p-4 h-[350px] object-contain"  src={contactImage} alt="" />
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
                                        <div className=" mt-10  md:max-w-[1000px] mx-auto">

                                             <form  onSubmit={sendEmail}>
                                                  <div className=" w-full my-2">
                                                       <label htmlFor="Name" className=" text-xl font-semibold  mt-3" > Name:</label>
                                                       <input required className="mt-2 w-full  border border-[#100f0f]  focus:border-none hover:outline-1   focus:outline rounded-lg focus:outline-[#582ad8] p-2 text-lg font-semibold " type="text" placeholder=" Your name " name="name" id="" />
                                                  </div>
                                                  <div className=" w-full my-2">
                                                       <label className="  mt-4  text-xl font-semibold " htmlFor="Email" > Email:</label>
                                                       <input required className="p-2  border border-[#100f0f]  focus:border-none    mt-2 w-full   hover:outline-1   focus:outline rounded-lg focus:outline-[#582ad8] " type="email" placeholder=" Your Email " name="email" id="email" />
                                                  </div>
                                                  <div className=" w-full my-2">
                                                       <label className="  mt-4  text-xl font-semibold " htmlFor="Email" > Message:</label>
                                                       <textarea required className="p-2 border border-[#100f0f]  focus:border-none     mt-2 w-full   hover:outline-1   focus:outline focus:outline-[#582ad8] " name="message" rows={8} ></textarea>
                                                  </div>
                                                  <div className=" w-full my-2">
                                                       <button className=" buttonBox  shadow-md  outline-none border-none text-xl font-medium py-2 rounded-md text-center w-full " type="submit" >Send massage</button>
                                                  </div>
                                             </form>
                                        </div> </div>
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