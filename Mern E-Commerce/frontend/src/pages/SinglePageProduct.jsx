import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsDetails } from "../actions/productAction";
import { NavLink, useParams } from "react-router-dom";
import { Rings } from  'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import Payment from "../component/Payment";

const SingleProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.productDetails);
  const productImages = product.images || [];

  const centerStyles = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',     
    height: '100vh',          
  };

  useEffect(() => {
    if (id) {
      dispatch(getAllProductsDetails(id));
    }
  }, [dispatch, id]);

  const notify = () => {
    toast.success(error, {
      position: 'top-right', // You can change the position
      autoClose: 3000, // Notification will close after 3 seconds
      hideProgressBar: false, // Display a progress bar
      closeOnClick: true, // Close the notification when clicked
      pauseOnHover: true, // Pause the notification when hovered
      draggable: true, // Allow the user to drag the notification
      progress: undefined, // Use default progress
    });
  };

  return (
    <div>
      {loading ? (
        <div style={centerStyles}>
        <Rings
          height={80}
          width={80}
          color="red"
          radius={6}
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
      ) : error ? (
        <ToastContainer onChange={notify}/>
      ) : (
        <section className="py-5">
          <div className="container">
            <div className="row gx-5">
              <aside className="col-lg-6">
                <div className="rounded-4 mb-3 d-flex justify-content-center">
                  <NavLink
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    data-type="image"
                    href={productImages[0]?.url || ""}
                  >
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={productImages[0]?.url || ""} className="d-block w-100" alt={product.name}/>
                        </div>
                        <div className="carousel-item">
                          <img src={productImages[0]?.url || ""} className="d-block w-100" alt={product.name}/>
                        </div>
                        <div className="carousel-item">
                          <img src={productImages[0]?.url || ""} className="d-block w-100" alt={product.name}/>
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </NavLink>
                </div>
                {/* Render additional thumbnail images here */}
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className="title text-dark">{product.name}</h4>
                  <div className="d-flex flex-row my-3">
                    {/* Render ratings here */}
                  </div>

                  <div className="mb-3">
                  <span className="h5">
                    {product.price ? `$${product.price.toFixed(2)}` : "Price Not Available"}
                  </span>

                    <span className="text-muted">/per box</span>
                  </div>

                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      {/* Render star ratings here */}
                      {/* Example: <i className="fa fa-star"></i> */}
                    </div>
                    <span className="text-muted">
                      <i className="fas fa-shopping-basket fa-sm mx-1"></i>
                      {product.numOfReviews} orders
                    </span>
                    <span className="text-success ms-2">In stock</span>
                  </div>

                  <p>{product.description}</p>

                  <div className="row">
                    <dt className="col-3">Type:</dt>
                    <dd className="col-9">{product.category}</dd>
                    {/* Render other attributes here */}
                  </div>

                  <hr />

                  <div className="row mb-4">
                    <div className="col-md-4 col-6">
                      <label className="mb-2">Size</label>
                      {/* Render size options here */}
                    </div>
                    <div className="col-md-4 col-6 mb-3">
                      <label className="mb-2 d-block">Quantity</label>
                      <div className="d-flex"> 
                        <button>-</button>
                        <input type="number" value="1"/>
                        <button>+</button>
                      </div>
                    </div>
                  </div>

                  <button type="button" className="btn btn-primary btn-lg me-1">
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg me-1"
                  >
                    Wishlist
                  </button>
                  <button type="button" className="btn btn-success btn-lg">
                    Buy now
                  </button>
                </div>
              </main>
            </div>
          </div>
        </section>
      )}
      <Payment />
    </div>
  );
};

export default SingleProductDetails;

