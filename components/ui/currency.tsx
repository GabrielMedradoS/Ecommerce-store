"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "BRL",
});

interface CurrencyProps {
  value?: string | number;
}

export default function Currency({ value }: CurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}
