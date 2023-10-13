import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const PostDetail = () => {
  return (
    <div>
        <div className="h-[80vh] flex justify-center items-center w-full"></div>:<div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-black md:text-3xl"></h1>
          <div className="flex items-center justify-center space-x-2">
            <p className="cursor-pointer"  ><BiEdit/></p>
            <p className="cursor-pointer" ><MdDelete/></p>
         </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
        <p></p>
       <div className="flex space-x-2">
       <p></p>
       <p></p>
       </div>
        </div>
        <img src="https://source.unsplash.com/collection/494263/800x600" className="w-full  mx-auto mt-8" alt=""/>
         <p className="mx-auto mt-8"></p>
         <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1"></div>
          </div>
         </div>
         <div className="flex flex-col mt-4">
         <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
         {/* {comments?.map((c)=>(
          <Comment key={c._id} c={c} post={post} />
         ))} */}
           
         </div>
         {/* write a comment */}
         <div className="w-full flex flex-col mt-4 md:flex-row">
          <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
          <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
         </div>
        </div>
    </div>
  )
}

export default PostDetail