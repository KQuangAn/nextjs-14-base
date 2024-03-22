"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./type";

export async function addPost(id: number, formData: FormData) {
  
  await fetch("https://65efcb7fead08fa78a50f6c3.mockapi.io/posts", {
    method: "POST",
    body: JSON.stringify({
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  revalidatePath(`/form/${id}/edit`);
}

export async function updatePost(id: number, formData: FormData) {
  await fetch(`https://65efcb7fead08fa78a50f6c3.mockapi.io/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  revalidatePath(`/form/${id}/edit`);
}

export async function getAllPost() {
  const res = await fetch("https://65efcb7fead08fa78a50f6c3.mockapi.io/posts");
  const data = (await res.json()) as Post[];
  revalidatePath("/form");
  return data;
}

export async function getPost(id: number) {
  const res = await fetch(
    `https://65efcb7fead08fa78a50f6c3.mockapi.io/posts/${id}`
  );
  const data = (await res.json()) as Post;
  revalidatePath(`/form/${id}`);

  return data;
}
