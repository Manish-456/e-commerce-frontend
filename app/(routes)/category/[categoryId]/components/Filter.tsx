"use client";

import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import qs from "query-string";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Props = {
  valueKey: string;
  data: (Size | Color)[];
  name: string;
};

export default function Filter({ data, name, valueKey }: Props) {
  const searchParams = useSearchParams();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  useEffect(() =>{
   setIsMounted(true)
  }, []);

  const onClick = (id: string) => {
    const currentParams = qs.parse(searchParams.toString());
    const query = {
      ...currentParams,
      [valueKey]: id,
    };
    if(!isMounted) return null;

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div className="flex items-center " key={filter.id}>
            <Button
              onClick={() => onClick(filter.id)}
              className={cn(
                `
            rounded-md text-sm text-gray-800 bg-white p-2 border border-gray
            ${selectedValue === filter.id && "bg-black text-white"}
            `
              )}
              type="button"
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
