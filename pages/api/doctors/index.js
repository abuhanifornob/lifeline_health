
import DoctorsModel from "@/models/DoctorsModel";
import connectDb from "@/utils/connectDb";
import nextConnect from "next-connect";
connectDb();

const handler = nextConnect()

  .get(async(req, res) => {
    try {
        const doctor = await DoctorsModel.find({}) ;
        res.send(doctor)
        // res.status(200).json(JSON.parse(blogs))
    } catch (error) {
        
    }
  })
  .post(async(req, res) => {
    const {name,email,timeSlot,imgUrl,phone,studyingInstitute,degree,specialization,serviceDatails,workplace,about,experience,fees}=req.body;
    const newDoctor= new DoctorsModel({name,email,timeSlot,imgUrl,phone,studyingInstitute,degree,specialization,serviceDatails,workplace,about,experience,fees})
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