import { useEffect, useState } from 'react'
import { Container } from './Container'
import axios from 'axios'
import { GoArrowRight } from "react-icons/go";
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
    })

  return (
    <>
    <Container>
        <div className='main mt-[50px]'>
           <div className='flex justify-between mb-[32px]'>
                <h4 className='text-[#1A1A1A] font-semibold text-[32px]'>Popular Categories</h4>
                <Link className='flex items-center text-[#00B207] font-medium text-[16px]'>
                    View All <GoArrowRight className='ml-2' />
                </Link>
            </div>
            <div className='flex grid grid-cols-5   '>
                {pro.map((item)=>(
                    <div className=' border border-1 border-[#E5E5E5] items-center justify-center'>
                        <div className='ml-5'>
                            <img src={Apple} alt="" />
                            <h3>{item.title}</h3>
                            <h4> ${item.price}</h4>
                            <p>{item.rating}</p>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    </Container>
    
    </>
  )
}
