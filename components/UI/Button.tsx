import React, { FC } from "react";

type IProps = {
  title: string;
};

const Button: FC<IProps> = ({ title }) => {
  return (
    <button
      className="border border-light-brown text-white px-10 py-3 text-3xl font-semibold min-w-[325px]
    hover:bg-light-brown hover:text-dark-purple transition duration-300 ease-in-out
    "
    >
      {title}
    </button>
  );
};

export default Button;
