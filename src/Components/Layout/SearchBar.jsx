import React from 'react'
import { Container } from './Container'
import { FiSearch } from "react-icons/fi";
export const SearchBar = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between">
          <div>
            <img src="/src/assets/image/logo.webp" />
          </div>

          <div className='flex'>
            <input type="text"
              class=" w-[498px] py-3 pl-11  border border-[#808080] text-heading text-[15px] placeholder:text-[#808080] rounded"
              placeholder="Search"
            />
            <FiSearch className="absolute top-[65px] left-[820px]" />
           
            <button className='bg-[#00B207] text-white text-sm font-semibold font-pop leading-[120%] px-6 py-4 absolute left-[1280px] rounded-r-lg cursor-pointer'>Search</button>
          
          </div>

          <div>hi</div>
        </div>
      </Container>
    </>
  );
}
