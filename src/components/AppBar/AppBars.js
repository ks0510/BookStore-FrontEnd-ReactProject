import * as React from "react";

import BookStoreLogo from "./Images/BookStoreLogo.png";
import { AppBar, Toolbar } from "@mui/material";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function AppBars() {
  // const SearchIconWrapper = styled('div')(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: 'inherit',
  //   '& .MuiInputBase-input': {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('md')]: {
  //       width: '20ch',
  //     },
  //   },
  // }));
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: "brown",
            display: "flex",
            justifyContent: "space-around",
            // height: "70px",
          }}
        >
          <span style={{ display: "flex" }}>
            <img src={BookStoreLogo} style={{ height: "40px" }} />
            <span style={{ fontSize: "25px", marginTop: "5px" }}>
              BookStore
            </span>
          </span>
          <span>
            <input
              placeholder="search"
              style={{ width: "400px", height: "35px" }}
            />
            {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          </span>

          <span>
            {" "}
            <Link to={"/cart"}>
              <button>Cart</button>
            </Link>{" "}
          </span>
        </Toolbar>
      </AppBar>
    </>
  );
}
