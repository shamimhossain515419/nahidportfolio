import ProductCard from "@/Component/ProductCard/ProductCard";

const WorkPage = async () => {
     const res = await fetch('http://localhost:5000/product', {
          cache: 'no-cache'
     });
     const product = await res.json();

     return (
          <div   className=' px-4 md:px-6 xl:px-10 my-16'>
               <div className=' mt-10'>
                    <h1 className=' text-3xl 2xl:text-4xl  font-bold text-center my-9'> My Work </h1>
               </div>

               <div className=' grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2'>
                   {
                     product?.map(item=> <ProductCard key={item._id} card={item}></ProductCard>) 
                   }
               </div> 

          </div>
     );
};

export default WorkPage;