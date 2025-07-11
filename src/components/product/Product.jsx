import React, { useState } from 'react';
import './Product.css';
import { range } from '../rating/Rating';
import { Link } from 'react-router-dom';
import { AddToCartButton } from '../addBtn/AddBtn';

export const Product = ({ product }) => {
  return (
    <div className="card h-100 d-flex flex-column shadow-sm">
      <Link to={`/product-details/${product.id}`}>
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
          style={{ objectFit: 'cover', height: '200px' }}
        />
      </Link>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ minHeight: '48px' }}>
          {product.title}
        </h5>

        <p className="card-text text-muted mb-2" style={{ minHeight: '60px' }}>
          {product.description}
        </p>

        <div className="rating-stars mb-2">
          {range(5).map((i) => (
            <i
              key={i}
              className={i < product.rating ? 'fas fa-star' : 'far fa-star'}
              style={{ color: '#f5c518', marginRight: '4px' }}
            ></i>
          ))}
        </div>

        <div className="mt-auto">
          <p className="fw-bold">Price: ${product.price}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};
