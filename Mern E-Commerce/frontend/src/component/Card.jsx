import  { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import "./Card.scss";
import { Link } from "react-router-dom";
const Card = ({ product }) => {
  const options = {
    edit: false,
    half: true,
    value: Number(product?.ratings),
    size: 20,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="card-items">
      <Link to={`/products/${product?._id}`}>
        <div className="card">
          <div className="imgBox">
            <img
              src={product?.images[0]?.url}
              alt={product?.name}
              className="mouse"
            />
          </div>
          <div className="contentBox">
            <h3>{product?.name}</h3>
            <div>
              <ReactStars {...options} />{" "}
            </div>
            <h2 className="price">
              {product?.price}
              <small>98</small> $
            </h2>
            <a href="/" className="buy">
              Buy Now
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
