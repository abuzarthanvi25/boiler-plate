import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUpUser } from "../config/firebasemethods";
import Link from "@mui/material/Link";
import React from "react";
import "../App.css";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import EZ_Input from "../components/EZ_Input";

let btnStyle = {
  padding: "10px 100px",
  margin: "15px",
};

function SignUp() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let signUp = () => {
    setLoading(true);
    signUpUser({
      email,
      password,
      userName,
      contact,
    })
      .then((success) => {
        setLoading(false);
        console.log(success);
        alert(`Admin has been successfully registered`);
        navigate("/login");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError(error);
      });
  };

  return (
    <div>
      <Box className="parentMain">
        <Box>
          <HowToRegIcon color="secondary" fontSize="large" />
        </Box>
        <Box className="parent">
          <Typography
            sx={{ margin: "0px 0px 20px 0px" }}
            variant="h4"
            textAlign="center"
          >
            Admin Registration
          </Typography>
        </Box>
        <Box>
          <EZ_Input
            variant="standard"
            fullWidth={true}
            margin="10px 0px "
            label="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <EZ_Input
            variant="standard"
            fullWidth={true}
            margin="10px 0px "
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <EZ_Input
            variant="standard"
            fullWidth={true}
            margin="10px 0px "
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <EZ_Input
            variant="standard"
            fullWidth={true}
            margin="10px 0px "
            label="Contact"
            onChange={(e) => setContact(e.target.value)}
          />
        </Box>

        <Box className="parent">
          <Button sx={btnStyle} onClick={signUp} variant="contained">
            {isLoading ? <CircularProgress color="warning" /> : "SIGN UP"}
          </Button>
        </Box>

        <Box>
          <Typography variant="subtitle2" color="error">
            {error.toString()}
          </Typography>
        </Box>
        <Link
          onClick={() => {
            navigate("/login");
          }}
          underline="hover"
          variant="body2"
        >
          Already have an account? Sign In
        </Link>
      </Box>
    </div>
  );
}

export default SignUp;
