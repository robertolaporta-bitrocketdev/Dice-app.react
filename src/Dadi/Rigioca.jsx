import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Dadi } from "./Dadi";

export const Rigioca = ({ dado1, dado2 }) => {
  const [buttonState, setButtonState] = useState(true);
  const [isGameShowed, setIsGameShowed] = useState(false);
  const [esito, setEsito] = useState("Gioco finito!");
  useEffect(() => {
    if (dado1 === dado2) {
      setButtonState(false);
      setEsito("Parità!");
    }
  }, []);

  return (
    <>
      <p>{esito}</p>
      <Button
        variant="contained"
        disabled={buttonState}
        onClick={() => setIsGameShowed(true)}
      >
        Rigioca
      </Button>

      {isGameShowed && <Dadi />}
    </>
  );
};
