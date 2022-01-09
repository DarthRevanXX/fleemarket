import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./stores/auth-context";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SingUp/SignUp";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
