import { useState } from "react";
import { services } from "../data";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const ServicesPage = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredServices = useMemo(() => {
    if (!search) {
      return services;
    }

    return services.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="flex flex-1 w-full items-center justify-center my-6">
      <div className="h-full bg-[#f9f8fb] rounded-3xl w-1/2 p-4 overflow-y-auto max-h-[calc(100vh-198px)]">
        <h1 className="mb-3 text-xl font-bold">
          Наше ателье предоставляет следующие услуги:
        </h1>
        <div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded-xl w-full mb-2"
            placeholder="Введите название услуги"
          />
        </div>
        <div className="flex flex-col space-y-2">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => navigate(`/services/${item.id}`)}
            >
              <div className="w-20">
                <img src={item.img} />
              </div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
