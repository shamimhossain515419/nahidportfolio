import ProductCard from "@/Component/ProductCard/ProductCard";

const WorkPage = async () => {
     const res = await fetch('https://hahidportfolio.vercel.app/product', {
          cache: 'no-cache'
     });
     const product = await res.json();
     const projectData = product?.sort((a, b) => new Date(b.date) - new Date(a.date));
    

     return (
          <div className='px-2'>

               <div className=' grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2'>
                    {
                         product?.map(item => <ProductCard key={item._id} card={item}></ProductCard>)
                    }
               </div>

          </div>
     );
};

export default WorkPage;