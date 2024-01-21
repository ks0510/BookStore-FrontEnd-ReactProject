import "./App.css";
import Cart from "./components/Cart/Cart";
import BookPage from "./components/BookPage/BookPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/registration/registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/bookPage" element={<BookPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
