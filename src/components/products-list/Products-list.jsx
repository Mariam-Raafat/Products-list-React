import { Product } from '../product/Product';
import axiosInterceptor from '../../interceptors/interceptor';
import { useEffect,useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';   
export const ProductsList = () => {
   const [products, setProducts] = useState([]);
   const isLoading = useSelector((state) => state.loading.isLoading);
   const [searchParams] = useSearchParams();
   const search = searchParams.get("search") || "";
   const filtered = products.filter((product) =>{
     return product.title.toLowerCase().includes(search.toLowerCase())});
    useEffect(() => {       
    axiosInterceptor.get('/products').then((response) => {
      setProducts(response.data.products);        
    }).catch((error) => {
      console.error("Error fetching products:", error);
    });
  }, []);
    return (
       <div className="products-list">
      <div className="row gy-4">
         {isLoading ? (
          <div className="text-center w-100">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-muted">No products found.</p>
        ) : (
          filtered.map((product) => (
            <div key={product.id} className="col-md-3">
              <Product product={product} />
            </div>
          ))
        )}
      </div>
    </div>
    );
};