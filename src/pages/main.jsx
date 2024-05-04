export const MainPage = () => {
  return (
    <div className="flex space-x-4 w-full">
      <div className="flex flex-col space-y-6 my-6 p-4 rounded-3xl bg-white opacity-80">
        <div className="text-6xl">
          Ателье
          <br />
          Гардероб
        </div>
        <div className="text-xl">
          Пошив одежды на заказ
          <br />
          Ремонт одежды любой сложности
        </div>
        <ul className="list-disc pl-4">
          <li>Воплощаем ваши идеи, делимся своими</li>
          <li>Помощь в подборе материала и фурнитуры</li>
          <li>Бесплатные консультации по пошиву</li>
          <li>Пошив по фото и разработка модели с нуля</li>
        </ul>
      </div>
      <div className="flex-1 my-6 p-4 rounded-3xl bg-white opacity-80">
        <div className="text-center text-2xl mb-6 font-bold">
          Кому необходим индивидуальный пошив
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-2 items-center">
            <div className="w-60">
              <img src="https://optim.tildacdn.com/tild3339-3765-4031-b736-343530396566/-/resize/320x/-/format/webp/8.png" />
            </div>
            <div>
              <p className="mb-1 font-semibold">
                Девушкам, которым не подходит одежда стандартных размеров
              </p>
              <p>
                Двух одинаковых фигур не бывает. То, что выигрышно смотрится на
                вашей подруге, может сделать неприметной вашу яркую внешность.
                Пошив одежды на заказ по индивидуальным меркам – это гарантия ее
                идеальной посадки на фигуре любого типа.
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div>
              <p className="mb-1 font-semibold">
                Тем, кто не любит тратить время на утомительный шопинг
              </p>
              <p>
                Часто мы пытаемся найти в магазине какую-то конкретную вещь –
                точно знаем, какой цвет, материал и какую модель хотим, но,
                кажется, кроме нас ее еще никто не придумал. Пошив одежды на
                заказ – это способ получить желаемую вещь, сэкономив время и
                силы на ее поиске.
              </p>
            </div>
            <div className="w-60">
              <img src="https://optim.tildacdn.com/tild3364-6165-4538-b861-636262373265/-/resize/320x/-/format/webp/9.png" />
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="w-60">
              <img src="https://optim.tildacdn.com/tild3538-3861-4233-b339-383838336531/-/resize/320x/-/format/webp/10.png" />
            </div>
            <div>
              <p className="mb-1 font-semibold">
                Всем, кто предпочитает носить эксклюзивную одежду
              </p>
              <p>
                Пошив одежды на заказ – это возможность получить одежду,
                созданную с учетом ваших личных желаний и особенностей вкуса,
                стиля, характера и образа жизни. Это ваша творческая
                самореализация и способ выделиться.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
