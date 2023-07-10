"use client";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";

type Props = {
  colors: Color[];
  sizes: Size[];
};

export default function MobileFilters({ colors, sizes }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
  setIsMounted(true);
  }, [])

  if(!isMounted) return null;
  return (
    <>
      <Button
        onClick={onOpen}
        className="lg:hidden flex text-white items-center gap-x-2"
        type="button"
      >
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className={"relative z-40 lg:hidden"}
        onClose={onClose}
      >
        {/*Background  */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className={
              "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
            }
          >
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>
            {/* Close icon button */}
            <div className="p-4">
            <Filter 
            valueKey="sizeId"
            name = "Sizes"
            data={sizes}
            />
            <Filter 
            valueKey="colorId"
            name = "Colors"
            data={colors}
            />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
