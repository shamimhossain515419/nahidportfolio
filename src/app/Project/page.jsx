'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'


const Project = () => {

     const router = useRouter()
     const handleSubmit = (e) => {
          e.preventDefault();
          const from = e.target;
          const image = from.image.value;
          const data = { date: new Date(), img: image }
          fetch('https://hahidportfolio-47qlar1hj-shamimusman515419.vercel.app/product', {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(data),
          }).then(result => {
               console.log(result);
               if (result) {
                    from.reset();
                    router.push('/work')
                   alert("post success")
               }
          })
        

     }

     return (
          <div>
               <div className=' m-3 bg-black text-white inline-block  px-2 py-2 rounded-md text-center'>
                    <Link className=' text-xl font-bold ' href={'/delete'}>Delete</Link>
               </div>

               <div className=" mt-10  max-w-[1000px] mx-auto  shadow-lg p-1 md:p-4">
                    <h1 className=" text-2xl font-semibold my-8 text-center text-[#582ad8]"> Upload Project</h1>

                    <form onSubmit={handleSubmit}>
                         <div>
                              <div className=" boxshadow p-2 rounded-md w-full my-2">
                                   <label htmlFor="Name" className=" text-xl font-semibold  mt-3" > image</label>
                                   <input required className="mt-2 w-full     outline rounded-lg outline-[#582ad8] p-2 text-lg font-semibold " type="text" placeholder=" image " name="image" id="" />
                              </div>

                              <div className="  ">
                                   <button type="submit" className=" w-full  block buttonBox boxshadow my-3 text-center text-2xl "> Submit Project </button>
                              </div>
                         </div>
                    </form>

               </div>
          </div>
     );
};

export default Project;