import { Button } from "@mui/material";
import React from "react";

export default function EZ_Button(props) {
  const {
    label,
    onClick,
    startIcon,
    endIcon,
    color,
    padding,
    margin,
    fullWidth,
  } = props;
  // -- TYPE CHECK
  // label: <String>
  // startIcon: <Icon>
  // endIcon: <Icon>
  // color: <String>
  // padding: <String>
  // margin: <String>
  // onClick: <function>

  return (
    <>
      <Button
        fullWidth={fullWidth}
        onClick={onClick}
        endIcon={endIcon}
        startIcon={startIcon}
        color={color}
        sx={{ padding: { padding }, margin: { margin } }}
        variant="contained"
      >
        {label}
      </Button>
    </>
  );
}
