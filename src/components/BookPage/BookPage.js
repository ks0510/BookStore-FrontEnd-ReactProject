import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AppBars from "../AppBar/AppBars";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { flexbox } from "@mui/system";
import bookImg from "./book.jpg";

export default function BookPage() {
  const [book, setBook] = useState([]);
  const [cartBook, setCartBook] = useState([]);
  // const showBook= ()=>

  useEffect(() => {
    axios
      .get("http://localhost:8080/bookstore/getallbooks")
      .then((response) => {
        setBook(response.data);
        // console.log("check data " + JSON.stringify(book));
        console.log(response)
      })
      .catch((error) => {
        console.log(error.cause);
      });
  }, []);

  const handleCart = (bookName) => {
    console.log("response check " + localStorage.getItem("token"));

    const config = { headers: { token: localStorage.getItem("token") } };

    console.log("book " + bookName);
    axios
      .put(
        "http://localhost:8080/user/addtocart?bookName=" + bookName,
        null,
        config
      )
      .then((response) => {
        setCartBook(response.data.object);
      })
      .catch((error) => {
        console.log(error.cause);
      });
    console.log("cart check :" + cartBook);
  };

  return (
    <>
      <AppBars />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Books</h2>
        <Grid item xs={12}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label">
              Sort by relevance
            </InputLabel>
            <Select
              InputLabel="Sort by relevance"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem>Price: Low to High</MenuItem>
              <MenuItem>Price: High to Low</MenuItem>
              <MenuItem>Newest Arrivals</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* <ImageList cols={4}> */}
        {book.map((item) => (
          <div container spacing={5}>
            <div>
              <Card sx={{ maxWidth: 345 }} style={{ margin: "15px" }}>
                <CardMedia sx={{ height: 140 }} image={bookImg} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    display="flex"
                  >
                    {item.bookName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight="bold"
                    display="flex"
                  >
                    ₹ {item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="success"
                    onClick={() => {
                      handleCart(item.bookName);
                    }}
                  >
                    Add to Bag
                  </Button>
                  <Button size="small" variant="outlined">
                    WishList
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
          // <Box
          //   sx={{
          //     width: 200,
          //     height: 300,
          //     backgroundColor: "white",
          //     "&:hover": {
          //       backgroundColor: "gray",
          //     },
          //   }}
          // >
          //   {/* <ImageListItem > */}
          //     {/* <img
          //       src={`${item.img}?w=248&fit=crop&auto=format`}
          //       srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          //       alt={item.title}
          //       loading="lazy"
          //     /> */}
          //     <ImageListItemBar
          //       sx={{ Width: 150, Height: 150 }}
          //       title={item.name}
          //       subtitle={<span>Price: {item.price}</span>}
          //       position="below"
          //     />
          //   {/* </ImageListItem> */}
          //   <Grid container spacing={1} justifyContent="center">
          //     <Grid item>
          //       <Button
          //         size="small"
          //         variant="contained"
          //         // backgroundColor="brown"
          //         color=""
          //       >
          //         ADD TO BAG
          //       </Button>
          //     </Grid>
          //     <Grid item>
          //       <Button size="small" variant="outlined">
          //         WISHLIST
          //       </Button>
          //     </Grid>
          //   </Grid>
          // </Box>
        ))}
      </div>
      {/* </ImageList> */}
    </>
  );
}
