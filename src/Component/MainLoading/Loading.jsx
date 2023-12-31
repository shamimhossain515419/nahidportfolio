'use client'

import './Loading.css'
import { useState, useEffect } from 'react'
const MainLoading = ({ children }) => {
     const [seconds, setSeconds] = useState(0);

     useEffect(() => {
          if (seconds <= 10) {
               const interval = setInterval(() => {
                    setSeconds(prevSeconds => prevSeconds + 1);
               }, 500);

               return () => clearInterval(interval);
          }
     }, [seconds]);

     if (seconds >= 1) {
          return children
     }

     return (
          <div className=" flex justify-center items-center w-full h-screen ">
               <div className=" w-[150px] px-7 h-[150px] flex justify-center items-center  loading  p-10  text-2xl font-medium text-[#582ad8] ">
                    {"Nahid"}
               </div>
          </div>
     );
};

export default MainLoading;