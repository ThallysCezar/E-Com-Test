import { useState } from "react";
import { createContext, useContext } from "react";
import { CartList } from "../components/CartList";

const WishListContext = createContext({});

export function useWishListContext() {
  return useContext(WishListContext);
}

export const WishListProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const cartItem = [];


  const openCart = () => {
    setIsOpen(true);
  }

  const closeCart = () => {
    setIsOpen(false);
  }

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
)

  const getItemsQuantity = (sku) => {
    return cartItems.find(item => item.sku === sku)?.quantity || 0
  };

  const increaseCartQuantity = (sku) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.sku === sku) == null) {
        return [...currItems, { sku, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.sku === sku) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (sku) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.sku === sku)?.quantity === 1) {
        return currItems.filter((item) => item.sku !== sku);
      } else {
        return currItems.map((item) => {
          if (item.sku === sku) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (sku) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.sku !== sku);
    });
  };

  return (
    <WishListContext.Provider
      value={{
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItem,
        cartQuantity
      }}
    >
      {children}
      <CartList isOpen={isOpen}/>
    </WishListContext.Provider>
  );
};
