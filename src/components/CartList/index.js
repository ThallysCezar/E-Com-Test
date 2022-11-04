import React from "react";
import { useWishListContext } from "../../hooks/context";
import CartItem from "../CarItem";

export const CartList = ({ isOpen }) => {
  const { closeCart, cartItems } = useWishListContext();
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        show={isOpen}
        onHide={closeCart}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
           {/* {cartItems.map(product => (
            <CartItem key={product.id} {...product} />
          ))} */}
          </div>
        </div>
      </div>
    </>
  );
};
