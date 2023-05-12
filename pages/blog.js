
import BlogsCards from "@/components/BlogsCards/BlogsCards";
import { AuthContext } from "@/context/AuthProvider";
import axios from "axios";
import { useAxios } from 'use-axios-client';
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";


const Blog = ({ blogs }) => {
  const {user,loading}=useContext(AuthContext)
  const date = new Date().toLocaleDateString();

  const [datas, setDatas] = useState([]);
//   setData(blogs)
  console.log("data",datas)
  useEffect(() => {
   axios.get('http://localhost:3000/api/blogs')
   .then((res)=>setDatas(res.data))
  }, []);
//   const { refetch } = useAxios({
//     url: 'http://localhost:3000/api/blogs',
//   });
//   handle submit blog post
  const handleOnSubmitPost=(event)=>{
    event.preventDefault();
    const data=event.target;
    const description = data.description.value;
    const image=data.picture.files[0];
    const headline=data.headline.value;
    const genre=data.genre.value;

    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=f77eb96236dd667b11b2d66bc4d9cf88`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {

        if (imgData.success) {
            const picture = imgData.data.url
          
          console.log("blogimg", picture)
          const blogInfo={
            userpostInfo:{userId:user?.uid, userName:user?.displayName, userEmail:user?.email},
            postId:user?.uid,
            HeadLiine:headline,
            image:picture,
            Author:user?.displayName,
            genre:genre,
            datePublished:date,
            description: description,
            comments:[{userCommentId:'001',comment:'Great post bro!'}]
          }
        //   console.log("blogimg", JSON.stringify(blogInfo))

        // post request on api
        // fetch('http://localhost:3000/api/blogs', {
        //                 method: 'POST',
        //                 headers: {
        //                     'content-type': 'application/json'
        //                 },
        //                 body: JSON.stringify(blogInfo)
        //             })
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     console.log(data)
        //                     if (data.acknowledged) {
        //                         console.log("Registration successful!",data);
        //                         console.log(data)
        //                     }
        //                     else{
        //                         toast("Registration failed. Please try again.");  
        //                     }
        //                 })
        //                 .catch(error => console.error(error));

        // const addPost=async()=>{
        //     await axios.post('http://localhost:3000/api/blogs',blogInfo)
        //     setData([blogInfo,...data])
        //     addPost()
        // }
        //   useEffect(() => {
            axios
        .post('http://localhost:3000/api/blogs', blogInfo )
        .then((response) => {
          // Assuming the API response contains the saved comment
          setDatas([blogInfo, ...datas])
          const savedComment = response;
            console.log('ddddd',savedComment)
            
        })
        .catch((error) => {
          console.error('Error submitting comment:', error);
        });
        //   }, [blogInfo]);
        
        // post request on api
        
          
  }})
  }
//   handle submit blog post
if(loading){
    return <h1 className="text-center text-xl font-bold">Loading......</h1>
 }
    return (
        <>
            <h1 className="text-center text-4xl font-bold mt-24" style={{color:"#254747"}}>Welcome to <span className="text-blue-500">blog</span> page</h1>
            {/* blog post */}
            {user?.uid&&<div className="max-w-screen-xl mx-auto  mt-24">
            <form onSubmit={handleOnSubmitPost} className="bg-blue-100 px-8 py-4 rounded-lg mb-10">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-3xl text-[#4791ff]">What is on your mind?</span>

                    </label>

                    <textarea type="text" name='description' required placeholder="Start post" cols="30" rows="10" className="input input-bordered border-black border-4 mb-6 text-xl  h-28"></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Post Headline</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Headline"
                    className="input input-bordered"
                    name="headline"
                  // required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Post Genre</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Post Genre"
                    className="input input-bordered"
                    name="genre"
                  // required
                  />
                </div>

                <div className='flex  justify-center border border-black bg-[#254747] text-[#4791ff] font-bold text-xl mb-6 '><input name='picture' required placeholder='choose picture' type="file" className='w-full ' /></div>

                <div className="form-control mb-6">
                    <button  className="btn bg-[#254747] mb-8 text-2xl text-[#4791ff]">Post
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
               datas.map((blog,index)=><BlogsCards
                key={blog._id}
                blog={blog}
                ></BlogsCards>)  
            } 
   
            </div>
            
        </>
    );
};
// export async function getStaticProps() {

//   const {data} = await axios.get('https://lifeline-health-neon.vercel.app/api/blogs')
// //   const blogs = await res.json()

//   return {
//     props: {
//       blogs: data||{}
//     },
//     revalidate: 1
//   };
// }


export default Blog;