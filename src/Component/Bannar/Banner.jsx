import Image from "next/image";
import {FaHandSparkles} from 'react-icons/fa'
import Link from "next/link";
const Banner = () => {
     return (
          <div>
               <div className='  md:mx-[150px] max-w[2400] 2xl:px-32 xl:px-24 md:px-16 px-3'>
                    <div className=" grid  grid-cols-1 md:grid-cols-2 gap-5 items-center md:min-h-[80vh]">
                         <div>
                              <h1 className=" text-base md:text-lg font-medium uppercase mt-2"> WELCOME TO MY PORTFOLIO</h1>
                              <h1 className=" text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold my-2 capitalize">Hi, I’m Nahid Hossain</h1>
                              <h1 className=" text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold my-2 capitalize "> a  <span className=" text-[#1a53ff]"> graphic designer </span> </h1>
                              <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptatum, voluptas eaque culpa aliquid quo. Repellat soluta porro, ipsam, reiciendis asperiores quis omnis velit, consequuntur tenetur magnam fugiat dicta eveniet? Beatae, tempore id autem voluptatibus nesciunt corporis accusamus a adipisci fugiat sapiente! Distinctio nesciunt iusto sit aut numquam porro alias. Quasi impedit perspiciatis dolores similique saepe, vitae quis ipsa fugit quos delectus voluptatum quas fugiat repudiandae soluta. Voluptatem porro nobis aut adipisci ducimus non fugit officiis modi et, qui sit aspernatur sunt sint quidem quas, excepturi tempore eius ullam consequatur. Eaque, voluptate! Iste voluptatem fuga similique placeat dolor eos porro fugiat corporis vitae ut aliquid reiciendis obcaecati molestiae ab, voluptates officia sit saepe numquam voluptatibus quis deserunt. Saepe, nulla eos.</p>

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
                                        <Image width={500} height={400}  alt=""   src={"https://i.ibb.co/YZLrWRL/329701389-2478861195602911-7076735125260146376-n.jpg"}></Image>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;