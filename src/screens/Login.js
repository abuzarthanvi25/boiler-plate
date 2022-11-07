import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../config/firebasemethods";
import SignUp from "../screens/SignUp";
import Link from "@mui/material/Link";
import EZ_Input from "../components/EZ_Input";
import React from "react";
import "../App.css";
import LockOpenIcon from "@mui/icons-material/LockOpen";

let btnStyle = {
  padding: "10px 100px",
  margin: "15px",
};

function Login() {
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  let login = () => {
    setLoading(true);
    loginUser({
      email,
      password,
    })
      .then((success) => {
        console.log(success);
        setLoading(false);
        alert(`The admin ${success.userName} has been successfully signed in`);
        navigate("/dashboard/students", {
          state: success,
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError(err);
      });
  };
  return (
    <div>
      <Box className="parentMain">
        <Box>
          <LockOpenIcon color="secondary" fontSize="large" />
        </Box>
        <Box className="parent">
          <Typography
            sx={{ margin: "0px 0px 20px 0px" }}
            variant="h4"
            textAlign="center"
          >
            ADMIN LOGIN
          </Typography>
        </Box>
        <Box>
          <EZ_Input
            variant="standard"
            fullWidth
            margin="10px 0px "
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <EZ_Input
            fullWidth={true}
            margin="10px 0px "
            variant="standard"
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <Box className="parent">
          <Button sx={btnStyle} onClick={login} variant="contained">
            {isLoading ? <CircularProgress color="warning" /> : "LOGIN"}
          </Button>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="error">
            {error.toString()}
          </Typography>
        </Box>
        <Link
          underline="hover"
          onClick={() => {
            navigate("/signup");
          }}
          variant="body2"
        >
          Don't have an account? Register
        </Link>
      </Box>
    </div>
  );
}

export default Login;
