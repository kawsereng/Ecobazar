import React, { useState } from 'react'
import { Container } from '../Components/Layout/Container'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router';
export const Registation = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [pass,setPass] = useState(false)

  // validation Backend 
  const[regData,setRegData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  let handleChange = (e) => {
  
    setRegData({...regData, [e.target.name]: e.target.value})
    console.log(e.target.name,e.target.value);
  };

  return (
    <>
    <Container>
      <div className=" flex items-center justify-center ">
        <div className="w-full max-w-[520px] h-[500px] bg-white p-6 rounded-md shadow-sm border border-gray-200">
            
            {/* Title */}
        <h1 className="text-[32px] font-semibold font-pop text-center text-black mb-5">
         Create Account
        </h1>

         {/* Email */}
        <div className="mb-5">
          <input onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full h-[56px] text-[16px] text-[#999999] font-normal font-pop border border-gray-300 rounded-md px-4 text-lg outline-[#999999] "
          />
        </div>

        {/* Password */}
                <div className="mb-5 relative">
                  <input onChange={handleChange}
                    type={ showPassword? "text" : "password" } 
                    placeholder="Password"
                    className="w-full h-[56px] text-[16px] text-[#999999] font-normal font-pop border border border-gray-300 rounded-md px-4 pr-12 text-lg outline-[#999999] "
                  />
              {
                 showPassword?(<FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"  onClick={()=> setShowPassword(false)}/>)
                :
                (<FaRegEyeSlash className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" onClick={()=> setShowPassword(true)}/>)
              }
                  
                  
                </div>

                {/* Confirm Password */}
                        <div className="mb-5 relative">
                          <input onChange={handleChange}
                            type={pass ? "text" : "password" }
                            placeholder="Confirm password"
                            className="w-full h-[56px] text-[16px] text-[#999999] font-normal font-pop border border border-gray-300 rounded-md px-4 pr-12 text-lg outline-[#999999] "
                          />
                        {
                           pass ? (<FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"  onClick={() =>setPass (false)}/>) 
                          :
                          ( <FaRegEyeSlash className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" onClick={() => setPass(true)}/>)
                        }
                          
                         
                        </div>

              <label className="flex items-center gap-2 text-[#666666] font-pop text-[16px] cursor-pointer">
            <input onChange={handleChange} type="checkbox"  className='w-5 h-5'/>
            Accept all terms & Conditions
          </label>


          {/* Button */}
        <button  className="w-[472px] h-[46px] mt-5 bg-[#00B207] hover:bg-green-600 transition text-white font-semibold rounded-full">
          Login
        </button>
         
                 {/* Register */}
        <p  className="text-center text-[#666666] text-[16px] font-pop mt-8">
          Don’t have account? <Link className='font-medium text-4 font-pop text-[#1A1A1A]' to="/Login">Login</Link>
        </p>
       

        


        </div>
      </div>
    </Container>
    </>
  )
}
