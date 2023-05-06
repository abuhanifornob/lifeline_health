
import BlogsCards from "@/components/BlogsCards/BlogsCards";
import { AuthContext } from "@/context/AuthProvider";
import Link from "next/link";
import { useContext } from "react";

const Blog = ({ blogs }) => {
  const {user}=useContext(AuthContext)

    return (
        <>
            <h1 className="text-center text-4xl font-bold mt-24" style={{color:"#254747"}}>Welcome to <span className="text-blue-500">blog</span> page</h1>
            {/* blog post */}
            {user?.uid&&<div className="max-w-screen-xl mx-auto  mt-24">
            <form  className="bg-blue-100 px-8 py-4 rounded-lg mb-10">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-3xl text-[#4791ff]">What is on your mind?</span>

                    </label>

                    <textarea type="text" name='description' required placeholder="Start post" cols="30" rows="10" className="input input-bordered border-black border-4 mb-6 text-xl  h-28"></textarea>
                </div>

                <div className='flex  justify-center border border-black bg-[#254747] text-[#4791ff] font-bold text-xl mb-6 '><input name='picture' required placeholder='choose picture' type="file" className='w-full ' /></div>

                <div className="form-control mb-6">
                    <button className="btn bg-[#254747] mb-8 text-2xl text-[#4791ff]">Post
                        {/* <FaShare /> */}
                    </button>
                </div>
            </form>

            {/* {
                myposts.map((post) => <PostCard
                    key={post._id}
                    post={post}
                ></PostCard>)
            } */}
            {/* <Toaster/> */}
        </div>}
            {/* blog post end */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-12 mb-24 ">
    
               { 
               blogs.map((blog,index)=><BlogsCards
                key={blog.postId}
                blog={blog}
                ></BlogsCards>)  
            } 
   
            </div>
            
        </>
    );
};
export async function getServerSideProps() {

  const res = await fetch('https://lifeline-health-neon.vercel.app/api/blogs')
  const blogs = await res.json()

  return {
    props: {
      blogs
    },
  };
}


export default Blog;