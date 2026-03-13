"use client";
import { useState } from 'react';
import { useStore } from '../store/useStore'; 
import { useRouter } from 'next/navigation';

export default function ShippingPage() {
  const router = useRouter();
  const { setShipping } = useStore(); // Store mein address save karne ke liye
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', pincode: '', city: '', state: ''
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "10-digit phone required";
    if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Invalid PIN code";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    if (validate()) {
      setShipping(formData); // Store mein save kiya
      router.push('/payment'); // Payment page par redirect
    }
  };

  return (
    <div className="max-w-3/5 mx-auto g-white shadow-lg rounded-xl my-10 font-sans border border-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
      
        <input required type="email" placeholder="Email" className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input required type="text" placeholder="Phone (10 digits)" className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        <div  required className="grid grid-cols-2 gap-4">
          <input required type="text" placeholder="State" className="p-3 border rounded" onChange={(e) => setFormData({...formData, state: e.target.value})} />
          <input required type="text" placeholder="City" className="p-3 border rounded" onChange={(e) => setFormData({...formData, city: e.target.value})} />
        </div>
        <input type="text" placeholder="PIN Code" className="w-full p-3 border rounded"  required onChange={(e) => setFormData({...formData, pincode: e.target.value})} />
        <button type="submit" className="w-full bg-green-700 text-white py-3 rounded-lg font-bold hover:bg-green-800">
          Proceed to Payment        
        </button>
      </form>
    </div>
  );
}
