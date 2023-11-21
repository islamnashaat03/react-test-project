import ProductCard from '../ProductCard/productCard';
export default function LatestProducts() {
  return (
    <div className="latest-products">
      <div className="container">
        <ul className="wrapper wrapper-grid-layout">
          {
            <ProductCard
              brand="iphone"
              category="phones "
              discountPercentage={15}
              imag="https://picsum.photos/200/300"
              name="iphone 14"
              price={1900}
              priceBeforeSale={2500}
              key={1}
            />
          }
        </ul>
      </div>
    </div>
  );
}
