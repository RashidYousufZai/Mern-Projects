import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import "./products.scss";
import { getAllProducts } from "../actions/productAction";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Card from "../component/Card";
import { Rings } from "react-loader-spinner";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState("");

  const { error, products, loading, productCount, resultPerPage } = useSelector((state) => state.products);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber); 
  };

  useEffect(() => {
    document.title = "Products";
    if (error) {
      return toast(error);
    }

    // Fetch products based on the search query and currentPage
    dispatch(getAllProducts(keyword, searchQuery, currentPage));
  }, [dispatch, error, keyword, searchQuery, currentPage]); // Include currentPage as a dependency

  const centerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
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
      ) : (
        <div className="new-items">
          {products &&
            products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
        </div>
      )}

      <div className="paginationBox">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resultPerPage}
          totalItemsCount={productCount}
          onChange={4} // Pass the page number to setCurrentPageNo
          nextPageText="Next"
          prevPageText="Prev"
          firstPageText="1st"
          lastPageText="Last"
          itemClass="page-item"
          linkClass="page-link"
          activeClass="pageItemActive"
          activeLinkClass="pageLinkActive"
        />
      </div>
    </div>
  );
};

export default Products;
