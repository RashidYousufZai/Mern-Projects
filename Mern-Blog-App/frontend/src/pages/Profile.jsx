import { useContext, useEffect, useState } from "react";
// import ProfilePosts from "../components/ProfilePosts";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { IF } from "../url";

const Profile = () => {
  const param = useParams().id;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updated, setUpdated] = useState(false);
  const postId = useParams().id;
  console.log(user);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("/api/users/" + postId);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUserUpdate = async () => {
    setUpdated(false);
    try {
      const res = await axios.put(
        "/api/users/" + postId,
        { username, email, password },
        { withCredentials: true }
      );
      // console.log(res.data)
      setUpdated(true);
    } catch (err) {
      console.log(err);
      setUpdated(false);
    }
  };

  const handleUserDelete = async () => {
    try {
      const res = await axios.delete("/api/users/" + postId, {
        withCredentials: true,
      });
      setUser(null);
      navigate("/");
      // console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(user)
  const fetchUserPosts = async () => {
    try {
      const res = await axios.get("/api/posts/user/" + postId);
      // console.log(res.data)
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [param]);

  useEffect(() => {
    fetchUserPosts();
  }, [param]);

  return (
    <div>
      <div className="min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
        <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
          <h1 className="text-xl font-bold mb-4">Your posts:</h1>
          <div className="mx-0 sm:mx-6  flex flex-wrap">
            {posts.map((blogPost) => (
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
        </div>
        <div className="md:sticky md:top-12  flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end ">
          <div className=" flex flex-col space-y-4 items-start">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your username"
              type="text"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your email"
              type="email"
            />
            {/* <input onChange={(e)=>setPassword(e.target.value)} value={password} className="outline-none px-4 py-2 text-gray-500" placeholder="Your password" type="password"/> */}
            <div className="flex items-center space-x-4 mt-8">
              <button
                onClick={handleUserUpdate}
                className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400"
              >
                Update
              </button>
              <button
                onClick={handleUserDelete}
                className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400"
              >
                Delete
              </button>
            </div>
            {updated && (
              <h3 className="text-green-500 text-sm text-center mt-4">
                user updated successfully!
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
