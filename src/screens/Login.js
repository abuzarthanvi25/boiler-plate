import { TextField, Box, Typography, Button } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <div>
      <Box style={{ height: "100vh" }}>
        <Typography
          variant="h2"
          textAlign={"center"}
          margin={"20px"}
          gutterBottom
        >
          Login
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "40ch", margin: "10px" }}
            label="Email"
            type={"email"}
            required
            variant="outlined"
          />
          <TextField
            sx={{ width: "40ch", margin: "10px" }}
            label="Password"
            type={"password"}
            required
            variant="outlined"
          />
          <Button variant="contained">Login</Button>
        </Box>
      </Box>
    </div>
  );
}
