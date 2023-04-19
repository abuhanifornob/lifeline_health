
import BlogsCards from "@/components/BlogsCards/BlogsCards";

const Blog = ({ blogs }) => {


  return (
    <>
      <h1 className="text-center text-4xl font-bold mt-24" style={{ color: "#254747" }}>Welcome to <span className="text-blue-500">blog</span> page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-12 mb-24 ">
        {
          blogs.map((blog, index) => <BlogsCards
            key={blog.postId}
            blog={blog}
          ></BlogsCards>)
        }
      </div>

    </>
  );
};
export async function getStaticProps() {

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

export default Blog;