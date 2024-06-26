import { Button, Snackbar } from "@mui/material";
import { useContext, useState } from "react";
import { Context } from "../App";

export const OrderPage = () => {
  const { orders, setOrders } = useContext(Context);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value;
    const contacts = form[1].value;
    const description = form[2].value;
    setOrders((prevState) => [
      ...prevState,
      { name, contacts, description, id: orders.length + 1 },
    ]);
    setOpen(true);
  };

  return (
    <div className="flex flex-1 w-full items-center justify-center my-6">
      <div className="h-full bg-[#f9f8fb] rounded-3xl w-1/2 p-4 overflow-y-auto max-h-[calc(100vh-198px)] flex flex-col space-y-2">
        <h1 className="mb-3 text-xl font-bold">Оформление заказа</h1>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={2000}
          open={open}
          message="Заказ успешно оформлен"
          onClose={handleClose}
        />
        <div className="flex-1">
          <form onSubmit={handleSumbit}>
            <div>
              <span>Как мы можем к вам обращаться?</span>
              <input
                name="name"
                className="border p-2 rounded-xl w-full mb-2"
                placeholder="Введите своё имя"
              />
            </div>
            <div>
              <span>Как мы можем с вами связаться?</span>
              <input
                name="contact"
                className="border p-2 rounded-xl w-full mb-2"
                placeholder="Введите почту или номер телефона"
              />
            </div>
            <div>
              <span>Опишите свой заказ</span>
              <textarea
                name="description"
                className="border p-2 rounded-xl w-full mb-2"
                placeholder="Введите текст"
              />
            </div>
            <div className="mb-2">
              <span>Прикрепите файл с возможными эскизами</span>
              <input
                type="file"
                className="border p-2 rounded-xl w-full mb-2"
                placeholder="Введите текст"
              />
            </div>
            <Button variant="contained" type="submit">
              Оформить заказ
            </Button>
          </form>
        </div>
        <div>
          <div className="text-xs text-center">
            При возникновении вопросов - можете позвонить нам по данному
            телефону:
          </div>
          <div className="text-center font-semibold">
            <a href="tel:89174481155">8 (917) 448-11-55</a>
          </div>
        </div>
      </div>
    </div>
  );
};
