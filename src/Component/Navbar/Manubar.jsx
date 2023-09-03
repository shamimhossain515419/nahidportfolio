import Link from "next/link";

const Manubar = () => {
     return (
          <div>
               <hr />
               <div className=' space-y-3 flex   flex-col '>
                    <div>
                      <Link href={'/'}> Home</Link>
                    </div>
                    <div>
                      <Link href={'/about'}> About</Link>
                    </div>
                    <Link  href={'/work'}> Work</Link>
                    <Link  href={'/contact'}> Contact</Link>
                    
               </div>
          </div>
     );
};

export default Manubar;