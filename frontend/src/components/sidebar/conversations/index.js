import React from "react";
import Conversation from "../conversation";

export default function Conversations() {
  return (
    <div className="py-3 flex flex-col overflow-auto">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
}
