import React from "react";
import * as S from "./styles";
import { AboutProps } from "./types";

const About = ({ children }: AboutProps) => {
  return (
    <S.Container>
      {children}
      <h1>About</h1>
    </S.Container>
  );
};

export default About;
