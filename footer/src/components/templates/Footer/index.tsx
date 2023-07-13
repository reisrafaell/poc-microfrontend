import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FooterProps } from "./types";

const Footer = ({ children }: FooterProps) => {
  const [data, setData] = useState("");

  window.addEventListener("homeData", (event: any) => {
    setData(event.detail.describe);
    console.log(event);
  });

  return (
    <S.FooterContainer>
      {children}
      <h1>Footer: {data} </h1>
    </S.FooterContainer>
  );
};

export default Footer;
