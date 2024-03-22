import React from "react";
import { db } from "@/lib/db";
import InputMessage from "./_components/input";


interface pageProps {
  params: {
    roomId: string;
  };
}

const page = async ({ params }: pageProps) => {
  const { roomId } = params;
  console.log(roomId);

  const existingMessages = await db.message.findMany({
    where: {
      chatRoomId: roomId,
    },
  });
  // destructed created and updated
  const serializedMessages = existingMessages.map((message) => ({
    text: message.text,
    id: message.id,
  }));

  return (
    <div className="flex flex-col m-5 *:">
      <div>
        {serializedMessages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
        <InputMessage roomId={roomId} />
      </div>
    </div>
  );
};

export default page;
