import React from "react";
import Button from "../atoms/Button";
import ButtonToggleMode from "../atoms/ButtonToggleMode";

function ButtonsContact() {
  return (
    <div className="flex items-center justify-between pt-10">
      <Button text={"Main"} link="/" />
      <Button text={"Contact"} link="/Contact" />
      <ButtonToggleMode />
    </div>
  );
}

export default ButtonsContact;
