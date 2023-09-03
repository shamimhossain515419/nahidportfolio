

import Link from "next/link";

const NotFound = () => {
     return (
          <div className="mt-10 text-center flex justify-center h-screen   items-center gap-4">

               <div>
                    <div>
                         <h1 className=" font-xl md:text-4xl 2xl:text-6xl    font-extrabold  mt-6">404 </h1>
                    </div>
                    <h1 className=" text-center md:text-xl font-semibold my-9  3xl:text-4xl ">  Page Not Fount</h1>

                    <Link href="/" className="mt-5 mb-2 inline-block">
                         <button className="btn  px-3 py-2  text-white rounded-xl  btn-primary bg-[#3628f5]">Back to Home</button>
                    </Link>
               </div>
          </div>
     );
};

export default NotFound;