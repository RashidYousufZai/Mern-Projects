import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./PopularItems.scss";
import "./Card.scss";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productAction";

const PopularItems = () => {
  const dispatch = useDispatch();

  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <div className="Polular-Item">
        <h1>Popular Items</h1>
        <p className="text-center para">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>
      <div className="cotainer">
        <div className="row p-items">
          {products &&
            products
              .slice(0, 4)
              .map((product) => <Card key={product._id} product={product} />)}
        </div>
        <div className="button-more-p">
          <NavLink to="/about">
            <button type="button" className="btn btn-primary text-center">
              View More Products
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PopularItems;
