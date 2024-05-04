import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/main";
import { ServicesPage } from "../pages/services";
import { BasketPage } from "../pages/basket";
import { AuthPage } from "../pages/auth";
import { ServicePage } from "../pages/service";
import { OrderPage } from "../pages/order";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:id" element={<ServicePage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
};
