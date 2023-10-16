import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Loader from "../component/Loader";
import { IF } from "../url.js";

const Myblog = () => {
  const { user } = useContext(UserContext);
  const [fetchloader, setfetchloader] = useState(false);
  const [fdata, setfdata] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("/api/posts/user/" + user?.id);
      setfetchloader(true);
      console.log(res);
      // console.log(res.data)
      setfdata(res?.data);
      if (res.data.length === 0) {
        // setNoResults(true)
      } else {
        // setNoResults(false)
      }
      setfetchloader(false);
    } catch (err) {
      console.log(err);
      // setLoader(true)
      setfetchloader(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="my-12 px-8 md:px-[200px] min-h-[80vh]">
        <div className=" mt-4 h-[40vh] flex justify-center items-center">
          <div className="container px-4 md:px-0 mx-auto">
            {fetchloader ? (
              <div className="h-[40vh] flex justify-center items-center">
                <Loader />
              </div>
            ) : fdata.length === 0 ? (
              <h1 className="text-center text-xl mt-4">No Post found</h1>
            ) : (
              <div className="mx-0 sm:mx-6 flex flex-wrap">
                {fdata.map((blogPost) => (
                  <Link
                    to={`/posts/post/${blogPost._id}`}
                    key={blogPost._id}
                    className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
                  >
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                      <a
                        href="#"
                        className="flex flex-wrap no-underline hover:no-underline"
                      >
                        <img
                          src={IF + blogPost.photo}
                          className="h-64 w-full rounded-t pb-6"
                          alt="Blog Post"
                        />
                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                          GETTING STARTED
                        </p>
                        <div className="w-full font-bold text-xl text-gray-900 px-6">
                          {blogPost.title}
                        </div>
                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                          {blogPost.desc}
                        </p>
                      </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                      <div className="flex items-center justify between">
                        {/* <p className="text-gray-600 text-xs md:text-sm">
                          Created at: {formatDate(blogPost.createdAt)}
                        </p> */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myblog;
