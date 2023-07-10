"use client";

import PreviewModal from "@/components/PreviewModal";
import { useEffect, useState } from "react";

type Props = {};

export default function ModalProvider({}: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if(!isMounted) return null;

  return <PreviewModal />;
}
