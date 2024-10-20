"use client";
import Wrapper from "@/shared/Wrapper";
import Image from "next/image";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/BazaarSlice";
import toast, { Toaster } from "react-hot-toast";
import { ProductsProps , Products } from "./types";

const ProductsPage = ({ searchParams }: ProductsProps) => {
  const dispatch = useDispatch();
  const singleProduct = searchParams;

  const [isInWishlist, setIsInWishlist] = useState(false);

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  const handleAddToCart = (item: Products) => {
    const itemWithQuantity = { ...item, quantity: 1 };
    dispatch(addToCart(itemWithQuantity));
    toast.success(`${item.title} added to cart successfully!`);
  };

  return (
    <div className="bg-gray-200 min-h-[500px] ">
      <Wrapper >
        <div className="bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-5 w-full p-6">
          <div>
            <Image
              src={singleProduct.image}
              alt={singleProduct.title}
              width={500}
              height={300}
              className="w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-lg"
            />
          </div>
          <div className="py-6 md:py-0 lg:py-8">
            <h1 className="text-2xl md:text-3xl font-bold">
              {singleProduct.title}
            </h1>
            <p className="font-semibold text-xl mt-2 text-slate-600">
              ${singleProduct.price}
            </p>
            <div>
              <p className="text-base md:text-lg mt-5 text-lightText">
                {singleProduct.description}
              </p>
            </div>
            <div className="text-sm text-lightText mt-8">
              <p>
                SKU :{" "}
                <span className="text-darkText font-semibold">
                  {singleProduct._id}
                </span>
              </p>
              <p className="mt-0.5">
                Category :{" "}
                <span className="text-darkText font-semibold">
                  {singleProduct.category}
                </span>
              </p>
            </div>
            <div className="flex items-center cursor-pointer mt-8">
              <button
                onClick={() => handleAddToCart(singleProduct)}
                className="bg-darkText flex items-center h-12 text-slate-100 text-sm uppercase py-3 px-4 md:px-6 rounded-l-lg border border-slate-800 transition duration-300"
              >
                Add To Cart
              </button>
              <span className="bg-darkText text-xl text-slate-100 w-12 h-12 flex items-center justify-center rounded-r-lg border border-slate-400 hover:bg-orange-600 duration-300">
                <IoMdCart />
              </span>
            </div>
            <p
              className={`flex items-center gap-1 mt-6 cursor-pointer }`}
              onClick={toggleWishlist}
            >
              {isInWishlist ? <MdFavorite color="red" /> : <MdFavoriteBorder />}
              Add to Wishlist
            </p>
          </div>
        </div>
        <Toaster />
      </Wrapper>
    </div>
  );
};

export default ProductsPage;