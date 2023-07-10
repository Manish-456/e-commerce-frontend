"use client";
import { Product } from "@/types";
import React from "react";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import {  ShoppingCart } from 'lucide-react';
import useCart from "@/hooks/useCart";

type Props = {
  data: Product;
};

export default function Info({ data }: Props) {
  const cart = useCart();
  
  return (
    <div>
      <h1 className="font-bold text-3xl text-gray-900">{data.name}</h1>
      <div className="mt-3 items-end justify-between">
        <Currency value={data.price} />
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">

      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Size :</h3>
        <div>{data?.size?.name}</div>
      </div>
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Color :</h3>
        <div className="h-6 w-6 rounded-full border border-gray-600" style={{
            backgroundColor : data?.color?.value
        }}>

        </div>
        <div>{data?.color?.name}</div>
      </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button type="button" onClick={() => cart.addItem(data)} className="text-white flex items-center gap-x-2">
          Add to Cart
         <ShoppingCart size={20} className="" />
        </Button>
      </div>
    </div>
  );
}
