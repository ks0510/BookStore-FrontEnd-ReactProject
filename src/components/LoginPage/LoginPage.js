import AppBars from "../AppBar/AppBars";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import userService from "../../services/user-service";



const defaultTheme = createTheme();

export default function LoginPage() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const changeValue = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    userService.userLogin(loginData.email, loginData.password).then((response) => {
      localStorage.setItem('token', response.data);
      console.log(localStorage.getItem('token'));
      window.location = "bookPage";
    })

  };



  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                value={loginData.email}
                onChange={(e) => changeValue(e)}
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
              />
              <TextField
                value={loginData.password}
                onChange={(e) => changeValue(e)}
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="registration" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
