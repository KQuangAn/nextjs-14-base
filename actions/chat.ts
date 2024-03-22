"use server";

import { db } from "@/lib/db";

export const sendMessage = async (roomId: string, formData: FormData) => {
  const text = formData.get("text") as string;
  console.log(roomId);
  await db.message.create({
    data: {
      text,
      chatRoomId: roomId,
    },
  });
  return { success: "Message sent!" };
};
