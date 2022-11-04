import React from "react";
import { api, useWishListContext } from "../../hooks/context";

function CartItem({ sku, quantity }) {
  const { removeFromCart } = useWishListContext();

  return (
    <>
      <div className="vstack gap-3">
         {/* {api.map((item) => {
          <div>
            <div className="bg-light border">
              <div>
                <figure>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "125px",
                      height: "75px",
                      objectFit: "cover",
                    }}
                  />
                </figure>
              </div>
              <div>
                {item.name}
                {quantity > 1 && (
                  <span className="text-muted" style={{ fontSize: ".65rem" }}>
                    x{quantity}
                  </span>
                )}
              </div>
              <div className="text-muted" style={{ fontSize: ".75rem" }}>
                {item.priceSpecification.price}
              </div>
            </div>
            <div> {item.price * quantity}</div>
            <button
              className="outline-danger sm"
              onClick={() => removeFromCart(item.id)}
            >
              &times;
            </button>
          </div>; 
        })} */}
      </div>
    </>
  );
}

export default CartItem;
