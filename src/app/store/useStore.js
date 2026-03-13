import { create } from 'zustand';

export const useStore = create((set) => ({
  cart: [
            { product_id: 101, product_name: "Bamboo Toothbrush (Pack of 4)", product_price: 299, quantity: 2, image: "img1.jpg" },
            { product_id: 102, product_name: "Reusable Cotton Produce Bags", product_price: 450, quantity: 1, image: "img2.jpg" }
          ],
  address: {},
  setCart: (items) => set({ cart: items }),
  setShipping: (data) => set({ address: data }),
  updateQuantity: (id,change) => set((state) => ({
    cart: state.cart.map(item => 
      item.product_id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    )
  })),
}));



