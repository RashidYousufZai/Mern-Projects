import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [fdata, setfdata] = useState([]);

  const fetchPost = async () => {
    try {
      const res = await axios.get("/api/posts/");
      const { data } = res;
      setfdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  // Function to format the date in a human-readable format
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <div className="container px-4 md:px-0 mx-auto">
      <div className="mx-0 sm:mx-6 flex flex-wrap">
        {fdata.map((blogPost) => (
          <div key={blogPost._id} className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={blogPost.photo} className="h-64 w-full rounded-t pb-6" alt="Blog Post" />
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">{blogPost.title}</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">{blogPost.desc}</p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-xs md:text-sm">
                  Created at: {formatDate(blogPost.createdAt)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
