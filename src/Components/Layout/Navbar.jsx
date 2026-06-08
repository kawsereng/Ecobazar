import {Container} from './Container'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { useRef, useState } from "react";
import { useOutside } from '../Hooks/Outside';
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
    // category state
    const[all,setAll]=useState(false)
 let dropdownRef  =useRef(null)
  // outside click
  useOutside(dropdownRef, setAll, all);
      // sidebar
     const[show,setShow]=useState(false)




 
  return (
    <>
      <div className="bg-[#333333] w-full h-[60px]  ">
        <Container>
          <div className="flex justify-between items-center ">
            <div className="flex items-center ">
              {" "}
              <FaBars
                className=" bg-[#00B207] text-white text-[60px] p-4 cursor-pointer"
                onClick={() => setShow(true)}
              />
              <div ref={dropdownRef}
                className=" flex text-white bg-[#364153] p-[18px] items-center cursor-pointer"
                onClick={() => setAll(!all)}
              >
                All Catagory{" "}
                <FaAngleDown
                  className="ml-9 text-center items-center"
                  size={22}
                />{" "}
              </div>

              {/* Navbar items */}
              <ul className="flex items-center gap-x-8 text-sm font-pop font-medium ml-10">
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
            </div>
            {/* telephone number */}
            <div className="font-pop font-medium text-sm text-white">
              <Link to="tel:2195550114" className="flex items-center gap-x-2">
                {" "}
                <PiPhoneCall size={32} />
                (219) 555-0114
              </Link>
            </div>
          </div>

          {/* CATEGORY DROPDOWN */}
          {all && (
            <div className="relative z-10    hover:opacity-100  w-[240px] bg-white ">
              <ul className="text-black ">
                <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <CiApple className="text-[24px]" /> Fresh Fruit
                </li>

                <li className=" flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <FaBurger className="text-[24px]" /> Vegetables
                </li>

                <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <IoFishOutline className="text-[24px]" />
                  River Fish
                </li>

                <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <GiChickenOven className="text-[24px]" /> Chicken & Meat
                </li>

                <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <FaBottleWater className="text-[24px]" /> Drink & Water
                </li>

                <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <TbIceCream className="text-[24px]" /> Yogurt & Ice Cream
                </li>

                <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <RiCake2Line className="text-[24px]" /> Cake & Bread
                </li>

                <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <GiButter className="text-[24px]" /> Butter & Cream
                </li>

                <li className="flex items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <LuCookingPot className="text-[24px]" />
                  Cooking
                </li>

                <li className="flex items-center gap-2 p-4 border-t hover:bg-green-500 hover:text-white cursor-pointer">
                  <FiPlus className="text-[24px]" />
                  View All Category
                </li>
              </ul>
            </div>
          )}
        </Container>
      </div>




      {/* Sidebar */}

      {show ? (
        <div className="z-10 w-[420px] h-full bg-white p-6 border-r border-gray-200 top-0  absolute duration-300">
          {/* Top */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[24px] font-semibold text-black">Menu</h2>

            {/* Close Button */}
            <button onClick={() => setShow(false)}>
              <IoClose size={28} className="text-black cursor-pointer" />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="text-black ">
            <li className="flex border-b border-gray-200 items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
              <CiApple className="text-[24px]" /> Fresh Fruit
            </li>

            <li className=" flex border-b border-gray-200 items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
              <FaBurger className="text-[24px]" /> Vegetables
            </li>

            <li className="flex border-b border-gray-200 items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
              <IoFishOutline className="text-[24px]" />
              River Fish
            </li>

            <li className="flex border-b border-gray-200 items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
              <GiChickenOven className="text-[24px]" /> Chicken & Meat
            </li>

            <li className="flex border-b border-gray-200 items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
              <FaBottleWater className="text-[24px]" /> Drink & Water
            </li>

            <li className="flex border-b border-gray-200 items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
              <TbIceCream className="text-[24px]" /> Yogurt & Ice Cream
            </li>

            <li className="flex border-b border-gray-200 items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
              <RiCake2Line className="text-[24px]" /> Cake & Bread
            </li>

            <li className="flex border-b border-gray-200 items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
              <GiButter className="text-[24px]" /> Butter & Cream
            </li>

            <li className="flex border-b border-gray-200 items-center gap-2 p-4 hover:bg-green-500 hover:text-white cursor-pointer">
              <LuCookingPot className="text-[24px]" />
              Cooking
            </li>

            <li className="flex items-center gap-2 p-4 border-t hover:bg-green-500 hover:text-white cursor-pointer">
              <FiPlus className="text-[24px]" />
              View All Category
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
