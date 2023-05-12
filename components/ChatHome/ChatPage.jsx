import Head from "next/head";
import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  return (
<>
<Head> <title>Chat page</title> </Head>
<div style={{backgroundColor:"#1b2938"}} className="h-screen">
        <PrettyChatWindow
        projectId={process.env.NEXT_PUBLIC_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
  </div>
</>
  );
};

export default ChatsPage;