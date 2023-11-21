// import React from 'react';
import ProductCard from '../ProductCard/productCard';
// import productss from '../../data/fetch-products';
// import { JSX } from 'react/jsx-runtime';

export default function LatestProducts() {
  return (
    <div className="latest-products">
      <div className="container">
        <ul className="wrapper wrapper-grid-layout">
          {/* {data.map( */}
          {/* (product: JSX.IntrinsicAttributes & ProductCardProps) => ( */}
          <ProductCard
            key={1}
            imageUrl={''}
            name={''}
            category={''}
            brand={''}
            price={0}
            id={0}
          />
          {/* ) */}
          {/* )} */}
        </ul>
      </div>
    </div>
  );
  // };
}
