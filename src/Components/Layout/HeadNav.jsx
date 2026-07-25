import {Container} from "./Container"
import { useOutside } from "../Hooks/Outside";
import { CiLocationOn } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
import { useState,useRef } from "react";
import { Link } from "react-router";


export const HeadNav = () => {
let [open,setOpen]=useState(false)

let [taka,setTaka]=useState(false)

let dropdowonRef = useRef(null)
let droptakaRef = useRef(null)

 useOutside (dropdowonRef,()=>setOpen(false),open)
 useOutside (droptakaRef,()=>setTaka(false),taka)

  return (

    <>
    <div className="border-b border-solid border-b-[#f2f2f2] text-[#666666] text-xs sm:text-sm">
       <Container>
        <div className="flex flex-col md:flex-row justify-between items-center w-full py-2 md:py-0 gap-2 md:gap-0">
          <div className="flex items-center gap-x-1 font-pop text-center md:text-left"> 
            <CiLocationOn className="flex-shrink-0" size={16} />
            <span className="truncate max-w-[280px] sm:max-w-none">Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>
          <div className="flex items-center justify-center gap-x-3 sm:gap-x-5">
            <div onClick={() => setOpen(!open)} className="relative flex items-center cursor-pointer" ref={dropdowonRef}>
              Eng <HiChevronDown className="ml-1" />
                 {open &&
                    <div className="absolute top-full mt-1 left-0 sm:left-auto sm:-right-2 bg-white shadow-md border rounded p-2 z-50 min-w-[80px]">
                          <ul className="flex flex-col gap-1 text-black">
                            <li className="hover:text-[#00B207] transition-colors cursor-pointer">Ben</li>
                            <li className="hover:text-[#00B207] transition-colors cursor-pointer">ch</li>
                          </ul>
                    </div> 
                  } 
            </div>

            <div onClick={()=> setTaka(!taka)} className="relative flex items-center cursor-pointer" ref={droptakaRef}>
              USD <HiChevronDown className="ml-1" />
                     {taka &&
                    <div className="absolute top-full mt-1 left-0 sm:left-auto sm:-right-2 bg-white shadow-md border rounded p-2 z-50 min-w-[80px]">
                          <ul className="flex flex-col gap-1 text-black">
                            <li className="hover:text-[#00B207] transition-colors cursor-pointer">BDT</li>
                            <li className="hover:text-[#00B207] transition-colors cursor-pointer">EUR</li>
                          </ul>
                    </div> 
                  } 
            </div>
            <div className="flex items-center relative after:hidden sm:after:block after:w-[1px] after:h-[15px] after:bg-[#E6E6E6] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[-10px] md:py-3.5 gap-1 ml-1 sm:ml-2">
              <Link to="/Login" className="hover:text-[#00B207] transition-colors">Sign In</Link> / <Link to="/Registation" className="hover:text-[#00B207] transition-colors">Sign Up</Link>
            </div>
          </div>
        </div>
        </Container>
    </div>
      
    </>

    
  )
}
