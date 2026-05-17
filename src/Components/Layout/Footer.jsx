import React from 'react'
import { Container } from './Container'
import Flogo from '../../assets/Flogo.webp'
import { Link } from 'react-router';
import Fcard from '../../assets/Fcard.webp'



export const Footer = () => {
  return (
    <>
      {/* Footer part */}
      <div className="bg-black w-full h-[368px]">
        <Container>
          <div className="flex justify-between items-center pt-[50px]">
            <div className="text-white max-w-[350px] ">
              <img src={Flogo} alt="Logo" />
              <p className="text-[#808080] pt-[16px] pb-[16px] text-[16px] front-pop ">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>

              <div className="flex text-[16px]  front-pop">
                <Link
                  to="tel:2195550114"
                  className="inline-block mr-4 border-b-2 border-[#00b207] pb-1.5"
                >
                  (219) 555-0114
                </Link>
                <span className="font-normal font-pop text-[16px] text-[#808080]">
                  or
                </span>
                <Link
                  to="mailto:Proxy@gmail.com"
                  className="inline-block ml-4 border-b-2 border-[#00b207] pb-1.5"
                >
                  Proxy@gmail.com
                </Link>
              </div>
            </div>

            <div className="text-[#808080]"> 
              <h2 className="text-white pb-[20px]">My Account</h2>
              <ul>
              <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  My Account
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Order History
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Shoping Cart
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Wishlist
                </li></Link>
              </ul>
            </div>

            <div className="text-[#808080]">
              {" "}
              <h3 className="text-white  pb-[20px]">Helps</h3>
              <ul>
            <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Contact
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Faqs
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Terms & Condition
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Privacy Policy
                </li></Link>
              </ul>
            </div>

            <div className="text-[#808080]">
              {" "}
              <h3 className="text-white  pb-[20px]">Proxy</h3>
              <ul>
               <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  About
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Shop
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Product
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Track Order
                </li></Link>
              </ul>
            </div>

            <div className="text-[#808080]">
              {" "}
              <h3 className="text-white  pb-[20px]">Categories</h3>
              <ul>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Fruit & Vegetables
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Meat & Fish
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Bread & Bakery
                </li></Link>
                <Link to="#"><li className="pb-[10px] hover:text-white cursor-pointer">
                  Beauty & Health
                </li></Link>
              </ul>
            </div>
          </div>

          <div className="border border-b-[#1A1A1A] pt-[60px]"></div>
          <div className="flex justify-between items-center py-5">
            <h5 className="text-[#808080] front-pop text-[16px]">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </h5>

            <img src={Fcard} alt="Fcard" />
          </div>
        </Container>
      </div>
    </>
  );
}