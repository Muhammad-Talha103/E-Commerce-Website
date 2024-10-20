"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "@/redux/BazaarSlice";
import { StateProps } from "@/redux/types";
import Products from "@/components/Products/types";

const CartTotal = () => {
  const dispatch = useDispatch();
  const { productsData } = useSelector((state: StateProps) => state.shopping);

  const totalPrice = productsData
    .reduce((acc, item: Products) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const subtotal = parseFloat(totalPrice);
  const discountRate = 0.05;

  const discountAmount = subtotal * discountRate;
  const finalTotal = subtotal - discountAmount;

  return (
    <div>
      {productsData.length > 0 && (
        <>
          <div className="flex items-center justify-end mt-4">
            <button
              onClick={() => dispatch(resetCart())}
              className="px-6 duration-500 py-2 bg-red-600 text-base font-semibold hover:bg-red-700 rounded-lg text-white"
            >
              Reset Cart
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-8 mb-8">
            <h2 className="font-semibold text-lg p-4">Cart Total</h2>
            <div className="w-full bg-white shadow-2xl p-4 flex flex-col items-center justify-between gap-4 border-t-4 border-gray-200">
              <div className="flex items-center justify-between w-full">
                <p className="font-medium">SUB TOTAL</p>
                <p className="font-semibold text-lg">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="font-medium">DISCOUNT (5%)</p>
                <p className="font-semibold text-lg">
                  -${discountAmount.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between w-full border-t-2 pt-2">
                <p className=" text-[23px] font-bold"> TOTAL</p>
                <p className="font-bold text-[23px]">
                  ${finalTotal.toFixed(2)}/=
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartTotal;