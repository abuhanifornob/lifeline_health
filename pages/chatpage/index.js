import {  useState } from "react";
import ChatsPage from "@/components/ChatHome/ChatPage";
import AuthPage from "@/components/ChatHome/AuthPage";
import withAuth from "../withAuth/withAuth";

const MainPage = () => {
const [user, setUser] = useState(undefined);

if (!user) {
  return <AuthPage onAuth={(user) => setUser(user)} />;
} else {
  return <ChatsPage user={user} />;
}       
     
}

export default withAuth(MainPage);