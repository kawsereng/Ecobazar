import { useEffect, useState } from 'react'
import { Container } from './Container'
import axios from 'axios'
import { GoArrowRight } from "react-icons/go";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaEye, FaShoppingBag } from "react-icons/fa";
import Apple from '../../assets/Categories/Apple.webp'
import { Link } from 'react-router';

export const HotDeals = () => {
 let [pro,setPro]=useState([])
 let [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    useEffect(()=>{
        async function allpro(){
            let proData=await axios.get('https://dummyjson.com/products')
            setPro(proData.data.products.slice(0, 15));
            
        }
        allpro()
    }, [])

    useEffect(() => {
        const endAt = Date.now() + 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 34 * 60 * 1000 + 57 * 1000

        const tick = () => {
            const diff = Math.max(0, endAt - Date.now())
            const totalSeconds = Math.floor(diff / 1000)
            const days = Math.floor(totalSeconds / (24 * 60 * 60))
            const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))
            const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
            const seconds = totalSeconds % 60
            setTimeLeft({ days, hours, minutes, seconds })
        }

        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [])

    const pad2 = (n) => String(n).padStart(2, "0")
    
// Star Rating
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
           <div className='flex items-center justify-between mb-[32px] gap-3'>
                <h4 className='text-[#1A1A1A] font-semibold text-[24px] sm:text-[28px] lg:text-[32px]'>Hot Deals</h4>
                <Link to="#" className='flex items-center text-[#00B207] font-medium text-[14px] sm:text-[16px] whitespace-nowrap'>
                    View All <GoArrowRight className='ml-2' />
                </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                {pro.map((item, index)=> {
                    const isFeatured = index === 0
                    const oldPrice = (Number(item.price) * 2).toFixed(2)
                    const currentPrice = Number(item.price).toFixed(2)
                    

                    const countdownItems = [
                        { label: "DAYS", value: pad2(timeLeft.days) },
                        { label: "HOURS", value: pad2(timeLeft.hours) },
                        { label: "MINS", value: pad2(timeLeft.minutes) },
                        { label: "SECS", value: pad2(timeLeft.seconds) },
                    ]

                    return (
                        
                        <div key={item.id} >
                           <div
    className="border border-[#E5E5E5] hover:border-[#00B207] transition-all duration-300 bg-white relative group overflow-hidden"
>
  {/* Image */}
  <div className="p-5 flex items-center justify-center h-52">
    <img
      src={Apple}
      alt={item.title}
      className="w-full max-w-[220px] h-40 object-contain"
    />
  </div>

  {/* Content */}
  <div className="relative px-4 pb-4 h-[220px]">
    {/* Default */}
    <div className="transition-opacity duration-300 group-hover:opacity-0">
      <div className="flex items-start justify-between">
        <div>
          {/* Title */}
          <h3 className="text-[#1A1A1A] font-medium text-sm mb-2">
            {item.title}
          </h3>

          {/* Price */}
          <div className="text-[#1A1A1A] font-semibold text-lg">
            ${currentPrice}
          </div>

          {/* Rating */}
          <div className="mt-2 flex">
            {renderStars(item.rating)}
          </div>
        </div>

        <button className="w-10 h-10 rounded-full bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white transition">
          <FaShoppingBag className='ml-3' size={14} />
        </button>
      </div>
    </div>

    {/* Hover Content */}
    <div className="absolute inset-0 px-4 pb-4 flex flex-col items-center text-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">

      <div className="w-full flex items-center gap-3">
        <button className="w-10 h-10 rounded-full bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white">
          <FaHeart className='ml-3' size={14} />
        </button>

        <button className="flex-1 h-[42px] rounded-full bg-[#00B207] text-white flex items-center justify-center gap-2 hover:bg-green-700 transition">
          <span className='text-[14px] text-center'>Add to Cart</span> <FaShoppingBag className='' size={14} />
        </button>

        <button className="w-10 h-10 rounded-full bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white">
          <FaEye className='ml-3' size={14} />
        </button>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-[#00B207] font-medium">
        {item.title}
      </h3>

      {/* Price */}
      <div className="mt-2 flex gap-2 items-center">
        <span className="text-xl font-semibold">
          ${currentPrice}
        </span>

        <span className="text-[#999] line-through">
          ${oldPrice}
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2">
        {renderStars(item.rating)}
        <span className="text-sm text-[#666]">
          (524 Feedback)
        </span>
      </div>

      <p className="mt-4 text-sm text-[#999]">
        Hurry up! Offer ends In:
      </p>

      {/* Timer */}
      <div className="mt-3 flex gap-2">
        {countdownItems.map((t) => (
          <div key={t.label} className="text-center">
            <div className="font-semibold">{t.value}</div>
            <div className="text-[10px] text-[#999]">
              {t.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

                        </div>
                    )
                })}
            </div>
     
        </div>
    </Container>
    
    </>
  )
}
