// import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../stor/counterSlice";
import { useSelector } from "react-redux";
export const AddToCartButton = ({ product }) => {
  // const { cartItems, removeFromCart } = useCart();
    const cartItems = useSelector((state) => state.count.cartItems); 
console.log("cartItems".cartItems)
  const { isAuthenticated } = useAuth();
  const itemInCart = cartItems.find((item) => item.id === product.id);
  const quantity = itemInCart?.quantity || 0;
  const dispatch = useDispatch();
  
  const handleAdd = () => {
    if (!isAuthenticated) {
      alert("Please login to add products to cart");
      return;
    }
    if (quantity < product.stock) {
      dispatch(addToCart(product));
    }
  };

  const handleRemove = () => {
    // removeFromCart(product.id);
  };

  return (
    <div className="d-flex align-items-center">
      {quantity === 0 ? (
        <button className="btn btn-success" onClick={handleAdd}>
          Add to Cart
        </button>
      ) : (
        <>
          <button className="btn btn-danger me-2" onClick={handleRemove}>
            -
          </button>
          <span>{quantity}</span>
          <button
            className="btn btn-success ms-2"
            onClick={handleAdd}
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </>
      )}
    </div>
  );
};
