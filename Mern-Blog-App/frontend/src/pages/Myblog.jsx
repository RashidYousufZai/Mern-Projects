import { Link } from "react-router-dom"


const Myblog = () => {
  return (
    <div>
        <div className="px-8 md:px-[200px] min-h-[80vh]">
        <div className="h-[40vh] flex justify-center items-center"></div>

          <Link to="">
          {/* <HomePosts key={post._id} post={post}/> */}
          </Link>
        <h3 className="text-center font-bold mt-16">No posts available</h3>
        </div>
    </div>
  )
}

export default Myblog