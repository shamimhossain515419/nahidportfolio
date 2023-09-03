

const Container = ({ children }) => {
     return (
          <div className=' max-w-[2400] 2xl:px-20 xl:px-24 md:px-8 px-3'>
               <div className="">
                    {children}
               </div>
          </div>
     );
};

export default Container;