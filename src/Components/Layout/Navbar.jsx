import {Container} from './Container'
import { HiChevronDown } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";

export const Navbar = () => {
  return (
    <>
    <div className='bg-[#333333] w-full h-[60px]'>
        <Container>
        <div className='flex justify-between  '>
            <div className='front-pop text-[14px] text-white flex items-center h-full pt-[20px]'>
                <ul className='flex gap-[32px] items-center'>
                    <li className='flex items-center gap-1'>Home <HiChevronDown /> </li>
                    <li className='flex items-center gap-1'>Shop <HiChevronDown /></li>
                    <li className='flex items-center gap-1'>Pages <HiChevronDown /></li>
                    <li className='flex items-center gap-1'>Blog <HiChevronDown /></li>
                    <li className='flex items-center gap-1'>About Us <HiChevronDown /></li>
                    <li className='flex items-center gap-1'>Contact Us <HiChevronDown /></li>
                </ul>
            </div>

            <div className='text-white'>
                <p>Customer Service</p>
                <p className='flex items-center gap-2'><LuPhoneCall/> (219) 555-0114</p>
            </div>
        </div>
            
        </Container>
    </div>
    
    </>
  )
}
