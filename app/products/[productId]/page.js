"use client";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { productId } = await params;
        let data = await fetch(`https://dummyjson.com/products/${productId}`);
        data = await data.json();
        setProduct(data);
      } catch (error) {
        throw new Error("Failed to fetch data!", error);
      }
    };
    getData();
  }, [params]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="px-14 md:px-36 py-10 flex flex-col gap-5">
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">ID</div>
          <div className="md:w-full">{product?.id}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">Title</div>
          <div className="md:w-full">{product?.title}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">
            Description
          </div>
          <div className="md:w-full">{product?.description}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">Category</div>
          <div className="md:w-full">{product?.category}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">Price</div>
          <div className="md:w-full">{product?.price}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">
            Discount Percentage
          </div>
          <div className="md:w-full">{product?.discountPercentage}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">Rating</div>
          <div className="md:w-full">{product?.rating}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">Stock</div>
          <div className="md:w-full">{product?.stock}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">Brand</div>
          <div className="md:w-full">{product?.brand}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">Weight</div>
          <div className="md:w-full">{product?.weight}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">
            Warranty Information
          </div>
          <div className="md:w-full">{product?.warrantyInformation}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">
            Shipping Information
          </div>
          <div className="md:w-full">{product?.shippingInformation}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">
            Return Policy
          </div>
          <div className="md:w-full">{product?.returnPolicy}</div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row px-5 md:gap-7">
          <div className="md:w-1/6 w-1/4 font-semibold text-lg">
            Minimum Order Quantity
          </div>
          <div className="md:w-full">{product?.minimumOrderQuantity}</div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Page;
