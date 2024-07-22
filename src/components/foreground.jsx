import React, { useRef } from "react";
import Card from "./card";

function foreground() {

    const ref = useRef(null);

  const data = [
    {
      desc: "This is card number 1 which shows green colour and download sign",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", Color: "bg-green-600" },
    },
    {
      desc: "This is card number 1 which shows blue colour and cross sign",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", Color: "bg-blue-500" },
    },
    {
      desc: "This is card number 1 which shows no colour and download sign",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", Color: "bg-green-600" },
    },
  ];

  return (

      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} reference={ref}/>
        ))}
      </div>

  );
}

export default foreground;
