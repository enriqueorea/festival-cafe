import React, { FC } from "react";

type IProps = {
  title: string;
};

const Header: FC<IProps> = ({ title }) => {
  return (
    <h2 className="font-semibold text-white text-[52px] border-b border-light-brown">
      {title}
    </h2>
  );
};

export default Header;
