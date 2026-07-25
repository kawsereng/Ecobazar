import { Container } from "./Container"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router';
export const FooterTop = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] py-8 md:py-10 lg:py-[30px]">
        <Container>
          <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
            <div className="w-full lg:w-[448px] text-center lg:text-left">
              <h3 className="text-[#1A1A1A] text-xl md:text-2xl lg:text-[30px] font-semibold front-pop">
                Subscribe our Newsletter
              </h3>
              <p className="text-[#999999] text-sm md:text-[16px] font-normal mt-2">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </p>
            </div>
            {/*Subscribe  */}
            <div className="w-full lg:w-auto">
              <div className="flex relative w-full lg:w-[492px]">
                <input
                  className="w-full bg-white outline-none rounded-full py-3 md:py-4 pl-5 md:pl-6 pr-24 md:pr-32 border border-transparent focus:border-primary transition-all text-sm md:text-base"
                  type="text"
                  placeholder="Your email address"
                />

                <button className="bg-[#00B207] py-3 md:py-[16px] px-6 md:px-[40px] text-white text-sm md:text-[15px] rounded-full cursor-pointer absolute right-1 top-1 bottom-1">
                  Subscribe
                </button>
              </div>
            </div>
            {/* icon */}
            <div className="flex gap-2 lg:ml-4">
              <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white cursor-pointer text-[#4D4D4D]">
                <Link to='https://www.facebook.com/' target='_blank'>
                  <FaFacebookF size={22} />
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white cursor-pointer text-[#4D4D4D]">
                <Link to='https://x.com/' target='_blank'>
                  <FaTwitter size={22} />
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white cursor-pointer text-[#4D4D4D]">
                <Link to='https://www.pinterest.com//' target='_blank'>
                  <FaPinterestP size={22} />
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white cursor-pointer text-[#4D4D4D]">
                <Link to='https://www.instagram.com/' target='_blank'>
                  <FaInstagram size={22} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
