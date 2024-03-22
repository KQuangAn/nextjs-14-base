import { Post } from "@/app/form/type";

export async function GET() {
  const res = await fetch("https://65efcb7fead08fa78a50f6c3.mockapi.io/posts");
  const data = (await res.json()) as Post[];

  return Response.json({ data });
}

export async function POST(request: Request) {
  const { formData } = await request.json();

  const res = await fetch("https://65efcb7fead08fa78a50f6c3.mockapi.io/posts", {
    method: "POST",
    body: JSON.stringify({
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await res.json();

  return data;
}
