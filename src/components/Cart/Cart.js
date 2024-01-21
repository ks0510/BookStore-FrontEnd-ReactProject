import AppBars from "../AppBar/AppBars";
import Box from "@mui/material/Box";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import bookImg from "./book.jpg";

export default function Cart() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const config = { headers: { token: "eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6IlBhc3NAMTIzIiwiZW1haWwiOiJzd2FwbmlscEB5YWhvby5jb20ifQ.ZyJTlla8wot9i_fo1bZp3IIjC18ImAicNTKXxqRJm9o" } };
     
    axios
      .get("http://localhost:8080/user/showcart", config)
      .then((response) => {
        setBook(response.data.object.cartBooks);
        console.log("cart data :" + response.data.object.cartBooks);
      })
      .catch((error) => {
        console.log(error.cause);
      });
  }, [book]);

  return (
    <>
      <AppBars />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            // display: "flex",
            border: "solid grey 2px",
            margin: "20px",
            width: "50%",
            height: "auto",
            marginLeft: "12%",
            marginTop: "5%",
          }}
        >
          My Cart
          {book.map((item) => (
            <Card
              sx={{
                margin: "15px",
                width: "95%",
                display: "flex",
                border: "2px solid black",
              }}
            >
              <Box sx={{ border: "2px solid black", width: 150 }}>
                <CardMedia sx={{ height: 140, width: 100 }} image={bookImg} />
              </Box>
              <Box
                sx={{ display: "flex", border: "2px solid black", width: 150 }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.bookName}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    ₹ {item.bookPrice}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "solid grey 2px",
            margin: "20px",
            width: "50%",
            height: "75px",
            marginLeft: "12%",
          }}
        >
          Customer Details
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "solid grey 2px",
            margin: "20px",
            width: "50%",
            height: "75px",
            marginLeft: "12%",
          }}
        >
          Order Summary
        </div>
      </div>
    </>
  );
}
