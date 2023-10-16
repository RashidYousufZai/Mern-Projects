import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../component/Loader";
import { UserContext } from "../context/userContext";
import { IF } from "../url";
import Comment from "../component/Comment";

const PostDetail = () => {
  const [fetchloader, setfetchloader] = useState(true);
  const postId = useParams().id;
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(user);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/posts/${postId}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPosts = async () => {
    try {
      setfetchloader(true);
      const response = await axios.get(`/api/posts/${postId}`);
      const { data } = response;
      setPost(data);
      setfetchloader(false);
    } catch (error) {
      // console.log(error);
      throw new Error(error);
    }
  };

  const fetchPostComments = async () => {
    // setLoader(true);
    try {
      const res = await axios.get("/api/comments/post/" + postId);
      setComments(res.data);
      console.log(res.data);
      // setLoader(false);
    } catch (err) {
      // setLoader(true);
      console.log(err);
    }
  };

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/comments/create",
        {
          comment: comment,
          author: user.username,
          postId: postId,
          user_Id: user.id,
        },
        { withCredentials: true }
      );

      // Update the comments state with the new comment
      setComments([...comments, res.data]);

      // Clear the comment input
      setComment(""); // Clear the comment text

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchPostComments();
  }, [postId]);

  return (
    <div>
      {fetchloader ? (
        <div className="h-[40vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-8">
          {user?.id === post?.userId && (
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-black md:text-3xl">
                {post.title}
              </h1>
              <div className="flex items-center justify-center space-x-2">
                <p
                  className="cursor-pointer"
                  onClick={() => navigate("/edit/" + postId)}
                >
                  <BiEdit />
                </p>
                <p className="cursor-pointer" onClick={handleDelete}>
                  <MdDelete />
                </p>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>@{post.username}</p>
            <div className="flex space-x-2">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>
          <img src={IF + post.photo} className="w-full  mx-auto mt-8" alt="" />
          <p className="mx-auto mt-8">{post.desc}</p>
          <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories: </p>
            <div className="flex justify-center items-center flex-row space-x-2">
              <div className="flex justify-center items-center flex-row gap-2 bg-gray-400 rounded-lg px-3 py-1">
                {post.categories?.map((c, i) => (
                  <div key={i} className="rounded-lg px-3 py-1">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            {comments?.map((c) => (
              <Comment key={c._id} c={c} post={post} />
            ))}
          </div>
          <div className="w-full flex flex-col mt-4 md:flex-row">
            <input
              type="text"
              placeholder="Write a comment"
              className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0"
              onClick={postComment}
            >
              Add Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
