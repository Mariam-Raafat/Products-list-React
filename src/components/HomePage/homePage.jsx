import React from 'react';
import './homePage.css'; 
import {Navbar} from '../navbar/navbar';
import { ProductsList } from '../products-list/products-list';
export const HomePage = () => {
    return (
        <>
            <Navbar/>
        <div className="home-page">
            <h1 className='mt-3 mb-5'>Welcome to Our Product Store</h1>
            <ProductsList/>
        </div>
        </>
    );
}