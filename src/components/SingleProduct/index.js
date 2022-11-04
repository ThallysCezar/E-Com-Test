import React from "react";
import { BsCart4 } from "react-icons/bs";
import "./style.css";
import { useWishListContext } from "../../hooks/context";
import { formatCurrency } from "../../utils/FormatCurrency";

export const SingleProduct = ({ product }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useWishListContext();

  const quantity = getItemsQuantity(product.sku);

  return (
    <>
      {/* */}
      <div className="col" key={product.sku}>
        <div className="card">
          {/* IMAGE */}
          <figure>
            <img src={product.image} className="card-img-top" alt={product.name} />
          </figure>
          {/* END IMAGE */}
          {/* PRICE AND DESCRIPTION */}
          <div className="card-body">
            <h5 className="card-title">{formatCurrency(product.priceSpecification.price)}</h5>
            {/* PRICE */}
            <p className="card-text">
              {/* DESCRIPTION */}
              {product.name}
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
                      increaseCartQuantity(product.sku);
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
                        decreaseCartQuantity(product.sku);
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
                        increaseCartQuantity(product.sku);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      removeFromCart(product.sku);
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
