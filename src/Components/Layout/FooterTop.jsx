import { Container } from "./Container"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router';
export const FooterTop = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] h-[162px]">
        <Container>
          <div className="flex justify-between items-center pt-[30px] ">
            <div className="w-[448px]">
              <h3 className="text-[#1A1A1A] text-[30px] font-semibold front-pop">
                Subcribe our Newsletter
              </h3>
              <p className=" text-[#999999] text-[16px] font-[400px]  ">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </p>
            </div>
            {/*Subscribe  */}
            <div>
              <div className="flex relative ">
                <input
                  className="w-[492px] bg-white outline-none rounded-full py-4 pl-6 pr-32 border border-transparent focus:border-primary transition-all"
                  type="text"
                  placeholder="Your email address"
                />

                <button className="bg-[#00B207] py-[16px] px-[40px] text-white text-[15px] rounded-full cursor-pointer absolute right-1">
                  Subscribe
                </button>
              </div>
            </div>
            {/* icon */}
            <div className="flex gap-2 ml-4">
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
