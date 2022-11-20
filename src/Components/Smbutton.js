import { Button } from "@mui/material";
import React from "react";

function Smbutton(props) {
  const { label, variant, onClick, color, startIcon, endIcon, disabled } =
    props;
  return (
    <>
      <Button
        variant={"contained"}
        color={color}
        onClick={onClick}
        disabled={disabled}
        fullWidth={true}
        startIcon={startIcon}
        endIcon={endIcon}
        sx={{ p: 1.5 }}
      >
        {label}
      </Button>
    </>
  );
}

export default Smbutton;
