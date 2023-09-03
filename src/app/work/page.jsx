import ProductCard from "@/Component/ProductCard/ProductCard";
import GetProduct from "@/Utili/GetProduct";

const WorkPage = async () => {
    
     const product = await GetProduct();
     const projectData = product?.sort((a, b) => new Date(b.date) - new Date(a.date));


     return (
          <div className='px-2'>

               <div className=' grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2'>
                    {
                         projectData?.map(item => <ProductCard key={item._id} card={item}></ProductCard>)
                    }
               </div>

          </div>
     );
};

export default WorkPage;