import {Container} from './Container'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
export const Navbar = () => {
  return (
    <>
    <div className='bg-[#333333] w-full h-[60px]'>
        <Container>
         <div className='flex justify-between items-center'>
          <ul className='flex items-center gap-x-8 text-sm font-pop font-medium'>
            <li className='flex items-center'>
              <span className='p-4 bg-[#00B207] h-[60px] flex items-center'>
                <FaBars size={32} className='text-white'/>
              </span>
              <span className='text-white bg-[#3e3939] p-5 h-[60px]'>
                <Link to="#" className='flex items-center gap-x-10'>
                  All Categories <FaAngleDown size={22} />
                </Link>
              </span>
            </li>

            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>Home <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>Shop <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>Pages <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>Blog <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>About Us</Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>Contact Us</Link>
            </li>
          </ul>
          <div className='font-pop font-medium text-sm text-white'>
            <Link to="tel:2195550114" className='flex items-center gap-x-2'> <PiPhoneCall size={32}/>(219) 555-0114</Link>
          </div>
        </div>
            
        </Container>
    </div>
    
    </>
  )
}
