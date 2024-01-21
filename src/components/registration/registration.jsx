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
import userService from "../../services/user-service";




const defaultTheme = createTheme();

export default function Registration() {

    let initialValue = {
        username: "",
        fullname: "",
        address: "",
        email: "",
        password: ""
    }
    const [formData, setformData] = useState(initialValue);

    const changeValue = (event) => {
        setformData({ ...formData, [event.target.name]: event.target.value })
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        userService.signUp(formData).then((response) => {
            alert(response.data.msg)
            window.location = "login"

        }).catch(error => {
            alert("User Registered already")
        })



    }





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
                            Registration Form
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                value={formData.username}
                                onChange={(e) => changeValue(e)}
                                margin="normal"
                                required
                                id="username"
                                label="User Name"
                                name="username"

                            />
                            <TextField
                                value={formData.fullname}
                                onChange={(e) => changeValue(e)}
                                margin="normal"
                                required
                                id="fullname"
                                label="Full Name"
                                name="fullname"
                            />
                            <TextField
                                value={formData.address}
                                onChange={(e) => changeValue(e)}
                                margin="normal"
                                required
                                id="address"
                                label="Address"
                                name="address"
                            />
                            <TextField
                                value={formData.email}
                                onChange={(e) => changeValue(e)}
                                margin="normal"
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                            />
                            <TextField
                                value={formData.password}
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
                                onSubmit={(e) => handleSubmit(e)}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register
                            </Button>
                            <Grid container>
                                <Grid item sx={{ marginLeft: "auto" }}>
                                    <Link href="login" variant="body2">
                                        {"Already have account? Sign in"}
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
