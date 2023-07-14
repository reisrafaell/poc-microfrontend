import React, { useState } from "react";
import Parcel from "single-spa-react/parcel";
//@ts-ignore
import { Button, Input } from '@poc/util-ui'

import * as S from "./styles";
import { HomeProps } from "./types";

const Home = ({ children }: HomeProps) => {
  const [data, setData] = useState("");

  const parcelConfig = async () => {
    const module = await System.import("@poc/footer");
    return {
      bootstrap: module.bootstrap,
      mount: module.mount,
      unmount: module.unmount,
    };
  };
  const parcelConfigHeader = async () => {
    const module = await System.import("@new-header");
    return {
      bootstrap: module.bootstrap,
      mount: module.mount,
      unmount: module.unmount,
    };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatchEvent(
      new CustomEvent("homeData", {
        detail: {
          id: 1,
          describe: data,
          test: "teste",
        },
      })
    );
  };
  return (
    <S.Container>
      {children}
      <h1>Home</h1>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="input-text">Description:</label>
        <input id="input-text" onChange={(e: any) => setData(e.target.value)} />
        <button>Ok</button>
        <Button>teste</Button>
      </form>
        <Input/>
    </S.Container>
  );
};

export default Home;
