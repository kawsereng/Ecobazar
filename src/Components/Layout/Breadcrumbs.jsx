import React from 'react'
import BreadcrumbsBanner from '../../assets/Breadcrumbs.webp'
import { Container } from './Container'
import { IoHomeOutline } from "react-icons/io5";
import { useLocation } from 'react-router';
export const Breadcrumbs = () => {
     let PageName = useLocation()
     let arr=PageName.pathname.split('/')
  return (
    <div style={{background:`url(${BreadcrumbsBanner})`}}>
        <Container>
            <div className='flex items-center gap-2 py-3'>
                <IoHomeOutline className='text-[#808080] text-2xl '/>

                {arr.map((item,index)=>{
                    return (
                        <span key={index} className='font-pop text-[16px]  text-[#999999] text-capitalize'>{item.charAt(0).toUpperCase() + item.slice(1)}
                        {index < arr.length - 1 && <span >{'/'.replace('/','>')}</span>}
                        </span>
                    )
                })}
            </div>
        </Container>
    </div>
  )
}
