import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const { formData, id } = await request.json();

  const res = await fetch(
    `https://65efcb7fead08fa78a50f6c3.mockapi.io/posts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        title: formData.get("title") as string,
        body: formData.get("body") as string,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}

export async function GET(id: number) {
  const res = await fetch(
    `https://65efcb7fead08fa78a50f6c3.mockapi.io/posts/${id}`
  );

  const data = await res.json();

  return NextResponse.json(data);
}
