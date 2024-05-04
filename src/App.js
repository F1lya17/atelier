import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/app-router";
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      user.setIsAuth(true);
    }
  }, []);

  return (
    <Context.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="App">
            <AppRouter />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
