import React from "react";
import { BsCart4 } from "react-icons/bs";
import "./style.css";
import { useWishListContext } from "../../hooks/context";
import { useEffect } from "react";

export const SingleProduct = ({ item }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    quantity
  } = useWishListContext();

  useEffect(() => {
    getItemsQuantity(item.sku);
  }, [getItemsQuantity, item])

  return (
    <>
      {/* */}
      <div className="col" key={item.sku}>
        <div className="card">
          {/* IMAGE */}
          <figure>
            <img src={item.image} className="card-img-top" alt={item.name} />
          </figure>
          {/* END IMAGE */}
          {/* PRICE AND DESCRIPTION */}
          <div className="card-body">
            <h5 className="card-title">${item.priceSpecification.price}</h5>
            {/* PRICE */}
            <p className="card-text">
              {/* DESCRIPTION */}
              {item.name}
            </p>
            {/* Right elements */}
            <div className="d-flex align-items-center">
              {quantity === 0 ? (
                <button type="button" className="btn button-cart mt-auto">
                  <div className="btn cart">
                    <span className="text-white">
                      <BsCart4 />
                    </span>
                  </div>
                  <div
                    className="btn btn-wishlist"
                    onClick={() => {
                      increaseCartQuantity(item.sku);
                    }}
                  >
                    ADD TO CARD
                  </div>
                </button>
              ) : (
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: ".5rem" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        decreaseCartQuantity(item.sku);
                      }}
                    >
                      -
                    </button>
                    <div>
                      <span className="fs-3">{quantity}</span> in Cart
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        increaseCartQuantity(item.sku);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      removeFromCart(item.sku);
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
            {/* Right elements */}
          </div>
          {/* END PRICE AND DESCRIPTION */}
        </div>
      </div>
    </>
  );
};
