import React from 'react'
import {SlBasket} from 'react-icons/sl'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const {quantity}=useSelector((store)=>store.cart)
  return (
    <div className='navDiv'>
        <div>
            <h2>Kurs Uygulaması</h2>
        </div>
        <div className='basketDiv'>
            <p className='quantityItem'>{quantity}</p>
            <SlBasket className='basketItem'/>
        </div>
    </div>
  )
}
