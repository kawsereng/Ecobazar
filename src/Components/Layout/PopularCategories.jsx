// import { useEffect, useState } from 'react'
import { Container } from './Container'
import { Link } from 'react-router'
import { GoArrowRight } from "react-icons/go";
// import axios from 'axios';
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
import Sale from '../../assets/Sale.webp'

export const PopularCategories = () => {
//  let[allpro,setAllpro]= useState([])


// useEffect(() =>{
//    async function Allpro(){
//     let proData = await axios.get("https://dummyjson.com/products/categories")
//     setAllpro(proData.data)
    
    
    
//    }
//    Allpro()
//     })
 
// useEffect(()=>{
//     fetch('https://dummyjson.com/products/categories')
//     .then(Response=>Response.json)
//     .then(data=>data.categories)
//     console.log(data);
    
// })

  return (
 <>
    <Container>
        <div className='main'>
            <div className='flex justify-between mb-[32px]'>
                <h4 className='text-[#1A1A1A] font-semibold text-[32px]'>Popular Categories</h4>
                <Link className='flex items-center text-[#00B207] font-medium text-[16px]'>
                    View All <GoArrowRight className='ml-2' />
                </Link>
            </div>
            <div className='item flex gap-2'>
                {/* {allpro.map((item)=>(
                    <div className='border-4  '>
                        <h3 className='grid grid-cols-6 gap-3'>{item.name}</h3> 
                     </div>
                    
                    
                )
            
            )} */}
            <div className='flex grid grid-cols-6 gap-5 text-[#1A1A1A] text-[18px] font-medium'>
                
                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F] hover:border-[#00B207] rounded-lg'>
                        <img src={Fresh} alt="" />
                        <h3 className='text-center'>Fresh Fruits</h3>
                    </div>

                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F] hover:border-[#00B207] rounded-lg'>
                        <img src={Vegetables} alt="" />
                        <h3 className='text-center'>Fresh Vegetables</h3>
                    </div>
                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F] hover:border-[#00B207] rounded-lg'>
                        <img src={Meat} alt="Meat" />
                        <h3 className='text-center'>Meat & Fish</h3>
                    </div>
                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F] hover:border-[#00B207] rounded-lg'>
                        <img src={Snacks} alt="Snacks" />
                        <h3 className='text-center'>Snacks</h3>
                    </div>
                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F] hover:border-[#00B207] rounded-lg'>
                        <img src={Beverages} alt="Beverages" />
                        <h3 className='text-center'>Beverages</h3>
                    </div>
                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F]  hover:border-[#00B207] rounded-lg'>
                        <img src={Beauty} alt="Beauty" />
                        <h3 className='text-center'>Beauty & Health</h3>
                    </div>
                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F]  hover:border-[#00B207] rounded-lg'>
                        <img src={Bakery} alt="Bakery" />
                        <h3 className='text-center'>Bread & Bakery</h3>
                    </div>
                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F]  hover:border-[#00B207] rounded-lg'>
                        <img src={Baking} alt="Baking" />
                        <h3 className='text-center'>Baking Needs</h3>
                    </div>
                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F]  hover:border-[#00B207] rounded-lg'>
                        <img src={Cooking} alt="Cooking" />
                        <h3 className='text-center'>Cooking</h3>
                    </div>
                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F]  hover:border-[#00B207] rounded-lg'>
                        <img src={Diabetic} alt="Diabetic" />
                        <h3 className='text-center'>Diabetic Food</h3>
                    </div>
                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F]  hover:border-[#00B207] rounded-lg'>
                        <img src={Dish} alt="Dish" />
                        <h3 className='text-center'>Dish</h3>
                    </div>
                    <div className='border border-2 border-[#E5E5E5] rounded-lg w-[200px] h-[190px] hover:bordar border-2 bordar-[#2C742F]  hover:border-[#00B207] rounded-lg'>
                        <img src={Oil} alt="Oil" />
                        <h3 className='text-center'>Oil</h3>
                    </div>
                
            </div>
        
                
                
                

            </div>
        </div> 
    </Container>
</>
  )
}
