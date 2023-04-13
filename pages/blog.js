import BlogsCards from "@/components/BlogsCards/BlogsCards";

const blog = () => {
    const blogs = [
        {
            "userpostInfo": { "userId": "001", userName: "John Doe", "userEmail": "johndoe@gmail.com" },
            "postId":1,
            "headline": "14 Ways Json Can Improve Your SEO",
            "image": "http://example.com/image.jpg",
            "Author": "John Doe",
            "genre": "search engine optimization",
            "datePublished": "2015-09-20",
            "description": "Grabbing a quick cola or a chilled drink from the refrigerator might seem like it quenches your thirst during summer. But carbonated drinks are highly processed and contain high sugar and no nutrient value. Experts say switching to naturally available drinks for summer like mango drinks, lemonade and tender coconut water is far better than carbonated drinks. It boosts your energy level and make you active and productive during summer.The summer lasts only for a couple of months in any demographic region, but our habit is to pull out that carbonated drink from the refrigerator. It becomes a habit and individuals end up consuming a lot of artificial sugars during the summer, says Dr Kavya Kadapi, consultant physician at Yukti Ayurveda Clinic, Bengaluru.",
            "comments": [{ "userCommentId": "0001", "comment": "very nice post" }]
        },
        {
            "userpostInfo": { "userId": "002", userName: "John Doe", "userEmail": "johndoe@gmail.com" },
            "postId":2,
            "headline": "14 Ways Json Can Improve Your SEO",
            "image": "http://example.com/image.jpg",
            "Author": "John Doe",
            "genre": "search engine optimization",
            "datePublished": "2015-09-20",
            "description": "Grabbing a quick cola or a chilled drink from the refrigerator might seem like it quenches your thirst during summer. But carbonated drinks are highly processed and contain high sugar and no nutrient value. Experts say switching to naturally available drinks for summer like mango drinks, lemonade and tender coconut water is far better than carbonated drinks. It boosts your energy level and make you active and productive during summer.The summer lasts only for a couple of months in any demographic region, but our habit is to pull out that carbonated drink from the refrigerator. It becomes a habit and individuals end up consuming a lot of artificial sugars during the summer, says Dr Kavya Kadapi, consultant physician at Yukti Ayurveda Clinic, Bengaluru.",
            "comments": [{ "userCommentId": "0001", "comment": "very nice post" }]
        },
        {
            "userpostInfo": { "userId": "003", userName: "John Doe", "userEmail": "johndoe@gmail.com" },
            "postId":3,
            "headline": "14 Ways Json Can Improve Your SEO",
            "image": "http://example.com/image.jpg",
            "Author": "John Doe",
            "genre": "search engine optimization",
            "datePublished": "2015-09-20",
            "description": "Grabbing a quick cola or a chilled drink from the refrigerator might seem like it quenches your thirst during summer. But carbonated drinks are highly processed and contain high sugar and no nutrient value. Experts say switching to naturally available drinks for summer like mango drinks, lemonade and tender coconut water is far better than carbonated drinks. It boosts your energy level and make you active and productive during summer.The summer lasts only for a couple of months in any demographic region, but our habit is to pull out that carbonated drink from the refrigerator. It becomes a habit and individuals end up consuming a lot of artificial sugars during the summer, says Dr Kavya Kadapi, consultant physician at Yukti Ayurveda Clinic, Bengaluru.",
            "comments": [{ "userCommentId": "0001", "comment": "very nice post" }]
        },
        {
            "userpostInfo": { "userId": "004", userName: "John Doe", "userEmail": "johndoe@gmail.com" },
            "postId":4,
            "headline": "14 Ways Json Can Improve Your SEO",
            "image": "http://example.com/image.jpg",
            "Author": "John Doe",
            "genre": "search engine optimization",
            "datePublished": "2015-09-20",
            "description": "Grabbing a quick cola or a chilled drink from the refrigerator might seem like it quenches your thirst during summer. But carbonated drinks are highly processed and contain high sugar and no nutrient value. Experts say switching to naturally available drinks for summer like mango drinks, lemonade and tender coconut water is far better than carbonated drinks. It boosts your energy level and make you active and productive during summer.The summer lasts only for a couple of months in any demographic region, but our habit is to pull out that carbonated drink from the refrigerator. It becomes a habit and individuals end up consuming a lot of artificial sugars during the summer, says Dr Kavya Kadapi, consultant physician at Yukti Ayurveda Clinic, Bengaluru.",
            "comments": [{ "userCommentId": "0001", "comment": "very nice post" }]
        },
        {
            "userpostInfo": { "userId": "005", userName: "John Doe", "userEmail": "johndoe@gmail.com" },
            "postId":5,
            "headline": "14 Ways Json Can Improve Your SEO",
            "image": "http://example.com/image.jpg",
            "Author": "John Doe",
            "genre": "search engine optimization",
            "datePublished": "2015-09-20",
            "description": "Grabbing a quick cola or a chilled drink from the refrigerator might seem like it quenches your thirst during summer. But carbonated drinks are highly processed and contain high sugar and no nutrient value. Experts say switching to naturally available drinks for summer like mango drinks, lemonade and tender coconut water is far better than carbonated drinks. It boosts your energy level and make you active and productive during summer.The summer lasts only for a couple of months in any demographic region, but our habit is to pull out that carbonated drink from the refrigerator. It becomes a habit and individuals end up consuming a lot of artificial sugars during the summer, says Dr Kavya Kadapi, consultant physician at Yukti Ayurveda Clinic, Bengaluru.",
            "comments": [{ "userCommentId": "0001", "comment": "very nice post" }]
        }
    ]

    return (
        <>
            <h1 className="text-center text-4xl font-bold mt-24" style={{color:"#254747"}}>Welcome to <span className="text-blue-500">blog</span> page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-12 mb-24 ">
               {
                blogs.map((blog)=><BlogsCards
                key={blog.postId}
                blog={blog}
                ></BlogsCards>)
            } 
            </div>
            
        </>
    );
};

export default blog;