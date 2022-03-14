import React, { useState } from "react";
import { Dadi } from "./Dadi";
import Button from "@mui/material/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export const Inizio = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setIsGameStarted(true)}>
        <RocketLaunchIcon /> Start
      </Button>
      {isGameStarted && <Dadi />}
    </>
  );
};
