import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

export default function SignUp() {
  return (
    <div>
      <Box style={{ height: "100vh" }}>
        <Typography
          variant="h2"
          textAlign={"center"}
          margin={"20px"}
          gutterBottom
        >
          Register
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
            label="Username"
            required
            variant="outlined"
          />
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
          <TextField
            sx={{ width: "40ch", margin: "10px" }}
            label="Contact"
            required
            variant="outlined"
          />
          <Button variant="contained">Sign Up</Button>
        </Box>
      </Box>
    </div>
  );
}
