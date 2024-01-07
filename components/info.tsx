"use client";

import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface InfoProps {
  data: Product;
}

export default function Info({ data }: InfoProps) {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    // Override the div onClick in the main component
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold ">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4 dark:border-[hsl(var(--border))]" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Size:</h3>
          {/*Name or Value for user experience*/}
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Color:</h3>
          {/*Name or Value for user experience*/}
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 dark:border-2 dark:border-[hsl(var(--border))]"
        >
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
