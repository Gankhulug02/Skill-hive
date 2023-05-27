import React, { useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const ChatContext = createContext({});

const ChatProvider = ({ children }: any) => {
  const [chatArr, setChatArr] = useState([
    {
      message: [
        "Where are you?",
        "Which street lah, bus stop lah, or send me location also can",
      ],
      own: false,
    },
    {
      message: ["I`m in Chinatown"],
      own: true,
    },
    {
      message: ["Which bus?"],
      own: false,
    },
    {
      message: ["Choose"],
      own: true,
    },
    {
      message: ["Now now now"],
      own: false,
    },
    {
      message: ["Missed The Bus"],
      own: true,
    },
    {
      message: ["You just missed my bus leh"],
      own: false,
    },
    {
      message: ["So Sad", "dararararararara"],
      own: true,
    },

    {
      message: ["I go Liao, Check next bus"],
      own: false,
    },
    {
      message: ["So sad"],
      own: true,
    },
  ]);
  const [grpChat, setGrpChat] = useState({
    grpId: "1",
    messages: [
      { sender: "1", message: "hi1" },
      { sender: "2", message: "hi2" },
      { sender: "3", message: "hi3" },
      { sender: "5", message: "hi5" },
      { sender: "4", message: "hi4" },
    ],
  });

  const [textValue, setTextValue] = useState("");
  const [textValueB, setTextValueB] = useState("");

  const send = ({ own }: any) => {
    if (own) {
      setChatArr([...chatArr, { message: [textValue], own: own }]);
      setTextValue("");
    } else {
      setChatArr([...chatArr, { message: [textValueB], own: own }]);
      setTextValueB("");
    }
  };
  return (
    <ChatContext.Provider
      value={{
        chatArr,
        setChatArr,
        send,
        textValue,
        setTextValue,
        textValueB,
        setTextValueB,
        grpChat,
        setGrpChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
