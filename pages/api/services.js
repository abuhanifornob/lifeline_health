import * as fs from 'fs'
export default function hendelr(req, res){
    fs.readdir("ServiceData",(err,data)=>{
        console.log(data);
        res.status(200).json(data)
    })
}