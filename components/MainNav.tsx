"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
interface MainNavProps {
  data: Category[];
}
export default function MainNav({ data }: MainNavProps) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  useEffect(() => {
setIsMounted(true);
  }, [])

  if(!isMounted) return null;

  return (
    <nav className="mx-6 flex lg:mt-0 mt-20 lg:space-y-0 space-y-8 overflow-y-auto lg:flex-row flex-col items-center  space-x-4 lg:space-x-8">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(`
            text-sm
            font-medium 
            transition-colors
            hover:text-black
            ${route.active ? "text-black" : " text-neutral-500"}
            `)}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
