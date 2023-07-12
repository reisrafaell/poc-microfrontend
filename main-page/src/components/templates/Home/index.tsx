import React from "react";
import Parcel from "single-spa-react/parcel";

import * as S from "./styles";
import { HomeProps } from "./types";

const Home = ({ children }: HomeProps) => {
  const parcelConfig = async () => {
    const module = await System.import("@poc/footer")
    return {
      bootstrap: module.bootstrap,
      mount: module.mount,
      unmount: module.unmount,
    };
  };
  return (
    <S.Container>
      {children}
      <h1>Home</h1>
      <Parcel config={parcelConfig} />
    </S.Container>
  );
};

export default Home;
