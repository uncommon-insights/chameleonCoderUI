import React, { useState, useEffect } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import PostSet from "./PostSet";
import { Url } from "./utils";

const defaultChatHistory = [{message: "type exit to move on to the next convo \n what would you like to build?", direction: "incoming"}];
const myTask = 'planning';

async function getRecords(url, bod) {
  var body_string = JSON.stringify(bod);

  const response = await fetch(url, {
      method: "POST",
      // mode: 'cors',
      body: body_string,
      headers: {"Content-type": "application/json"},
    });

  if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
  }
  return response.json();
}

function Chat() {
  const [chatHistory, setChatHistory] = useState(defaultChatHistory);
  const [tIndicator, setTIndicator] = useState(false);

  function chat_send(msg) {
    console.log(msg);
    setTIndicator(true);
    setChatHistory(oldHistory => [...oldHistory, {message: msg, direction: "outgoing"}]);
    getRecords(Url, {task: myTask, message: msg}).then(resp => {
      setTIndicator(false);
      setChatHistory(oldHistory => [...oldHistory, {message: resp['message'], direction: "incoming"}]);
    });

  }


  return(
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList typingIndicator={tIndicator ? <TypingIndicator content="Chameleon is typing" /> : undefined}>
            {chatHistory.map(item => <Message model={item}/>)}
          </MessageList>
          <MessageInput onSend={(sentMsg) => chat_send(sentMsg)} placeholder="Type message here" attachButton={false}/>
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default Chat;