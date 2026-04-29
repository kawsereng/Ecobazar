import {Container} from "./Layout/Container"
import { useOutside } from "./Hooks/Outside";
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
    <div className="border-b bordar-solid border-b-[#999999]  text-[#666666] text-sm">
       <Container>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-1 font-pop "> <CiLocationOn />Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
          <div className="flex gap-x-5">
            <div onClick={() => setOpen(!open)} className="flex items-center cursor-pointer" ref={dropdowonRef}
            >Eng <HiChevronDown />
                 {open &&
                    <div className="absolute top-[35px] bg-blue-50 p-2">
                          <ul>
                            <li>Ben</li>
                            <li>ch</li>
                          </ul>
                    </div> 
                  } 
            </div>

            <div onClick={()=> setTaka(!taka)} className="flex items-center cursor-pointer" ref={droptakaRef}>
              USD <HiChevronDown />
                     {taka &&
                    <div className="absolute top-[35px] bg-blue-50 p-2">
                          <ul>
                            <li>Ben</li>
                            <li>ch</li>
                          </ul>
                    </div> 
                  } 
            </div>
            <div className="flex items-center relative after:w-[1px] after:h-[15px] after:bg-[#E6E6E6] after:containt-[''] after:absolute after:top-[17px] after:left-[-10px] py-3.5"><Link to="/Registation">Sign In</Link> / <Link to="/Login">Sign Up</Link></div>
          </div>
        </div>
        </Container>
    </div>
      
    </>

    
  )
}
