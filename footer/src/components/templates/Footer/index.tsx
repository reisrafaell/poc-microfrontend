import React from "react";
import * as S from "./styles";
import { FooterProps } from "./types";

const Footer = ({ children }: FooterProps) => {
  return (
    <S.FooterContainer>
      {children}
      <h1>Footer</h1>
    </S.FooterContainer>
  );
};

export default Footer;
