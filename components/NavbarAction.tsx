"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

export default function NavbarAction() {
  const [isMounted, setIsMounted] = useState(false);
  const carts = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
      onClick={() => router.push('/cart')}
        type={"button"}
        className="flex items-center lg:border-none border border-gray-100 rounded-full bg-black/70  lg:bg-black px-4 py-4"
      >
        <ShoppingBag size={20} className="text-white" />
        <span className="ml-2 text-sm font-medium text-white">{
          carts.items.length
        }</span>
      </Button>
    </div>
  );
}
