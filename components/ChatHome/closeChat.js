import axios from "axios";

function closeChat(id){
axios.put(" https://scholar-net-subrota.vercel.app/chat-users", {closeChat:true})
.then(res => res.data)
.catch(error => console.log(error)) ;
}

function getChatUser(email){
     let userInfo = {} ;
    axios.get(` https://scholar-net-subrota.vercel.app/chat-users?email=${email}`)
    .then(res => console.log(res.data))
    .catch(error => console.log(error)) ;    
    console.log(userInfo);
}

export {closeChat , getChatUser} ;