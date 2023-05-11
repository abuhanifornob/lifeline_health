import {  useState } from "react";
import ChatsPage from "./ChatPage";
import AuthPage from "./AuthPage";

const MainPage = () => {
const [user, setUser] = useState(undefined);

if (!user) {
  return <AuthPage onAuth={(user) => setUser(user)} />;
} else {
  return <ChatsPage user={user} />;
}       
     
}

export default MainPage;