import React from "react";
import "./htext.scss";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return <h1 className="htext">{children}</h1>;
};

export default HText;
