"use client";

import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/useCart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Summary() {
  const searchParams = useSearchParams();

  const items = useCart((state) => state.items);

  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if(searchParams.get("success")){
        toast.success("Payment Completed.")
        removeAll();
    };

    if(searchParams.get("canceled")){
        toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 bg-gray-50 lg:col-span-5 sm:p-6 px-4 rounded-lg lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="space-y-4 mt-6">
        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
      onClick={onCheckout}
      type="button" disabled={items.length === 0} className="text-white w-full mt-6">
        Check out
      </Button>
    </div>
  );
}
