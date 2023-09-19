import MainLoading from "@/Component/MainLoading/Loading";

const loading = () => {
     return (
          <div>
               <div className=" flex justify-center  items-center gap-2 h-screen">
                    <MainLoading></MainLoading>
               </div>
          </div>
     );
};

export default loading;