import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  deleteFromCartPage,
} from "../../store/counterSlice";

export const CartPage = () => {
  const cartItems = useSelector((state) => state.count.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 border-bottom pb-2">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-muted">
          <p>Your cart is empty.</p>
          <Link to="/" className="btn btn-warning mt-3">
            ⬅ Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex mb-4 p-3 border rounded bg-white shadow-sm"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="img-fluid"
                  style={{
                    width: "120px",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
                <div className="ms-3 flex-grow-1">
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="text-muted mb-1">
                    Unit Price: <strong>${item.price}</strong>
                  </p>
                  <p className="text-muted mb-1">
                    Subtotal:{" "}
                    <strong>
                      ${(item.price * item.quantity).toFixed(2)}
                    </strong>
                  </p>

                  <div className="d-flex align-items-center mb-2">
                    <button
                      className="btn btn-sm btn-outline-danger me-2"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      -
                    </button>
                    <span className="fw-bold">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-success ms-2"
                      onClick={() => {
                        if (item.quantity < item.stock)
                          dispatch(addToCart(item));
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteFromCartPage(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="p-3 border rounded bg-light shadow-sm">
              <h5 className="mb-3">
                Subtotal ({cartItems.length} items):
                <span className="text-success"> ${totalPrice.toFixed(2)}</span>
              </h5>
              <Link to="/" className="btn btn-outline-secondary w-100">
                ⬅ Back to Products
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
