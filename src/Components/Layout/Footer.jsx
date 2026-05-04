import React from 'react'
import { Container } from './Container'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import Flogo from '../../assets/Flogo.png'
import { LuPhoneCall } from "react-icons/lu";



export const Footer = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] w-full h-[162px]">
        <Container>
          <div className="flex justify-between items-center pt-[30px] ">
            <div className="w-[448px]">
              <h3 className="text-[#1A1A1A] text-[30px] font-semibold front-pop">
                Subcribe our Newsletter
              </h3>
              <p className=" text-[#999999] text-[16px] font-[400px]  ">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </p>
            </div>
            {/*Subscribe  */}
            <div>
              <div className="flex relative ">
                <input
                  className="w-[492px] bg-white outline-none rounded-full py-4 pl-6 pr-32 border border-transparent focus:border-primary transition-all"
                  type="text"
                  placeholder="Your email address"
                />

                <button className="bg-[#00B207] py-[16px] px-[40px] text-white text-[15px] rounded-full cursor-pointer absolute right-1">
                  Subscribe
                </button>
              </div>
            </div>
            {/* icon */}
            <div className="flex gap-[10px]">
              <FaFacebook className="w-[30px] h-[30px] cursor-pointer " />
              <FaInstagramSquare className="w-[30px] h-[30px] cursor-pointer " />
              <FaTwitterSquare className="w-[30px] h-[30px] cursor-pointer" />
              <FaPinterestSquare className="w-[30px] h-[30px] cursor-pointer" />
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-black w-full h-[368px]">
        <Container>
          <div className="flex justify-between items-center pt-[50px]">
                <div className="text-white w-[350px] ">
                    <img src={Flogo} alt="Logo" />
                    <p className="text-[#808080] pt-[16px] pb-[16px] text-[16px] ">
                        Morbi cursus porttitor enim lobortis molestie. Duis gravida
                        turpis dui, eget bibendum magna congue nec.
                    </p>
                    <div className="fheading col-span-2 flex gap-2 ">
                        <p className="footerAfter hidden sm:inline">(219) 555-0114</p>
                        <span className="text-[#808080]">or</span>
                        <p className="footerAfter">Proxy@gmail.com</p>
                    </div>
                </div>

                <div className="text-[#808080]"> <h2 className='text-white pb-[20px]'>My Account</h2>
                    <ul>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>My Account</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Order History</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Shoping Cart</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Wishlist</li>
                    </ul>
                </div>

                <div className="text-[#808080]"> <h3 className='text-white  pb-[20px]'>Helps</h3>
                    <ul>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Contact</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Faqs</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Terms & Condition</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>

                <div className="text-[#808080]"> <h3 className='text-white  pb-[20px]'>Proxy</h3>
                    <ul>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>About</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Shop</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Product</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Track Order</li>
                    </ul>
                </div>

                <div className="text-[#808080]"> <h3 className='text-white  pb-[20px]'>Categories</h3>
                    <ul>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Fruit & Vegetables</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Meat & Fish</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Bread & Bakery</li>
                        <li className='pb-[10px] hover:text-white cursor-pointer'>Beauty & Health</li>
                    </ul>
                </div>

          </div>

          <div className='border border-b-[#1A1A1A] pt-[60px]'></div>
          <div className='justify-items-center pt-[20px]'>
             <h2 className='text-[#808080] '>Ecobazar eCommerce © 2021. All Rights Reserved</h2>
          </div>
         
        </Container>
      </div>
    </>
  );
}