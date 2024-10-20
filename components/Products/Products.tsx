"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Product from "./types";
import Wrapper from "@/shared/Wrapper";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/BazaarSlice";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner"; 

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span className="text-yellow-400" key={index}>
        {index < rating ? (
          <IoIosStar />
        ) : (
          <IoIosStar style={{ opacity: 0.5 }} />
        )}
      </span>
    ));
  };

  const handleAddToCart = (item: Product) => {
    const itemWithQuantity = { ...item, quantity: 1 };
    dispatch(addToCart(itemWithQuantity));
    toast.success(`${item.title} added to cart successfully!`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://shoppingmart-xi.vercel.app/api/products"
        );
        if (
          response.data.success &&
          Array.isArray(response.data.productsData)
        ) {
          setProducts(response.data.productsData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts();
  }, []);

  const calculatePercentage = (oldPrice: number | string, price: number | string): string => {
    const parsedOldPrice = parseFloat(oldPrice as string);
    const parsedPrice = parseFloat(price as string);

    return !!parsedPrice && !!parsedOldPrice
      ? (100 - (parsedOldPrice / parsedPrice) * 100).toFixed(0)
      : "0";
  };

  return (
    <Wrapper>
      <Toaster position="top-center" />
      <div className="relative z-10 -mt-20 mb-20">
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((item) => (
              <div
                key={item._id}
                className="w-full rounded-lg overflow-hidden border border-gray-200 transition-transform duration-300 transform group hover:scale-105"
              >
                <Link
                  href={{
                    pathname: "/products",
                    query: {
                      _id: item._id,
                      image: item.image,
                      title: item.title,
                      price: item.price,
                      category: item.category,
                      description: item.description,
                    },
                  }}
                >
                  <div className="w-full h-[350px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="h-full w-full cursor-pointer"
                      onLoad={() => setLoading(false)} // Set loading to false when the image loads
                    />
                    {item.isNew && (
                      <span className="absolute top-2 right-2 px-3 py-1 bg-white rounded-full text-xs font-medium group-hover:bg-orange-600 group-hover:text-white duration-300">
                        New Arrival
                      </span>
                    )}
                  </div>
                </Link>
                <div className="bg-white py-4 px-2 border-[1px] border-slate-400 border-t-0 rounded-b-lg flex flex-col gap-y-3">
                  <p>{item.title}</p>
                  <div className="flex items-center justify-between">
                    <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-sm">
                      <p>
                        {calculatePercentage(item.price, item.oldPrice)}% off
                      </p>
                    </div>
                    <div className="flex gap-x-3">
                      <p className="text-slate-500 line-through">
                        ${item.oldPrice}
                      </p>
                      <p className="font-semibold">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-orange-500 rounded-full px-4 py-1 font-semibold text-sm tracking-wide text-slate-100 hover:bg-orange-700"
                    >
                      Add to Cart
                    </button>
                    <div className="flex gap-1">
                      {renderStars(item.ratings)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
      </div>
    </Wrapper>
  );
};

export default Products;