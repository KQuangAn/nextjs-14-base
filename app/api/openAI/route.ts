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
  const response = await fetch("https://api.edenai.run/v2/image/generation", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_EDEN_AI}`,
    },
    body: JSON.stringify({
      text: req.text,
      response_as_dict: true,
      attributes_as_list: false,
      show_original_response: false,
      resolution: "512x512",
      num_images: 1,
      providers: "deepai",
    }),
  });
  const data = await response.json();
  console.log(data);
  return Response.json({ data });
}
