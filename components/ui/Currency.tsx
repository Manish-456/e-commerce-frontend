"use client";

import React from "react";
import { formatter } from "../../lib/utils";

type Props = {
  value?: string | number;
};

export default function Currency({ value }: Props) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  
  return (
    <div className="font-semibold">{formatter.format(value as number)}</div>
  );
}
