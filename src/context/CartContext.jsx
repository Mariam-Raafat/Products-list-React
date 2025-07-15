// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   // const [cartItems, setCartItems] = useState([]);

//   // const addToCart = (product) => {
//   //   setCartItems((prevItems) => {
//   //     const existing = prevItems.find((item) => item.id === product.id);
//   //     if (existing) {
//   //       if (existing.quantity >= product.stock) return prevItems; 
//   //       return prevItems.map((item) =>
//   //         item.id === product.id
//   //           ? { ...item, quantity: item.quantity + 1 }
//   //           : item
//   //       );
//   //     }
//   //     return [...prevItems, { ...product, quantity: 1 }];
//   //   });
//   // };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) =>
//       prevItems
//         .map((item) =>
//           item.id === productId
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//     const deleteFromCart = (productId) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item.id !== productId)
//     );
//   };

//   // const getCartCount = () => {
//   //   return cartItems.reduce((total, item) => total + item.quantity, 0);
//   // };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, getCartCount, deleteFromCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
