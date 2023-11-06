import React from "react";
import "./Chats.css";
import {
  MultiChatSocket,
  useMultiChatLogic,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import { ChatEngine } from 'react-chat-engine';

export default function Chats(props) {
  const projectId = "3909b22d-70f4-4e25-af34-cedf6bc65542";
  const username = "Veloxal";
  const secret = "Veloxal";

  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <div className="background">
    <MultiChatSocket
    
    projectId={chatProps.projectId}
    username={chatProps.username}
    secret={chatProps.secret}
    onConnect={chatProps.onConnect}
    onAuthFail={chatProps.onAuthFail}
 
  />
      <ChatEngine
        projectID={projectId}
        userName={username}
        userSecret={secret}
     
      />



    </div>
  );
}
