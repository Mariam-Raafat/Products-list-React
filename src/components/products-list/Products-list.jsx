import React from 'react';
import { Product } from '../product/Product';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const baseUrl = 'https://dummyjson.com/products';
export const ProductsList = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {       
   axios.get(baseUrl).then((response) => {
        setProducts(response.data.products);        
    }).catch((error) => {
        console.error("Error fetching products:", error);
    });
    console.log("Products:", products);
  }, []);
    const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
    return (
       <div className="products-list">
      <div className="row gy-4">
        {filtered.length === 0 ? (
          <p className="text-muted">No products found.</p>
        ) : (
          filtered.map((product) => (
            <div key={product.id} className="col-md-3">
              <Product className="product" product={product} />
            </div>
          ))
        )}
      </div>
    </div>
    );
};