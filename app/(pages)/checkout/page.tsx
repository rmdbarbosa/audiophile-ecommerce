"use client";

import Footer from "@/app/components/Footer";
import Checkout from "@/app/components/checkout/Checkout";
import GoBack from "@/app/components/products/GoBack";
import { useCartContext } from "@/app/context/cart-context";
import Image from "next/image";
import React from "react";

export default function CheckoutPage() {
  const { getTotalCartAmount, cart, setOrderModal, grandTotal, setGrandTotal } = useCartContext();
  const vat = (getTotalCartAmount() * 20) / 100;

  setGrandTotal(getTotalCartAmount() + vat + 50);
  
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col gap-6 p-6 lg:p-28">
        <GoBack />
        <div className="flex flex-col gap-6 lg:flex-row">
          <Checkout />
          {cart.length > 0 ? <div className="bg-white rounded-xl p-6 flex flex-col gap-6 lg:flex-1">
            <h2 className="uppercase font-bold">Summary</h2>
            <div className="flex flex-col gap-3">
              {cart.map((product: any) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center sm:justify-normal"
                >
                  <div>
                    <Image
                      className="rounded-xl"
                      src={product.cartImg}
                      width={64}
                      height={64}
                      alt="product-name"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="font-bold text-sm">{product.name}</h2>
                    <h2 className="text-sm text-gray-400">
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h2>
                  </div>
                  <div className="ml-auto lg:pl-3 self-start">
                    <span className="text-sm text-gray-400">
                      x{product.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <ul className="text-black font-bold flex flex-col gap-3">
              <li className="flex justify-between">
                <span className="text-gray-600 font-light">TOTAL</span>
                {getTotalCartAmount().toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600 font-light">SHIPPING</span>$ 50
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600 font-light">VAT (INCLUDED)</span>
                {vat.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </li>
              <li className="flex justify-between text-orange-400">
                <span className="text-gray-600 font-light">GRAND TOTAL</span>
                {grandTotal.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </li>
            </ul>

            <button onClick={() => setOrderModal(true)} className="text-white hover:bg-orange-200 bg-orange-400 min-h-[48px]">
              CONTINUE & PAY
            </button>
          </div> : null}
        </div>
      </div>

      <Footer />
    </>
  );
}
