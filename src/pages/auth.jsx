import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { NavLink, useMatch, useNavigate } from "react-router-dom";
import { Context } from "../App";

export const AuthPage = () => {
  const isAuthPage = useMatch("login");

  const { setIsAuth } = useContext(Context);

  const root = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (isAuthPage) {
      if (localStorage.getItem(email) === password) {
        localStorage.setItem("auth", "true");
        setIsAuth(true);
        root("/");
      } else {
        setError("Пароль или почта введены неверно");
      }
    } else {
      if (password === repeatPassword) {
        localStorage.setItem(email, password);
        localStorage.setItem("auth", "true");
        setIsAuth(true);
        root("/");
      } else {
        setError("Пароли не совпадают");
      }
    }
  };

  return (
    <div className="w-1/2 my-0 mx-auto flex flex-col gap-6 my-4 p-8 border rounded bg-white">
      <h2 className="font-semibold text-xl">
        {isAuthPage ? "Авторизация" : "Регистрация"}
      </h2>
      {error && <p className="text-red-600">{error}</p>}
      <div>
        <div>Адрес электронной почты</div>
        <TextField
          placeholder="Введите почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          fullWidth
        />
      </div>
      <div>
        <div>Пароль</div>
        <TextField
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          fullWidth
        />
      </div>
      {!isAuthPage && (
        <div>
          <div>Повторите пароль</div>
          <TextField
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            type="password"
            fullWidth
          />
        </div>
      )}
      <div>
        <Button onClick={login} variant="contained" type="submit">
          {isAuthPage ? "Войти" : "Регистрация"}
        </Button>
        {isAuthPage ? (
          <div>
            Нет аккаунта?{" "}
            <NavLink className="text-blue-600" to={"/register"}>
              Зарегистрируйтесь
            </NavLink>
          </div>
        ) : (
          <div>
            Есть аккаунт?{" "}
            <NavLink className="text-blue-600" to={"/login"}>
              Войдите
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
