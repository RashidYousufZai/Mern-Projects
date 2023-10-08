import  { useEffect } from "react";
import Hero from "../component/Hero";
import Card from "../component/Card";
import Galery from "../component/Galery";
import "./Home.scss";
import Payment from "../component/Payment";
import { getAllProducts } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const {  error, products} = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    document.title = "Time zome | Home";
    if (error) {
      return toast(error);
    }
    dispatch(getAllProducts());
  }, [dispatch, error]);
  return (
    <div>
      <ToastContainer />
      <Hero />
      <h1 className="text-center">New Arrivals</h1>
      <div className="new-items">
        {products &&
          products
            .slice(0, 4)
            .map((product) => <Card key={product._id} product={product} />)}
      </div>

      <Galery />
      {/* <PopularItems /> */}

      <h1 className="text-center">Featured products</h1>
      <div className="new-items">
        {products &&
          products
            .slice(0, 4)
            .map((product) => <Card key={product._id} product={product} />)}
      </div>

      <div className="d-flex more-button">
        <NavLink to="/products">
        <button type="button" className="btn btn-primary">
              View more
            </button>
        </NavLink>
      </div>
      <Payment />
    </div>
  );
};

export default Home;
