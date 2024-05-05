import { useContext } from "react";
import logo from "../imgs/logo.svg";
import { Context } from "../App";
import { Button } from "@mui/material";

export const BasketPage = () => {
  const { orders, setOrders } = useContext(Context);

  const handleDelete = (orderId) => {
    const filteredOrders = orders.filter((item) => item.id !== orderId);
    setOrders(filteredOrders);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {orders.length > 0 ? (
        <div className="flex-1 bg-[#f9f8fb] p-4 flex flex-col space-y-4 w-1/2 my-6 rounded-3xl">
          {orders.map((item) => (
            <div key={item.id} className="flex space-x-4">
              <div>
                <img src={logo} />
              </div>
              <div>
                <div>{`Заказ №${item.id}`}</div>
                <p>{item.description}</p>
              </div>
              <div className="flex-1 flex justify-end">
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => handleDelete(item.id)}
                >
                  Отменить заказ
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {" "}
          <h2 className="text-2xl text-white mb-2">
            Корзина пока что пуста :(
          </h2>
          <img src="https://w7.pngwing.com/pngs/277/965/png-transparent-empty-cart-illustration-thumbnail.png" />
        </>
      )}
    </div>
  );
};
