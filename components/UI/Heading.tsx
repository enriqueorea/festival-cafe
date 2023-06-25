import React, { FC } from "react";

type IProps = {
  title: string;
};

const Heading: FC<IProps> = ({ title }) => {
  return (
    <h2 className="font-semibold text-white text-2xl md:text-5xl lg:text-[52px] border-b border-light-brown">
      {title}
    </h2>
  );
};

export default Heading;
