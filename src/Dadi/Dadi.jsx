import React from "react";
import { Rigioca } from "./Rigioca";
import { Lancio } from "./Lancio";
import { Inizio } from "./Inizio";

export const Dadi = () => {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  return (
    <>
      <Lancio dado1={dado1} dado2={dado2} />
      <Rigioca dado1={dado1} dado2={dado2} />
    </>
  );
};
