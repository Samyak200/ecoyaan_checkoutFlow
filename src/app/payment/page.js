"use client";
import { useRouter } from 'next/navigation';
import { useStore } from '../store/useStore';
import { useEffect, useState } from 'react';
export default function Payment() {
  const { cart, address: shippingDetails } = useStore();
  const [paid, setPaid] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!shippingDetails?.fullName) {
      router.push('/shipping');
    }
  }, [shippingDetails, router]);

  const subtotal = cart.reduce((acc, item) => acc + (item.product_price * item.quantity), 0);

  if (paid) return <div className="text-center mt-20 text-3xl font-bold text-green-600">✅ Order Successful!</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Final Review</h2>
      <div className="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 font-sans bg-gray-50 min-h-screen">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="mb-6 p-4 bg-gray-50 rounded">
              <h3 className="font-bold border-b mb-2">Shipping To:</h3>
              <p>{shippingDetails.fullName}</p>
              <p>{shippingDetails.phone}</p>
              <p>{shippingDetails.city}, {shippingDetails.state} - {shippingDetails.pincode}</p>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="group border-2 border-gray-200 rounded-xl p-4 flex justify-between items-start cursor-pointer hover:border-[#3d7a5a] hover:bg-green-50 transition">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-600 text-sm">Pay Online</span>
                    
                  </div>
                  <p className="font-bold text-lg">₹487 <span className="text-green-600 text-xs font-normal ml-1 text-[10px]">SAVE ₹50</span></p>
                </div>
                <div className="w-5 h-5 border-2 border-gray-500 rounded-full"></div>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-4 flex justify-between items-start cursor-pointer hover:border-[#3d7a5a] hover:bg-green-50 transition">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-600 text-sm font-medium">Cash on Delivery</span>
                  </div>
                  <p className="font-bold text-lg">₹536</p>
                </div>
                <div className="w-5 h-5 border-[2px] border-[grey] rounded-full"></div>
              </div>
            </div>

            <button onClick={() => setPaid(true)} className="w-full mt-8 bg-gray-200 text-500 border-4 border-transparent py-4 rounded-lg font-bold text-lg hover:bg-green-100 hover:border-green-400 transition">
              Proceed to Pay
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-3 flex justify-center items-center gap-1">
              <i className="fas fa-lock text-[8px]"></i> 100% secure payments • UPI • Cards • NetBanking
            </p>
          </section>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          {cart.map(item => (
            <div className="flex gap-4" key={item.product_id}>
              <img src={item.product_image} classNameName="w-16 h-16 rounded-lg object-cover bg-gray-100" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 leading-tight">{item.product_name}</p>
                <p className="text-gray-500 text-sm mt-1">₹{item.product_price} x {item.quantity}</p>
              </div>
            </div>

          ))}


          <div classNameName="flex justify-between items-center py-3 border-t border-b border-dashed border-gray-200 mb-6 cursor-pointer hover:bg-gray-50 transition px-1">
            <div classNameName="flex items-center gap-2 text-[#3d7a5a] font-semibold text-sm">
              <span classNameName="text-lg">%</span> Offers & Coupons
            </div>
            <i classNameName="fas fa-chevron-right text-xs text-gray-400"></i>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div classNamee="flex justify-between"><span>Shipping</span><span>₹69</span></div>
            <div className="flex justify-between border-b pb-3"><span>COD charges</span><span>₹49</span></div>

            <div className="flex justify-between items-end pt-2">
              <div>
                <p className="text-lg font-bold text-gray-900 leading-none">You Pay</p>
                <p className="text-[10px] text-gray-400 mt-1 italic">Including ₹27 in taxes</p>
              </div>
              <p className="text-2xl font-black text-gray-900">₹{subtotal + 50}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
