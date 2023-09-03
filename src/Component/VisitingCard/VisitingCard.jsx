import Image from "next/image";
import Container from "../Container/Container";



const VisitingCard = () => {
     return (
          <div className=" my-10 mb-10 ">
               <div className='  md:mx-[150px] max-w[2400] 2xl:px-32 xl:px-24 md:px-16 px-3'>
                    <div  >
                         <div className=" text-center ">
                              <h1 className=" text-xl text-[#1a53ff] md:text-2xl  xl:text-3xl  mt-4 font-bold"> Visiting Card Design</h1>
                              <p className=" text-base font-semibold my-2  ">   latest Work</p>
                         </div>

                         <div className=" my-11">
                              <div className=" grid md:grid-cols-3 gap-2 justify-center">
                                   <div className="  h-[350px] w-full ">
                                        <Image className=" rounded-md" layout="responsive" width={400} height={300} src={"https://i.ibb.co/N9XfbBN/Card-pf-1.jpg"} alt=""></Image>
                                   </div>
                                   <div className="  h-[350px] w-full ">
                                        <Image className=" rounded-md" layout="responsive" width={400} height={300} src={"https://i.ibb.co/MBxT6hP/Card-pf-3.jpg"} alt=""></Image>
                                   </div>
                                   <div className="  h-[350px] w-full ">
                                        <Image className=" rounded-md" layout="responsive" width={400} height={300} src={"https://i.ibb.co/541ryTs/Card-pf-4.jpg"} alt=""></Image>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>


          </div>
     );
};

export default VisitingCard;