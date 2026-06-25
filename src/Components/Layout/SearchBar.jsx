import {Container} from './Container'
import Logo from '../../assets/Logo.webp'
import { RiSearchLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
export const SearchBar = () => {
  return (
    <>
         <Container className='py-6'>
      {/* logo start here */}
      <div className='flex justify-between py-[27px]'>
        <div className='flex justify-center items-center'>
          <Link to="/"> <img src={Logo} alt="logo" fetchpriority="high"/> </Link> 
        </div>
        {/* logo ends here */}

        {/* search start here */}
        <div className='flex relative '>
            <RiSearchLine className='absolute top-1/2 left-3 -translate-y-1/2' />
            <input 
              className='border border-[#808080] w-[498px] py-3 pl-11 placeholder:text-[#808080] placeholder:text-sm placeholder:font-pop rounded-l-md' 
              type="text"  
              placeholder='Search' 
            />
            <button className='bg-[#00B207] py-3.5 px-6 text-white text-[15px] rounded-r-md cursor-pointer'>Search</button>
        </div>
        {/* search ends here */}

        {/* carts start here */}
        <div className='shrink-0 flex gap-3 items-center'>
          <div className='flex items-center sm:gap-x-8 gap-x-2 relative after:content[""] after:w-[1px] after:h-6 after:bg-gray-300 after:absolute after:left-1/2'>
            <CiHeart className='w-8 h-8' />
            <HiOutlineShoppingBag className='w-8 h-8' />
          </div>
          <div className='flex flex-col'>
            <span className='font-pop text-[12px] text-gray-700'>Shopping cart</span>
            <span className='font-pop text-[14px] text-gray-900 font-medium'>$57.50</span>
          </div>
        </div>
        {/* carts ends here */}
      </div>
    </Container>
    </>
  );
}
