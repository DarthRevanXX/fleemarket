import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
