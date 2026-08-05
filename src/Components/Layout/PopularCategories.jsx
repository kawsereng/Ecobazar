import { Container } from './Container'
import { Link } from 'react-router'
import { GoArrowRight } from "react-icons/go";
import Fresh from '../../assets/Categories/Fresh.webp'
import Vegetables from '../../assets/Categories/Vegetables.webp'
import Meat from '../../assets/Categories/Meat.webp'
import Snacks from '../../assets/Categories/Snacks.webp'
import Beverages from '../../assets/Categories/Beverages.webp'
import Beauty from '../../assets/Categories/Beauty.webp'
import Bakery from '../../assets/Categories/Bakery.webp'
import Baking from '../../assets/Categories/Baking.webp'
import Cooking from '../../assets/Categories/Cooking.webp'
import Diabetic from '../../assets/Categories/Diabetic.webp'
import Dish from '../../assets/Categories/Dish.webp'
import Oil from '../../assets/Categories/Oil.webp'

export const PopularCategories = () => {

  return (
 <>
    <Container>
        <div className='main py-6 sm:py-10'>
            <div className='flex flex-col sm:flex-row justify-between items-start p-2 sm:items-center mb-[20px] sm:mb-[32px] gap-4 sm:gap-0'>
                <h4 className='text-[#1A1A1A] font-semibold text-[24px] sm:text-[32px]'>Popular Categories</h4>
                <Link className='flex items-center text-[#00B207] font-medium text-[14px] sm:text-[16px]'>
                    View All <GoArrowRight className='ml-2' />
                </Link>
            </div>
            
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5 text-[#1A1A1A] text-[14px] p-2 sm:text-[18px] font-medium'>
                
                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Fresh} alt="Fresh Fruits" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Fresh Fruits</h3>
                </div>

                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Vegetables} alt="Fresh Vegetables" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Fresh Vegetables</h3>
                </div>
                
                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Meat} alt="Meat" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Meat & Fish</h3>
                </div>
                
                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Snacks} alt="Snacks" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Snacks</h3>
                </div>
                
                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Beverages} alt="Beverages" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Beverages</h3>
                </div>
                
                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Beauty} alt="Beauty" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Beauty & Health</h3>
                </div>
                
                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Bakery} alt="Bakery" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Bread & Bakery</h3>
                </div>
                
                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Baking} alt="Baking" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Baking Needs</h3>
                </div>
                
                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Cooking} alt="Cooking" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Cooking</h3>
                </div>
                
                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Diabetic} alt="Diabetic" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Diabetic Food</h3>
                </div>
                
                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Dish} alt="Dish" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Dish</h3>
                </div>
                
                <div className='border-2 border-[#E5E5E5] rounded-lg w-full h-[150px] sm:h-[190px] hover:border-[#00B207] transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer group'>
                    <img src={Oil} alt="Oil" className='object-contain h-14 sm:h-20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='text-center'>Oil</h3>
                </div>
                
            </div>
        </div> 
    </Container>
</>
  )
}
