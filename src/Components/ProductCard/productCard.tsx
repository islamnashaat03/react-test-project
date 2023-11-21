export type ProductCardProps = {
  imag: string;
  name: string;
  category: string;
  brand: string;
  priceBeforeSale?: number;
  price: number;
  discountPercentage?: number;
};
export default function productCard({
  name,
  category,
  // imag,
  brand,
  discountPercentage,
  price,
  priceBeforeSale,
}: ProductCardProps) {
  return (
    <>
      <li className="product-card">
        <figure className="image-wrap">
          <img
            src="{imag}"
            alt=""
          />
        </figure>
        <div className="body">
          <h4 className="name">{name}</h4>
          <div className="cat-brand">
            <h5 className="category">{category}</h5>
            <span>/</span>
            <h3 className="brand">{brand}</h3>
          </div>
          <div className="text"> </div>
          <div className="rate">
            <i className="fa-solid fa-star colored"></i>
            <i className="fa-solid fa-star colored"></i>
            <i className="fa-solid fa-star colored "></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="price">
            <div className="price-before-sale">{priceBeforeSale}$</div>
            <div className="final-price">{price}$</div>
          </div>
          <a className="btn main-btn"> add to cart </a>
        </div>
        <div className="sale-per">{discountPercentage}</div>
      </li>
    </>
  );
}
