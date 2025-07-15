import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { range } from "../rating/Rating";
import { AddToCartButton } from "../addBtn/AddBtn";
import { useSelector } from "react-redux";
import axiosInterceptor from "../../interceptors/interceptor";
export const ProductDetails = () => {
  const { id } = useParams(); 
 const [product, setProduct] = useState(null);
 const navigate = useNavigate();
  const isLoading = useSelector((state) => state.loading.isLoading);
  useEffect(() => {
    axiosInterceptor
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (isLoading){
    return <>  
 <div className="text-center w-100">
    <div className="spinner-border text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>;
    </>
  } 
  if (!product) return <p>Product not found</p>;

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded"
            style={{ maxHeight: '400px' }}
          />
        </div>
        <div className="col-md-7">
          <h2 className="mb-3">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
     <div className="rating-stars mb-3">
        {range(5).map((i) => (
            <i
            key={i}
            className={i < product.rating ? 'fas fa-star' : 'far fa-star'}
            style={{ color: '#f5c518', marginRight: '4px' }}
            ></i>
        ))}
      </div>
          <h4 className="text-success">${product.price}</h4>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <div className="d-flex align-items-center mt-4">
            <AddToCartButton product={product} />
            <button className="btn btn-outline-secondary ms-3" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
