import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function EZ_Dropdown(props) {
  const { label, value, onChange, data, displayField, valueField, disabled } =
    props;
  return (
    <>
      <FormControl style={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          variant="standard"
          fullWidth
          disabled={disabled}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          onChange={onChange}
        >
          {data && data.length > 0
            ? data.map((x, index) => (
                <MenuItem key={index} value={x[valueField ? valueField : "id"]}>
                  {x[displayField ? displayField : "displayName"]}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </>
  );
}
