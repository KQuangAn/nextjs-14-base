import { NextResponse } from "next/server";

type apiRespone = {
  deepai: {
    status: string;
    items: [
      {
        image: string;
        image_resource_url: string;
      }
    ];
    cost: 0.05;
  };
};
export async function POST(request: Request) {
  const req = await request.json();
  const response = await fetch(
    "https://api.deepai.org/api/anime-portrait-generator",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.NEXT_PUBLIC_DEEPAI,
      },
      body: JSON.stringify({
        text: req.text,
      }),
    }
  );
  const data = await response.json();
  console.log(data);
  return Response.json({ data });
}
