'use client';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
const ContactBox = () => {

     const sendEmail = (e) => {
          e.preventDefault();
          const from = e.target;
          console.log(from.name.value);
          // emailjs.sendForm('service_3aw79ro', 'template_141fz2g', form.current, 'YDQbnPcNUrXTXhLlP')
          //      .then((result) => {
          //           if (result.text) {
          //                toast('Success Message')
          //                from.reset();
          //           }

          //      }, (error) => {
          //           toast(`${error.message}`)
          //      });
     };




     return (
          <div>
               <div className=" mt-10  md:max-w-[1000px] mx-auto">

                    <form onSubmit={sendEmail}>
                         <div className=" w-full my-2">
                              <label htmlFor="Name" className=" text-xl font-semibold  mt-3" > Name:</label>
                              <input required className="mt-2 w-full  border border-[#100f0f]  focus:border-none hover:outline-1   focus:outline rounded-lg focus:outline-[#582ad8] p-2 text-lg font-semibold " type="text" placeholder=" Your name " name="name" id="" />
                         </div>
                         <div className=" w-full my-2">
                              <label className="  mt-4  text-xl font-semibold " htmlFor="Email" > Email:</label>
                              <input required className="p-2  border border-[#100f0f]  focus:border-none    mt-2 w-full   hover:outline-1   focus:outline rounded-lg focus:outline-[#582ad8] " type="email" placeholder=" Your Email " name="email" id="email" />
                         </div>
                         <div className=" w-full my-2">
                              <label className="  mt-4  text-xl font-semibold " htmlFor="Email" > Message:</label>
                              <textarea required className="p-2 border border-[#100f0f]  focus:border-none     mt-2 w-full   hover:outline-1   rounded-lg focus:outline focus:outline-[#582ad8] " name="message" rows={8} ></textarea>
                         </div>
                         <div className=" w-full my-2">
                              <button type="submit" className=" buttonBox  shadow-md  outline-none border-none text-xl font-medium py-2 rounded-md text-center w-full " >Send massage</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default ContactBox;