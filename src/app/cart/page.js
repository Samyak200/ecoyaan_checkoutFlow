"use client";
import { useEffect, useState } from 'react';
import { useStore } from '../store/useStore'; // Make sure your store.js uses "export const useStore"
import Link from 'next/link';
import Image from 'next/image';

export default function Cart() {
  const { cart,updateQuantity } = useStore();
 
  const subtotal = cart.reduce((acc, item) => acc + (item.product_price * item.quantity), 0);
  const total = subtotal + 50; // 50 is shipping fee

  return (

    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h2 className="text-3xl font-bold mb-6 text-green-800">Your Cart</h2>

      {cart.map((item) => (
        <div key={item.product_id} className="flex gap-5 p-4 border-b items-center">
          <img src={item.image} alt={item.product_name} className="w-26 h-26 rounded shadow" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{item.product_name}</h3>
            <p className="text-gray-600">Price: ₹{item.product_price}</p>
            <div className="flex items-center gap-4 mt-2">
              <button onClick={() => updateQuantity(item.product_id, -1)} className="px-3 py-1 bg-gray-200 rounded">-</button>
              <span className="font-bold text-lg">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.product_id, 1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
            </div>
          </div>
          <p className="font-bold text-lg">₹{item.product_price * item.quantity}</p>
        </div>
      ))}

      <div className="mt-10 p-6 bg-gray-50 border rounded-xl shadow-sm">
        <div className="flex justify-between mb-2"><span className="text-gray-600">Subtotal:</span> <span className="font-medium">₹{subtotal}</span></div>
        <div className="flex justify-between mb-2"><span className="text-gray-600">Shipping:</span> <span className="font-medium">₹50</span></div>
        <hr className="my-3" />
        <div className="flex justify-between text-xl font-bold text-green-900"><span>Grand Total:</span> <span>₹{total}</span></div>

        <Link href="/shipping">
          <button className="w-full mt-6 bg-green-700 text-white py-4 rounded-lg font-bold hover:bg-green-800 transition shadow-md">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>

  );
}