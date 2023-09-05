'use client'
import ContactBox from '@/Component/ContactPage/ContactBox';
import Container from '@/Component/Container/Container';
import React from 'react';
import { Toaster } from 'react-hot-toast';
export const metadata = {
     title: 'Contact | Nahid Hossain',
     description: 'Generated by create next app',
   }
   
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

                              <div className="  max-w-[1200px] mx-auto   ">
                                  
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