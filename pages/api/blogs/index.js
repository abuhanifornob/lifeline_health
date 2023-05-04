

import Blogmodel from "@/models/Blogmodel";
import connectDb from "@/utils/connectDb";
import nc from "next-connect";
connectDb();

const handler = nc()

  .get(async(req, res) => {
    try {
        const blogs = await Blogmodel.find({}) ;
        res.send(blogs)
    } catch (error) {
        
    }
  })
  .post(async(req, res) => {
    const {userpostInfo,postId,headline,image,Author,genre,datePublished,description,comments}=req.body;
    const newBlog=new Blogmodel({userpostInfo,postId,headline,image,Author,genre,datePublished,description,comments})
    try {
        await newBlog.save();
        res.send("new blog created")
    } catch (error) {
        console.log(error)
    }
  });

export default handler;