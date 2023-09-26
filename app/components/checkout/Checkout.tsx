"use client"

import React, { useState } from 'react'
import OrderModal from './OrderModal'

export default function Checkout() {
const [eMoney, seteMoney] = useState(false)

  return (
    <div className="bg-white rounded-xl p-6 flex flex-col gap-3 font-bold lg:flex-1">
            <h2 className="text-2xl uppercase font-bold">Checkout</h2>
            <h3 className="text-orange-400 text-sm">BILLING DETAILS</h3>
            <div className='flex flex-col sm:flex-row gap-3'>
              <div className='flex flex-col gap-3 sm:flex-1'>

            <span>Name</span>
            <input
              className="border rounded-xl h-[46px] p-3"
              type="text"
              placeholder="John Doe"
            />
              </div>
              <div className='flex flex-col gap-3 sm:flex-1'>

            <span>Email Address</span>
            <input
              className="border rounded-xl h-[46px] p-3"
              type="email"
              placeholder="johndoe@gmail.com"
            />
              </div>
            </div>
            <div className='max-w-[50%]'>

            <span>Phone Number</span>
            <input
              className="border rounded-xl h-[46px] p-3"
              type="number"
              placeholder="202 798 9681"
            />
            </div>
            <h3 className="text-orange-400 text-sm">SHIPPING INFO</h3>
            <span>Your Address</span>
            <input
              className="border rounded-xl h-[46px] p-3"
              type="text"
              placeholder="1137 Williams"
            />
            <span>ZIP Code</span>
            <input
              className="border rounded-xl h-[46px] p-3"
              type="number"
              placeholder="03958454"
            />
            <span>City</span>
            <input
              className="border rounded-xl h-[46px] p-3"
              type="text"
              placeholder="Caraguatatuba"
            />
            <span>Country</span>
            <input
              className="border rounded-xl h-[46px] p-3"
              type="text"
              placeholder="São Paulo"
            />
            <h3 className="text-orange-400 text-sm">PAYMENT DETAILS</h3>
            <span>Payment Method</span>
            <form className='flex items-center gap-3'>

            
            <label className='flex flex-row-reverse gap-3 justify-center items-center' htmlFor="epay">
                ePay
                <input
                onClick={() => seteMoney(true)}
              className="border-0 w-[1rem] h-[2em] rounded-xl p-3 accent-orange-400"
              id="epay"
              type="radio"
              value="epay"
              name='payment'
            
            />
                </label>
            
            <label className='flex flex-row-reverse gap-3 justify-center items-center' htmlFor="cashOnDelivery">
                Cash on delivery
                <input
                onClick={() => seteMoney(false)}
              className="border-0 w-[1rem] h-[2em] rounded-xl p-3 accent-orange-400"
              id="cashOnDelivery"
              type="radio"
              value="cashOnDelivery"
              name='payment'
            />
                </label>
            </form>
            {eMoney && <><span>e-Money Number</span>
            <input
              className="border rounded-xl h-[46px] p-3"
              type="number"
              placeholder="245789648"
            />
            <span>e-Money PIN</span>
            <input
              className="border rounded-xl h-[46px] p-3"
              type="number"
              placeholder="6189"
            /></>
  }
  <OrderModal />
          </div>
  )
}
