"use client";

import { useState, useEffect } from "react";
import { LoginButton } from "@/components/auth/login-button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [input, setInput] = useState<string>("search");
  const [loading, setLoading] = useState<boolean>(false);

  async function streamToJson(
    stream: ReadableStream<Uint8Array>
  ): Promise<unknown> {
    return await new Response(stream).json();
  }

  const getImage = async () => {
    if (input === "") {
      return 0;
    }
    setLoading(true);

    const res = await fetch("api/openAI", {
      method: "POST",
      body: JSON.stringify({ text: input }),
    });
    console.log(await res.json());

    const data = await streamToJson(res.body);
    console.log(data);
    console.log(data?.data.deepai?.items[0]?.image_resource_url);
    setImageUrl(data?.data.deepai?.items[0]?.image_resource_url);
    setLoading(false);
  };

  // let options = {
  //   root: document.querySelector("#scrollArea"),
  //   rootMargin: "0px",
  //   threshold: 1.0,
  //   //A threshold of 1.0 means that when 100% of the target is visible
  //   // within the element specified by the root option, the callback is invoked.
  // };
  // let observer = new IntersectionObserver(() => console.log("cr"), options);

  // let observers: { observe: (arg0: any) => void }[] = [];

  // const startup = () => {
  //   let wrapper = document.querySelector(".wrapper");

  //   // Options for the observers

  //   let observerOptions = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: [],
  //   };

  //   // An array of threshold sets for each of the boxes. The
  //   // first box's thresholds are set programmatically
  //   // since there will be so many of them (for each percentage
  //   // point).

  //   let thresholdSets = [
  //     [],
  //     [0.5],
  //     [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
  //     [0, 0.25, 0.5, 0.75, 1.0],
  //   ];

  //   for (let i = 0; i <= 1.0; i += 0.01) {
  //     thresholdSets[0].push(i);
  //   }

  //   // Add each box, creating a new observer for each

  //   for (let i = 0; i < 4; i++) {
  //     let template = document
  //       .querySelector("#boxTemplate")
  //       .content.cloneNode(true);
  //     let boxID = `box${i + 1}`;
  //     template.querySelector(".sampleBox").id = boxID;
  //     wrapper.appendChild(document.importNode(template, true));

  //     // Set up the observer for this box

  //     observerOptions.threshold = thresholdSets[i];
  //     observers[i] = new IntersectionObserver(
  //       intersectionCallback,
  //       observerOptions
  //     );
  //     observers[i].observe(document.querySelector(`#${boxID}`));
  //   }

  //   // Scroll to the starting position

  //   document.scrollingElement.scrollTop =
  //     wrapper.firstElementChild.getBoundingClientRect().top + window.scrollY;
  //   document.scrollingElement.scrollLeft = 750;
  // };

  // const intersectionCallback = (entries) => {
  //   entries.forEach((entry) => {
  //     let box = entry.target;
  //     let visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;

  //     box.querySelector(".topLeft").innerHTML = visiblePct;
  //     box.querySelector(".topRight").innerHTML = visiblePct;
  //     box.querySelector(".bottomLeft").innerHTML = visiblePct;
  //     box.querySelector(".bottomRight").innerHTML = visiblePct;
  //   });
  // };

  // startup();

  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <div>
          <LoginButton asChild>
            <button className="bg-pink-200" />
          </LoginButton>
        </div>
      </div>

      <template id="boxTemplate">
        <div className="sampleBox">
          <div className="label topLeft"></div>
          <div className="label topRight"></div>
          <div className="label bottomLeft"></div>
          <div className="label bottomRight"></div>
        </div>
      </template>

      <main>
        <div className="contents">
          <div className="wrapper"></div>
        </div>
      </main>
    </main>
  );
}
