

import Usermodel from "@/models/Usermodel";
import connectDb from "@/utils/connectDb";
import nc from "next-connect";
connectDb();

const handler = nc()

  .get(async(req, res) => {
    try {
        const users = await Usermodel.find({}) ;
        res.send(users)
        // res.status(200).json(JSON.parse(blogs))
    } catch (error) {
        
    }
  })
  .post(async(req, res) => {
    const users=req.body;
    const newUsers=new Usermodel(users)
    try {
        await newUsers.save();
        res.send(users)
        console.log("user",users)
    } catch (error) {
        console.log(error)
    }
  });

export default handler;