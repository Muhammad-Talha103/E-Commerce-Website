"use client";
import Wrapper from "@/shared/Wrapper";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import Logo from "./logo";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StateProps } from "@/redux/types";
import { useEffect, useState } from "react";
import Products from "../Products/types";

const Header = () => {
  const { productsData } = useSelector((state: StateProps) => state.shopping);
  const [totalAmount, settotalAmount] = useState<number>(0);

  useEffect(() => {
    let amount = 0;
    productsData.map((product: Products) => {
      amount += product.price * product.quantity;
      return amount;
    });
    settotalAmount(amount);
  }, [productsData]);

  return (
    <div className="w-full bg-bodyColor h-20 sticky top-0 z-50">
      <Wrapper className="h-full flex items-center justify-between md:justify-center md:gap-x-5">
        {/* Logo */}
        <Logo />

        {/* Search */}
        <div className="w-full group focus-within:border-orange-600 hidden md:flex items-center gap-x-1.5 border-[1px] border-lightText rounded-full px-4 py-1.5">
          <CiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Products"
            className="placeholder:text-sm text-sm outline-none flex-1 bg-bodyColor"
          />
        </div>

        {/* Login/Register */}
        <div className="hidden md:flex items-center justify-center bg-gray-200 py-1.5 px-3 rounded-full gap-1 hover:bg-white cursor-pointer border-[1px] hover:border-orange-500 duration-300">
          <AiOutlineUser className="text-[22px]" />
          <p className="text-sm">Login/Register</p>
        </div>

        {/* Mobile Login/Register */}
        <div className="md:hidden flex items-center justify-center bg-gray-200 py-1.5 px-3 rounded-full gap-1 hover:bg-white cursor-pointer border-[1px] hover:border-orange-500 duration-300">
          <AiOutlineUser className="text-[22px]" />
        </div>

        {/* Cart */}
        <Link href="/cart">
          <div className="flex items-center justify-center bg-black py-1.5 px-3 rounded-full gap-1 hover:bg-slate-900 text-slate-100 cursor-pointer border-[1px] border-black hover:border-orange-500 duration-300 relative">
            <IoMdCart className="text-[22px]" />
            <p className="text-sm font-semibold">
              {totalAmount ? totalAmount.toFixed(2) : "0.00"}
            </p>
            <span className="bg-white rounded-full absolute text-orange-600 text-xs font-semibold right-0.5 -top-1.5 px-1">
              {productsData ? productsData.length : 0}
            </span>
          </div>
        </Link>
      </Wrapper>
    </div>
  );
};

export default Header;