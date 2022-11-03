import React from "react";
import { useWishListContext } from "../../hooks/context";

function CartItem({ sku, quantity }) {
  const { removeFromCart } = useWishListContext();
  const baseURL =
    "https://run.mocky.io/v3/91af60d6-7265-4aa5-ae9b-c13ee3d247a8";

  const item = baseURL.find((i) => i.sku === sku);
  if (item == null) return null;

  return (
    <>
      <div className="vstack gap-3">
        <div className="bg-light border">First item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Third item</div>
      </div>
    </>
  );
}

export default CartItem;
