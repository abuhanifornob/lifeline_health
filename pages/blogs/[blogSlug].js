import { AuthContext } from '@/context/AuthProvider';
import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react';

const BlogSlug = ({ blogs }) => {
  const {user}= useContext(AuthContext)
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);
  const router = useRouter()
  const { blogSlug } = router.query
  const blog = blogs.find((blog) => {
    return blog._id = blogSlug
  })
  console.log("bloooog", blog)
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      setCommentsList([comment, ...commentsList]);
      setComment('');
    }
  };

  const toggleCommentBox = () => {
    setIsCommentBoxVisible(!isCommentBoxVisible);
  };

  // fetch('https://joytweet-server.vercel.app/postCards', {
  //                       method: 'POST',
  //                       headers: {
  //                           'content-type': 'application/json'
  //                       },
  //                       body: JSON.stringify(postCards)
  //                   })
  //                       .then(res => res.json())
  //                       .then(data => {
                            
  //                           if (data.acknowledged) {
  //                               // form.reset();
  //                               // refetch()
  //                               // toast.success("Post Successful");
  //                           }
  //                       })
  //                       .catch(error => console.error(error));
  return <>
<Head>
<link rel="stylesheet" href="/css/theme.css" />
</Head>
    <div className="grid grid-cols-1  gap-4 md:w-1/2 mx-auto mt-12 mb-24 ">

      <div className="p-4 ">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-2/3 md:h-36  w-full  object-cover object-center" width={600} height={1000} src={"https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"} alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog.datePublished}</h2>
            <h1 className="title-font text-lg font-medium  mb-3 text-[#4791ff]">{blog.headline}</h1>
            <p className="leading-relaxed mb-3">{blog.description}</p>
            <div className="flex items-center flex-wrap ">

              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg onClick={toggleCommentBox} className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=' mx-auto'>
      {commentsList.length > 0 && (
        <div className="comments-list">
          {commentsList.map((comment, index) => (
            <p key={index}> <span className='text-blue-400 font-bold text-xl mr-4'>{user?.displayName}-</span> {blog.comments[0].comment}</p>
          ))}
        </div>
      )}
      {isCommentBoxVisible && (
        <div className="comment-box">
          <textarea
            className="input input-bordered input-primary w-96 my-4"
            placeholder="Enter your comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <br/>
          <button className="btn btn-primary" onClick={handleCommentSubmit}>
            Submit
          </button>
        </div>
      )}
      </div>
    </div>
  </>
}

export default BlogSlug
export async function getServerSideProps() {

  try {
    const res = await fetch('http://localhost:3000/api/blogs');
    const blogs = await res.json();
    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}