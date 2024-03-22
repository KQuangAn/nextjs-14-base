"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatRoom = () => {
  let roomId = "";
  const router = useRouter();

  const createChatRoom = async () => {
    const res = await fetch("api/chat/create");
    const roomId: string = await res.text();
    router.push(`/room/${roomId}`);
  };
  const joinRoom = (roomId: string) => {
    router.push(`/room/${roomId}`);
  };
  return (
    <div className="flex flex-col m-5 *:">
      <Button onClick={() => createChatRoom()}>Create Room</Button>
      <div>
        <Input
          onChange={({ target }) => (roomId = target.value)}
          className="border border-red-100 p-5 "
          type="text"
        />
      </div>
      <Button onClick={() => joinRoom(roomId)}>Join Room</Button>
    </div>
  );
};

export default ChatRoom;
