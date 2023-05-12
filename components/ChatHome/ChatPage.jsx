import Head from "next/head";
import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  return (
<>
<Head> <title>Chat page</title> </Head>
<div style={{backgroundColor:"#1b2938"}} className="h-screen" data-aos="zoom-in-up"
            data-aos-offset="500">
        <PrettyChatWindow
        projectId={"a2548ef5-a2c5-49ff-97fa-4dabf2aba40b"}
        username={props.user.username}
        secret={props.user.secret}
      />
  </div>
</>
  );
};

export default ChatsPage;