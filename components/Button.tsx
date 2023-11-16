import { ButtonProps } from "@/Types";
import Image from "next/image";
import React from "react";

const Button = ({ text, styles, icon }: ButtonProps) => {
  return (
    <button type="button" className={styles}>
      {text}
      {icon && (
        <Image
          src={icon}
          width={25}
          height={25}
          alt="arrow right"
          className="pt-2"
        />
      )}
    </button>
  );
};

export default Button;
