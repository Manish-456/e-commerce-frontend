"use client";

import Button from "@/components/ui/Button";

import { Dialog } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import IconButton from "./IconButton";

type Props = {
  children: React.ReactNode;
};

export default function SideDrawer({ children }: Props) {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="lg:hidden flex bg-transparent text-black border border-gray-50  items-center gap-x-2"
        type="button"
      >
        <Menu size={20}/>
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
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
