

import connectDb from "@/utils/connectDb";
import nextConnect from "next-connect";
import cors from 'cors'
import Bookingmodel from "@/models/Bookingmodel";
connectDb();

const handler = nextConnect()
handler.use(cors())

  .get(async(req, res) => {
    try {
        const bookings = await Bookingmodel.find({}) ;
        res.send(bookings)
        // res.status(200).json(JSON.parse(blogs))
    } catch (error) {
        console.log(error);
    }
  })
  .post(async(req, res) => {
    const bookings =req.body;
    // console.log(doctor);
    const newBooking= new Bookingmodel(bookings)
    // console.log('req',newDoctor)
    try {
        await newBooking.save();
        res.send(newBooking)
    } catch (error) {
        console.log(error)
        res.send("new booking ")
    }
  });

export default handler;