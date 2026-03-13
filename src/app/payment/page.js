import Image from "next/image";

export default function Payment() {
  return (
    <div class="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 font-sans bg-gray-50 min-h-screen">
      <div class="lg:col-span-2 space-y-8">
        <section>
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold text-gray-800">Shipping Address</h2>
            <button class="text-gray-500"><i class="fas fa-chevron-down"></i></button>
          </div>
          <button class="flex items-center gap-2 bg-[#3d7a5a] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition">
            <span class="text-lg">+</span> Add New Address
          </button>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-4">Payment Method</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div class="group border-2 border-gray-200 rounded-xl p-4 flex justify-between items-start cursor-pointer hover:border-[#3d7a5a] transition">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-gray-600 text-sm">Pay Online</span>
                  <span class="text-orange-500 text-xs">🔥</span>
                </div>
                <p class="font-bold text-lg">₹487 <span class="text-green-600 text-xs font-normal ml-1 text-[10px]">SAVE ₹49</span></p>
              </div>
              <div class="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </div>

            <div class="border-2 border-[#3d7a5a] bg-green-50 rounded-xl p-4 flex justify-between items-start cursor-pointer">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-gray-600 text-sm font-medium">Cash on Delivery</span>
                </div>
                <p class="font-bold text-lg">₹536</p>
              </div>
              <div class="w-5 h-5 border-[6px] border-[#3d7a5a] rounded-full"></div>
            </div>
          </div>

          <button class="w-full mt-8 bg-gray-200 text-gray-500 py-4 rounded-lg font-bold text-lg cursor-not-allowed">
            Proceed to Pay
          </button>
          <p class="text-center text-[10px] text-gray-400 mt-3 flex justify-center items-center gap-1">
            <i class="fas fa-lock text-[8px]"></i> 100% secure payments • UPI • Cards • NetBanking
          </p>
        </section>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
        <h2 class="text-xl font-bold mb-6">Order Summary</h2>

        <div class="space-y-6 mb-8">
          <div class="flex gap-4">
            <img src="https://via.placeholder.com/60" class="w-16 h-16 rounded-lg object-cover bg-gray-100" />
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-800 leading-tight">Coir Pan & Dish Cleaning Brush - Plastic-Free</p>
              <p class="text-gray-500 text-sm mt-1">₹199 x 1</p>
            </div>
          </div>
          <div class="flex gap-4">
            <img src="https://via.placeholder.com/60" class="w-16 h-16 rounded-lg object-cover bg-gray-100" />
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-800 leading-tight">Paper Pencil (Plantable Seed) - Pack of 10</p>
              <p class="text-gray-500 text-sm mt-1">₹219 x 1</p>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center py-3 border-t border-b border-dashed border-gray-200 mb-6 cursor-pointer hover:bg-gray-50 transition px-1">
          <div class="flex items-center gap-2 text-[#3d7a5a] font-semibold text-sm">
            <span class="text-lg">%</span> Offers & Coupons
          </div>
          <i class="fas fa-chevron-right text-xs text-gray-400"></i>
        </div>

        <div class="space-y-3 text-sm text-gray-600">
          <div class="flex justify-between"><span>Subtotal</span><span>₹418</span></div>
          <div class="flex justify-between"><span>Shipping</span><span>₹69</span></div>
          <div class="flex justify-between border-b pb-3"><span>COD charges</span><span>₹49</span></div>

          <div class="flex justify-between items-end pt-2">
            <div>
              <p class="text-lg font-bold text-gray-900 leading-none">You Pay</p>
              <p class="text-[10px] text-gray-400 mt-1 italic">Including ₹27 in taxes</p>
            </div>
            <p class="text-2xl font-black text-gray-900">₹536</p>
          </div>
        </div>
      </div>
    </div>
  );
}
