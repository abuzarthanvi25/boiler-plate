import React from "react";
import { TextField } from "@mui/material";

export default function EZ_Input(props) {
  const {
    label,
    onChange,
    value,
    type,
    disabled,
    required,
    fullWidth,
    InputProps,
    margin,
  } = props;

  // -- TYPE CHECK
  // fullwidth: BOOLEAN
  // required: BOOLEAN
  // onChange: function

  return (
    <>
      <TextField
        label={label}
        sx={{ margin: { margin } }}
        fullWidth
        InputProps={InputProps}
        variant="standard"
        required={required}
        onChange={onChange}
        value={value}
        type={type}
        disabled={disabled}
      />
    </>
  );
}
