"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        setProduct(data?.products);
      } catch (error) {
        throw new Error("Failed to fetch data!");
      }
    }
    fetchData();
  }, []);

  if (product?.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {product?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex md:flex-row flex-col-reverse justify-between items-center px-12 bg-slate-100 gap-x-40 m-5 rounded"
          >
            <div className="flex-1 flex flex-col gap-3 py-4">
              <h1 className="text-2xl font-semibold">{item?.title}</h1>
              <h3 className="text-blue-600 font-semibold text-sm">{item?.availabilityStatus}</h3>
              <h2 className="text-lg text-gray-800 line-clamp-3">
                {item?.description}
              </h2>
              <h2 className="font-semibold text-xl">
                BDT: {item?.discountPercentage}{" "}
                <span className="text-gray-500 line-through">
                  BDT: {item?.price}
                </span>
              </h2>
              <div className="flex gap-3">
                <Link href={`products/${item?.id}`}><Button variant="outlined" color="inherit" className="hover:bg-black hover:text-white transition-all ease-in-out font-semibold mt-2">LEARN MORE</Button></Link>
                <Link href={`/buy-now`}><Button variant="contained"  className="hover:bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 transition-all ease-in-out font-semibold mt-2">BUY NOW</Button></Link>
              </div>
            </div>
            <div className="flex items-center py-5">
              <img
                src={item?.images}
                alt="image"
                className="md:h-64 md:w-64 h-48 w-48 object-cover mr-5"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Page;
