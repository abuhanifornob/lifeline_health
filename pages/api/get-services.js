//http://localhost:3000/api/get-services?slug=doctor-consultation
import * as fs from 'fs';

export default function handler(req, res) {
  console.log(req.query);
  fs.readFile(`ServiceData/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'No Services' });
    }
    else {
      console.log(data);
      console.log(req.query.slug);
      res.status(200).json(JSON.parse(data));
    }
  });
}
