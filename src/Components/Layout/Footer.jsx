import React from 'react'
import { Container } from './Container'
import Flogo from '../../assets/Flogo.webp'
import { Link } from 'react-router';
import Fcard from '../../assets/Fcard.webp'




export const Footer = () => {
  return (
    <>
      {/* Footer part */}
      <div className="bg-black w-full">
        <Container>
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between items-start lg:items-center pt-10 md:pt-12 lg:pt-[50px] gap-10">
            <div className="text-white max-w-full md:max-w-[350px] w-full md:w-auto">
              <img src={Flogo} alt="Logo" />
              <p className="text-[#808080] pt-4 pb-4 text-sm md:text-[16px] front-pop">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>

              <div className="flex flex-wrap text-sm md:text-[16px] front-pop items-center gap-3">
                <Link
                  to="tel:2195550114"
                  className="border-b-2 border-[#00b207] pb-1.5"
                >
                  (219) 555-0114
                </Link>
                <span className="font-normal font-pop text-[#808080]">
                  or
                </span>
                <Link
                  to="mailto:Proxy@gmail.com"
                  className="border-b-2 border-[#00b207] pb-1.5"
                >
                  Proxy@gmail.com
                </Link>
              </div>
            </div>

            <div className="text-[#808080] w-full md:w-auto"> 
              <h2 className="text-white pb-5 text-lg md:text-base">My Account</h2>
              <ul>
              <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  My Account
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Order History
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Shoping Cart
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Wishlist
                </li></Link>
              </ul>
            </div>

            <div className="text-[#808080] w-full md:w-auto">
              <h3 className="text-white pb-5 text-lg md:text-base">Helps</h3>
              <ul>
            <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Contact
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Faqs
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Terms & Condition
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Privacy Policy
                </li></Link>
              </ul>
            </div>

            <div className="text-[#808080] w-full md:w-auto">
              <h3 className="text-white pb-5 text-lg md:text-base">Proxy</h3>
              <ul>
               <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  About
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Shop
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Product
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Track Order
                </li></Link>
              </ul>
            </div>

            <div className="text-[#808080] w-full md:w-auto">
              <h3 className="text-white pb-5 text-lg md:text-base">Categories</h3>
              <ul>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Fruit & Vegetables
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Meat & Fish
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Bread & Bakery
                </li></Link>
                <Link to="#"><li className="pb-2.5 hover:text-white cursor-pointer">
                  Beauty & Health
                </li></Link>
              </ul>
            </div>
          </div>

          <div className="border border-b-[#1A1A1A] pt-15 md:pt-[60px] my-5 md:my-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 py-5">
            <h5 className="text-[#808080] front-pop text-sm md:text-[16px] text-center md:text-left">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </h5>

            <img src={Fcard} alt="Fcard" className="w-full md:w-auto max-w-xs" />
          </div>
        </Container>
      </div>
    </>
  );
}