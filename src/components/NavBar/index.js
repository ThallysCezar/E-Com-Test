// import { useContext } from "react";
// import WishListContext from "../../hooks/context";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./style.css";
import { useWishListContext } from "../../hooks/context";
import { formatCurrency } from "../../utils/FormatCurrency";
import { CartList } from "../CartList";
import CartItem from "../CarItem";

const NavBar = ({sku, quantity}) => {
  const { openCart, cartQuantity, totalPrice } = useWishListContext();


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* Container wrapper */}
            <div className="container-fluid">
              {/* Toggle button */}
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarSupportedContent"
              >
                {/* Nome começo */}
                <Link className="navbar-brand mt-2 mt-lg-0 col-7" to="#">
                  <h1>STORE</h1>
                </Link>
              </div>
              {/* Right elements */}
              <div className="d-flex align-items-center col-4">
                  <button
                    type="button"
                    className="btn button-cart"
                    onClick={openCart}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    <div className="btn me-3 cart">
                      <span className="text-white">
                        <BsCart4 />
                      </span>
                    </div>
                    <div className="btn btn-wishlist">
                      CART: {cartQuantity} ITEM(S) ${totalPrice}
                    </div>
                  </button>
              </div>
              {/* Right elements */}
            </div>
            {/* Container wrapper */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
