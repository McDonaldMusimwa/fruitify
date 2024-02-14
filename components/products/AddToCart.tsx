'use client'

import useCartService from "@/lib/hooks/useCartStone";
import { OrderItem } from "@/lib/models/OrderModel";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter();
  const { items, increase,decrease } = useCartService();
  const [existItem, setExistItem] = useState<OrderItem | undefined>();

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);

  const AddToCartHandler = () => {
    increase(item);
  };

  return existItem ? (
    <div>
      <button className="btn" type="button" onClick={()=>decrease(existItem)}>
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button className="btn" type="button" onClick={() => increase(existItem)}>
        +
      </button>
    </div>
  ) : (
    <button
      className="btn bg-lime-500 w-full"
      type="button"
      onClick={AddToCartHandler}
    >Add to cart</button>
  );
}
