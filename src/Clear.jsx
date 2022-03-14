import React from "react";
import Button from '@mui/material/Button';

export const Clear = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <Button variant="outlined" onClick={refreshPage}>Refresh</Button>
    </div>
  );
};
