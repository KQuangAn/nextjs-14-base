"use client";
import { sendMessage } from "@/actions/chat";
import { Input } from "@/components/ui/input";
import React from "react";

interface InputMessageProps {
  roomId: string;
}

const InputMessage = ({ roomId }: InputMessageProps) => {
  let input = "";
  const action = sendMessage.bind(null, roomId);
  return (
    <>
      <form action={action}>
        <Input onChange={(e) => (input = e.target.value)} name="text" />
        <button className="w-12 h-12 bg-red-300" />
      </form>
    </>
  );
};

export default InputMessage;
