
import Delete from '@/Component/Delete/Delete';
import GetProduct from '@/Utili/GetProduct';
import Link from 'next/link';
import React from 'react';

const DeletePage = async () => {

     const product = await GetProduct();
     const projectData = product?.sort((a, b) => new Date(b.date) - new Date(a.date));
     console.log(projectData);
     return (
          <div>
                <div className=' m-3 bg-black text-white inline-block  px-2 py-2 rounded-md text-center'>
                         <Link className=' text-xl font-bold ' href={'/Project'}>Product</Link>
                    </div>
               <div className=' max-w-[1200px] mx-auto '>
                   

                    <div className=' grid sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-4'>
                         {
                              projectData?.map(item => <Delete card={item} key={item?._id}></Delete>)
                         }
                    </div>
               </div>

          </div>
     );
};

export default DeletePage;