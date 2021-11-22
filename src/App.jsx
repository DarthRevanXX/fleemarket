import "./App.css";
import Header from "./components/Layout/MainHeader";
import { AuthContextProvider } from "./store/auth-context";

const App = () => {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header></Header>
      </div>
    </AuthContextProvider>
  );
};

export default App;
