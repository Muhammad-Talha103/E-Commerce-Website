"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "@/redux/types";
import Image from "next/image";
import Products from "@/components/Products/types";
import { RxCross2 } from "react-icons/rx";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/BazaarSlice";
import Link from "next/link";

const CartItems = () => {
  const dispatch = useDispatch();
  const { productsData } = useSelector((state: StateProps) => state.shopping);

  return (
    <div className="flex flex-col gap-y-3 mt-4">
      {productsData.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-48">
          <p className="border-[1px] border-orange-500 p-3 text-center font-semibold">
            Your Product Cart is currently empty
          </p>
          <Link href="/">
            <button className="bg-darkText px-6 py-2 hover:bg-orange-600 font-semibold mt-4 text-white cursor-pointer">
              Return to Shop
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="hidden lg:inline-flex items-center shadow-xl justify-between font-semibold bg-white mx-2 py-3 px-4">
            <p className="w-1/3">Product</p>
            <p className="w-1/3 flex items-center justify-center">Quantity</p>
            <p className="w-1/3 flex items-center justify-end">Subtotal</p>
          </div>
          <div className="flex flex-col gap-y-4">
            {productsData.map((item: Products) => (
              <div
                key={item._id}
                className="w-full bg-white shadow-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center md:justify-start gap-y-8 md:gap-y-0 justify-between gap-x-3 w-full md:w-1/3">
                  <span
                    onClick={() => dispatch(removeFromCart(item._id))}
                    className="hidden md:block cursor-pointer text-xl text-slate-700 hover:text-red-500 duration-500"
                  >
                    <RxCross2 />
                  </span>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100} 
                    height={100} 
                    className="w-[100px] h-[100px] object-cover"
                  />
                  <span
                    onClick={() => dispatch(removeFromCart(item._id))}
                    className="block md:hidden cursor-pointer text-xl text-slate-700 hover:text-red-500 duration-500"
                  >
                    <RxCross2 />
                  </span>
                </div>
                <div className="flex justify-start items-start gap-x-3 py-2 text-lg px-4 border-[1px] border-slate-700">
                  <p>Quantity</p>
                  <div className="flex gap-x-2 items-center justify-between w-20">
                    <span
                      onClick={() => dispatch(decreaseQuantity(item))}
                      className="cursor-pointer"
                    >
                      <FiChevronLeft />
                    </span>
                    <span>{item.quantity}</span>
                    <span
                      onClick={() => dispatch(increaseQuantity(item))}
                      className="cursor-pointer"
                    >
                      <FiChevronRight />
                    </span>
                  </div>
                </div>
                <div className="flex w-1/3 md:justify-end justify-center">
                  <p className="text-lg font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;