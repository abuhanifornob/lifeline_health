

import expertmodel from "@/models/expertmodel";
import connectDb from "@/utils/connectDb";
import nc from "next-connect";
connectDb();

const handler = nc()

  .get(async(req, res) => {
    try {
        const expert = await expertmodel.find({}) ;
        res.send(expert)
        // res.status(200).json(JSON.parse(blogs))
    } catch (error) {
        
    }
  })
  .post(async(req, res) => {
    const {doctors}=req.body;
    const newExpert=new expertmodel({doctors})
    try {
        await newExpert.save();
        res.send("new expert created")
    } catch (error) {
        console.log(error)
    }
  });

export default handler;