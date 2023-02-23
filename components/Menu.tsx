import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Menu() {
  return (
    <div className="flex justify-between py-5">
      <Image src={"/assets/img/logo-vote-app.png"} alt={`Vote-App`} width={50} height={50} />
      <Button text="Login" />
    </div>
  );
}
