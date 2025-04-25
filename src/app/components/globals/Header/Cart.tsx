import React from 'react'
 import { CartItem } from '@/app/types/cart';
import Link from 'next/link';

type CartProps = {
  loading:boolean;
  hydrated: boolean;
  cartItems: CartItem[];
};

const Cart = ({ hydrated, loading, cartItems }: CartProps) => {
 
  return (
    <Link href="/cart">
      <div className={`${cartItems.length > 0 ? "text-lime-500 " : "text-gray-50 " } relative group`}>
        <i className="fa-solid fa-bag-shopping text-xl sm:text-3xl group-hover:text-red-500"></i>
        {hydrated && !loading && (
          <span className="absolute text-white text-[10px] bg-red-500 leading-none rounded-full px-2 py-1 bottom-0 -right-3 group-hover:bg-white group-hover:text-red-600">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </div>
    </Link>
  )
}

 
export default Cart;


