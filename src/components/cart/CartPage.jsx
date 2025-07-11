import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border p-3 mb-3 rounded shadow-sm bg-light">
            <div className="d-flex align-items-start">
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "100px", height: "auto", borderRadius: "8px" }}
              />

              <div className="flex-grow-1 ms-4">
                <h5 className="mb-1">{item.title}</h5>
                <p className="mb-2 text-muted">Unit Price: ${item.price}</p>

                <div className="d-flex align-items-center mb-2">
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <span className="fw-bold">{item.quantity}</span>
                  <button
                    className="btn btn-success btn-sm ms-2"
                    onClick={() => {
                      if (item.quantity < item.stock) addToCart(item);
                    }}
                  >
                    +
                  </button>
                </div>

                <p className="mb-2">
                  <strong>Subtotal:</strong> ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteFromCart(item.id)}
                >
                   Delete From Cart
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div className="mt-4 text-end">
          <h4 className="fw-bold">Total: ${totalPrice.toFixed(2)}</h4>
        </div>
      )}

      <div className="mt-4">
        <Link to="/" className="btn btn-outline-secondary">
          ⬅ Back to Products
        </Link>
      </div>
    </div>
  );
};
