














'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
const ImageSliderPage = ({ params }) => {

     let id = params?.img;
     const [data, setData] = useState([])
     const [SingleData, setSingleData] = useState('');
     const [NextImage, setNextImage] = useState(0);
     let myArray = [];
     data?.map(db => myArray.push(db?._id));

     for (let i = 0; i < myArray.length; i++) {
          if (NextImage == i) {
               console.log(NextImage);
               console.log(i);
               id = (myArray[i]);
               console.log(myArray[i]);
          }

     }


     const handlePrev = () => {
          if (NextImage == 0) {
               setNextImage(myArray?.length)
          } else {
               setNextImage(NextImage - 1)
          }
     }




     const handleNext = () => {
          if (NextImage == myArray?.length) {
               setNextImage(0)
          } else {
               setNextImage(NextImage + 1)
          }
     }


     console.log(NextImage);


     useEffect(() => {
          fetchData()
               .then((response) => {
                    setData(response);
               })
               .catch((error) => {
                    console.error('Error fetching data:', error);
               });
          console.log(id);
          fetchSingleData(id)
               .then((response) => {
                    setSingleData(response);
                    console.log(response);
               })
               .catch((error) => {
                    console.error('Error fetching data:', error);
               });

     }, [id]);


     const fetchData = async () => {
          try {
               const response = await fetch('https://hahidportfolio.vercel.app/product');
               if (!response.ok) {
                    throw new Error('Network response was not ok');
               }
               const data = await response.json();
               return data;
          } catch (error) {
               throw new Error('Error fetching data');
          }
     };
     const fetchSingleData = async (id) => {
          try {
               const response = await fetch(`https://hahidportfolio.vercel.app/product/${id}`);
               if (!response.ok) {
                    throw new Error('Network response was not ok');
               }
               const data = await response.json();
               return data;
          } catch (error) {
               throw new Error('Error fetching data');
          }
     };


     return (
          <div>
               <div className=' bg-white fixed top-0 left-0 w-full h-screen px-10 '>
                    <div className='  flex  gap-5  items-center mx-auto text-center mt-10 '>
                         <div onClick={handlePrev} className=' cursor-pointer h-full'>
                              <FiChevronsLeft className=' text-[20px] md:text-[40px]' ></FiChevronsLeft>
                         </div>
                         <div className=' mx-auto max-h-[70vh] overflow-hidden w-full '>
                              <Image className=' text-center  inline-block ' width={1000} height={600} src={SingleData?.img} alt=''></Image>
                         </div>
                         <div onClick={handleNext} className=' cursor-pointer'>
                              <FiChevronsRight className=' text-[20px] md:text-[40px]'></FiChevronsRight>
                         </div>
                    </div>
                    <div className=' mt-16'>
                         <div className=' flex   overflow-x-scroll justify-center gap-8 my-5'>
                              {
                                   data?.map(item => <Link href={`/work/${item?._id}`} className=' min-w-[150px] min-h-[120px]  cursor-pointer border-1 border-blue-400' key={item?.id}>
                                        <Image className=' rounded-lg  min-w-[150px] min-h-[120px] ' width={150} height={150} src={item?.img} alt="img.freepik.com"></Image>
                                   </Link >)
                              }
                         </div>
                    </div>
                    <Link href={'/work'} className=' text-red-600 absolute top-6 right-6 '>
                         <AiOutlineClose size={28}></AiOutlineClose>
                    </Link>
               </div>
          </div>
     );
};

export default ImageSliderPage;








