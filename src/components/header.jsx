import { NavLink, useNavigate } from "react-router-dom";
import logo from "../imgs/logo.svg";
import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../App";

export const Header = () => {
  const root = useNavigate();

  const { isAuth, setIsAuth } = useContext(Context);

  const logout = (e) => {
    e.preventDefault();
    if (window.confirm("Вы точно хотите выйти?")) {
      localStorage.setItem("auth", "");
      setIsAuth(false);
      root("/login");
    }
  };

  return (
    <div className="flex justify-center bg-[#f9f8fb]">
      <div className="w-3/4 p-4 self-center flex items-center justify-between">
        <NavLink to="/">
          <img src={logo} />
        </NavLink>
        <div className="flex gap-4">
          {isAuth && <NavLink to="/order">Сделать заказ</NavLink>}
          <NavLink to="/services">Услуги</NavLink>
          <NavLink to="/basket">Корзина</NavLink>
          {isAuth ? (
            <Button color="success" variant="contained" onClick={logout}>
              Выйти
            </Button>
          ) : (
            <Button
              color="success"
              variant="contained"
              onClick={() => root("/login")}
            >
              Войти
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
