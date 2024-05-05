import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { services } from "../data";
import { Button } from "@mui/material";

export const ServicePage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const serviceId = pathname.replace(/[^0-9]/g, "");
  const service = useMemo(() => {
    return services.find((item) => item.id === +serviceId);
  }, [serviceId]);

  return (
    <div className="flex flex-col space-y-4 flex-1 w-full items-center bg-[#f9f8fb] rounded-3xl py-4 px-32 my-6">
      <div className="w-32">
        <img src={service.img} />
      </div>
      <div className="font-semibold text-xl">{service.title}</div>
      <div className="text-center">{service.description}</div>
      <div className="w-1/2 h-px bg-slate-700" />
      <div className="text-center">{service.info}</div>
      <Button variant="contained" onClick={() => navigate("/order")}>
        Сделать заказ
      </Button>
    </div>
  );
};
