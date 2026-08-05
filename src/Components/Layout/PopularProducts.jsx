import { useEffect, useState } from 'react'
import { Container } from './Container'
import axios from 'axios'
import { GoArrowRight } from "react-icons/go";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaEye, FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router';
export const PopularProducts = () => {

 let [pro,setPro]=useState([])
    
 useEffect(() => {
  async function allpro() {
    const proData = await axios.get(
      "https://ecobazar-api.onrender.com/api/products?popular=true&limit=10"
    );

    setPro(proData.data.data.products);
  }

  allpro();
}, []);

// Render stars for product ratings
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} color="#FFC107" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" color="#FFC107" />);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} color="#FFC107" />);
        }
        return stars;
    };

  return (
    <>
      <Container>
        <div className="main mt-[50px] p-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[20px] sm:mb-[32px] gap-4 sm:gap-0">
            <h4 className="text-[#1A1A1A] font-semibold text-[24px] sm:text-[32px]">
              Popular Products
            </h4>
            <Link className="flex items-center text-[#00B207] font-medium text-[14px] sm:text-[16px]">
              View All <GoArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
            {pro.map((item) => (
              <div
                key={item._id}
                className="border border-1 border-[#E5E5E5] hover:border-[#00B207] transition-colors duration-300 relative group"
              >
                <div className="p-4 flex items-center justify-center">
                  <img
                    src={item.thumbnail.url}
                    alt={item.title.en}
                    className="w-full h-48 object-contain"
                  />
                </div>

                <div className="ml-3">
                  <div className="flex justify-between items-center mb-[6px]">
                    <div className="">
                      <h3 className="text-[16px] font-normal font-pop text-[#4D4D4D] hover:text-[#00B207]">
                        {item.title.en}
                      </h3>
                      <p className="text-[16px] font-medium font-pop text-[#1A1A1A] mb-[6px]">
                        ${item.price}
                      </p>
                      <span className="flex gap-1 text-[16px] font-medium font-pop text-[#1A1A1A]">
                        {renderStars(item.rating)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <div>
                        <button className="w-8 h-8 bg-white border border-[#E5E5E5] rounded-full mr-[18px]  pl-[7px] hover:bg-[#00B207] hover:text-white transition-colors">
                          <FaShoppingBag size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-[#00B207] hover:text-white transition-colors">
                      <FaHeart size={14} />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-[#00B207] hover:text-white transition-colors">
                      <FaEye size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
