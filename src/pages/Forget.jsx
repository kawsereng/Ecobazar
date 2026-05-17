
import React from 'react'

export const Forget = () => {
  return (
    <>
      <div className=" flex items-center justify-center ">
        <div className="w-full max-w-[520px]  bg-white p-6 rounded-md shadow-sm border border-gray-200">
          {/* Title */}
          <h1 className="text-[32px] font-semibold font-pop text-center text-black mb-1">
            Forget your password
          </h1>
          <p className="text-center text-[16px] text-[#666666] mb-5">
            Please enter the email your use to sign in
          </p>
          {/* Email */}
          <div className="mb-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[56px] text-[16px] text-[#999999] font-normal font-pop border border-gray-300 rounded-md px-4 text-lg outline-[#999999] "
            />
          </div>

          {/* Button */}
          <button className="w-[472px] h-[46px] bg-[#00B207] hover:bg-green-600 transition text-white font-semibold rounded-full">
            Request password reset
          </button>
        </div>
      </div>
    </>
  );
}
