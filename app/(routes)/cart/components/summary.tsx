"use client";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { RefreshCw } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function Summary() {
  const [loading, setLoading] = useState(false);
  const SearchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (SearchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (SearchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [SearchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    setLoading(true);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      },
      { headers: { "Content-Type": "application/json" } }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 dark:bg-[hsl(var(--background))] dark:border-[hsl(var(--border))] dark:border px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:pt-8">
      <h2 className="text-lg font-medium text-gray-900 dark:text-[hsl(var(--muted-foreground))]">
        Order Summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t dark:border-[hsl(var(--border))] border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900 dark:text-[hsl(var(--muted-foreground))]">
            Order total
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6 dark:border-[hsl(var(--border))] dark:border-2"
      >
        {loading ? (
          <div className="flex justify-center cursor-wait space-x-2">
            <RefreshCw className="w-6 h-6 animate-spin" />
            <p>Loading....</p>
          </div>
        ) : (
          "Checkout"
        )}
      </Button>
    </div>
  );
}
