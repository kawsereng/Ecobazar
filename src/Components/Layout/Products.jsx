import { useEffect, useState } from 'react'
import { Container } from './Container'
import axios from 'axios'
import { GoArrowRight } from "react-icons/go";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaEye, FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router';
import Apple from '../../assets/Categories/Apple.webp'

export const Products = () => {
 let [pro,setPro]=useState([])
    useEffect(()=>{
        async function allpro(){
            let proData=await axios.get('https://dummyjson.com/products')
            setPro(proData.data.products.slice(0, 10));
            
        }
        allpro()
    }, [])

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
        <div className='main mt-[50px]'>
           <div className='flex justify-between mb-[32px]'>
                <h4 className='text-[#1A1A1A] font-semibold text-[32px]'>Popular Products</h4>
                <Link className='flex items-center text-[#00B207] font-medium text-[16px]'>
                    View All <GoArrowRight className='ml-2' />
                </Link>
            </div>
            <div className='grid grid-cols-5 gap-4'>
                {pro.map((item)=>(
                    <div key={item.id} className='border border-1 border-[#E5E5E5] hover:border-[#00B207] transition-colors duration-300 relative group'>
                        <div className='p-4 flex items-center justify-center'>
                            <img src={Apple} alt={item.title} className='w-full h-48 object-contain' />
                        </div>
                        <div className='absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <button className='w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-[#00B207] hover:text-white transition-colors'>
                                <FaHeart size={14} />
                            </button>
                            <button className='w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-[#00B207] hover:text-white transition-colors'>
                                <FaEye size={14} />
                            </button>
                        </div>
                        <div className='p-4'>
                            <h3 className='text-sm font-medium text-[#1A1A1A] truncate'>{item.title}</h3>
                            <div className='flex items-center justify-between mt-2'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>${item.price}</span>
                                </div>
                                <button className='w-8 h-8 bg-white border border-[#E5E5E5] rounded-full flex items-center justify-center group-hover:bg-[#00B207] group-hover:border-[#00B207] group-hover:text-white transition-colors'>
                                    <FaShoppingBag size={14} />
                                </button>
                            </div>
                            <div className="flex mt-2">{renderStars(item.rating)}</div>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    </Container>
    
    </>
  )
}
