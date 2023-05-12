
import DoctorsModel from "@/models/DoctorsModel";
import connectDb from "@/utils/connectDb";
import nextConnect from "next-connect";
import cors from 'cors'
connectDb();

const handler = nextConnect()
handler.use(cors())

  .get(async(req, res) => {
    try {
        const doctor = await DoctorsModel.find({}) ;
        res.send(doctor)
        // res.status(200).json(JSON.parse(blogs))
    } catch (error) {
        console.log(error);
    }
  })
  .post(async(req, res) => {
    const doctor =req.body;
    console.log(doctor);
    const newDoctor= new DoctorsModel(doctor)
    // console.log('req',newDoctor)
    try {
        await newDoctor.save();
        res.send("new doctor created")
    } catch (error) {
        console.log(error)
        res.send("new doctor ")
    }
  });

export default handler;