import React from "react";

interface Props {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
}
export default function Button(props: Props) {
  return (
    <button
      className={`bg-black hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded border-2 border-black ${
        props.type === "secondary" && "bg-white hover:bg-black hover:text-white text-black border-2 border-black font-bold py-2 px-4 rounded"
      }`}>
      {props.text}
    </button>
  );
}
