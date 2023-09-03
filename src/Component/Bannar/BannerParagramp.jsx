"use client"

import { useState } from "react";

const BannerParagramp = () => {
     const [show, setShow] = useState(false);
     const Parag = " I am a graphic designer with over one year of experience – creating stunning and engaging designs for various clients and industries. I have so much passion for visual communication and a keen eye for details. I enjoy working on challenging and diverse projects that allow me to reveal my creativity and showcase my ability and skills  Some of the projects that I have worked are included here  Designing logos, creating posters, flyers, restaurant food menus, food banners, business and personal card designs, office ID card designs etc  I am proficient in design software and tools such as Adobe Photoshop, Illustrator, Blender(for 3D), Krita, etc. I also have knowledge of design principles, typography, color theory, layout, and branding I can work independently and collaboratively with clients, managers, and other designers.I can follow briefs, guidelines, and deadlines.I can research, brainstorm, sketch, and prototype.I can give and receive feedback and promote and enhance my task If you are looking for a graphic designer who can help you to create beautiful and effective designs that convey your message and appeal to your audience, please feel free to contact me at[nhidhossain@gmail.com] or visit my portfolio at[nahidhossain.com] to see some of my work as samples.I would love to hear from you and discuss how we can work together."
   
     return (
          <div>
           <p className='duration-300 text-lg font-normal my-1'>  {show ? Parag : Parag.slice(0, 250)}    {show ? <span onClick={() => setShow(false)} className=" text-color font-semibold cursor-pointer ">Show less</span> : <span onClick={() => setShow(true)} className=" cursor-pointer  text-color cursor-pointe font-semibold">Show More</span>} </p>
          </div >
     );
};

export default BannerParagramp;