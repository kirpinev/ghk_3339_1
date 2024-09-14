import { Typography } from "@alfalab/core-components/typography";
import heart from "../assets/heart.png";
import { thxSt } from "./style.css";

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <img src={heart} width={135} className={thxSt.rocket} />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Спасибо за участие в эксперименте
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Сервис находится в разработке. Как только он будет доступен,мы
          обязательно вам сообщим.
        </Typography.Text>
      </div>
    </>
  );
};
