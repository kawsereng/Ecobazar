import {Container} from './Container'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { useState } from "react";
import { IoClose, IoChevronForward } from "react-icons/io5";
import { CiApple } from "react-icons/ci";
import { FaBurger } from "react-icons/fa6";
import { IoFishOutline } from "react-icons/io5";
import { GiChickenOven } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { TbIceCream } from "react-icons/tb";
import { RiCake2Line } from "react-icons/ri";
import { GiButter } from "react-icons/gi";
import { LuCookingPot } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

export const Navbar = () => {
    
     const[show,setShow]=useState(false)
     const menuItems = [  
    "Home", 
    "Shop",
    "Pages",
    "Blog",
    "About Us",
    "Contact Us",
  ];

const[all,setAll]=useState(false)
 
  return (
    <>
      <div className="bg-[#333333] w-full h-[60px] ">
        <Container>
          <div className="flex justify-between items-center">
            <ul className="flex items-center gap-x-8 text-sm font-pop font-medium">
              <li className="flex items-center">
                <span className="p-4 bg-[#00B207] h-[60px] flex items-center">
                  <FaBars
                    onClick={() => setShow(true)}
                    size={32}
                    className="text-white cursor-pointer"
                  />
                </span>
                <span className="text-white bg-[#887979] p-5 h-[60px]">
                  <Link to="#" className="flex items-center gap-x-10 "  onClick={() => setAll(!all)}>
                    All Categories  <FaAngleDown size={22} />
                  </Link>
                </span>
              </li>

              <li>
                <Link
                  to="#"
                  className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                >
                  Home <FaAngleDown size={22} />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                >
                  Shop <FaAngleDown size={22} />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                >
                  Pages <FaAngleDown size={22} />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                >
                  Blog <FaAngleDown size={22} />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="font-pop font-medium text-sm text-white">
              <Link to="tel:2195550114" className="flex items-center gap-x-2">
                {" "}
                <PiPhoneCall size={32} />
                (219) 555-0114
              </Link>
            </div>
          </div>

  {/* CATEGORY DROPDOWN */}
        {all ?(   
                  <div className="relative    hover:opacity-100  w-[254px] bg-white ">
                    <ul className="text-black ">

                      <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                      <CiApple className='text-[24px]' /> Fresh Fruit
                      </li>

                      <li className=" flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                      <FaBurger className='text-[24px]'/> Vegetables
                      </li>

                      <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                        <IoFishOutline className='text-[24px]'/>River Fish
                      </li>

                      <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                      <GiChickenOven className='text-[24px]'/> Chicken & Meat
                      </li>

                      <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                        <FaBottleWater className='text-[24px]'/> Drink & Water
                      </li>

                      <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                        <TbIceCream  className='text-[24px]'/> Yogurt & Ice Cream
                      </li>

                      <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                        <RiCake2Line className='text-[24px]'/> Cake & Bread
                      </li>

                      <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                      <GiButter  className='text-[24px]'/>  Butter & Cream
                      </li>

                      <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                        <LuCookingPot className='text-[24px]'/>Cooking
                      </li>

                      <li className="flex items-center gap-2 p-4 border-t hover:bg-green-500 hover:text-white cursor-pointer">
                        <FiPlus className='text-[24px]'/>View All Category
                      </li>

                    </ul>
                  </div>
                    ) :("")}
          </Container>
        </div>



      {/* Sidebar */}

      {show ? (
        <div className="w-[420px] h-full bg-white p-6 border-r border-gray-200 top-0  absolute duration-300">
          {/* Top */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[24px] font-semibold text-black">Menu</h2>

            {/* Close Button */}
            <button onClick={() => setShow(false)}>
              <IoClose size={28} className="text-black cursor-pointer" />
            </button>
          </div>

          {/* Menu Items */}
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-200">
                <Link
                  to="#"
                  className="flex items-center justify-between py-5 text-[18px] text-gray-700 hover:bg-[#00B207] duration-300"
                >
                  {item}

                  <IoChevronForward size={22} className="text-gray-500" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
