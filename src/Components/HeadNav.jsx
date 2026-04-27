import { useRef } from "react";
import {Container} from "./Layout/Container"
import { CiLocationOn } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
export const HeadNav = () => {
  let dropRef = useRef(null)
  let HandelLan = ()=>{
      dropRef.current.style.display ='block'
  }
  return (

    <>
    <div className="border-b bordar-solid border-b-[#999999]  text-[#666666] text-sm">
       <Container>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-1 font-pop "> <CiLocationOn />Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
          <div className="flex gap-x-5">
            <div className="flex items-center cursor-pointer" onClick={HandelLan}>Eng <HiChevronDown /></div>
            <div className="absolute top-[35px] bg-blue-50 p-2 hidden " ref={dropRef}>
              <ul>
                <li>Ben</li>
                <li>ch</li>
              </ul>
            </div>
            <div className="flex items-center">USD <HiChevronDown /></div>
            <div className="flex items-center relative after:w-[1px] after:h-[15px] after:bg-[#E6E6E6] after:containt-[''] after:absolute after:top-[17px] after:left-[-10px] py-3.5">Sign In / Sign Up</div>
          </div>
        </div>
        </Container>
    </div>
      
    </>

    
  )
}
