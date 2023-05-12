const axios = require("axios") ;
export default async function handler(req, res) {
      const { username } = req.body;
            // Get or create user on Chat Engine!
            try {
                const r = await axios.put(
                    "https://api.chatengine.io/users/",
                    { username: username, secret: username, first_name: username },
                    { headers: { "Private-Key": "88609bd9-d0dd-43ac-b081-100b98ce5aea" } }
                );
                return res.status(r.status).json(r.data);
            } catch (e) {
                return res.status(e.response.status).json(e.response.data);
            }

}