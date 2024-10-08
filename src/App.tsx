import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import { Typography } from "@alfalab/core-components/typography";
import { Radio } from "@alfalab/core-components/radio";
import { useCallback, useState } from "react";

import alfa from "./assets/alfa-card.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { sendDataToGA } from "./utils/events.ts";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = useCallback(() => {
    setLoading(true);
    sendDataToGA({ sub_choice: "AlfaCheck", sub_hidden: "No" }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  }, []);

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "1.5rem" }}
        >
          <img
            alt="Картинка карты"
            src={alfa}
            height={48}
            style={{ objectFit: "contain" }}
          />
          <Typography.Text
            style={{ maxWidth: "230px", marginLeft: "18px" }}
            view="primary-medium"
          >
            Альфа-карта
          </Typography.Text>
        </div>

        <Typography.TitleResponsive
          style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}
          tag="h3"
          view="xsmall"
          font="system"
          weight="semibold"
        >
          Способ уведомлений
        </Typography.TitleResponsive>

        <Radio
          className={appSt.radio}
          size={24}
          checked={true}
          label="Альфа чек — 99 руб. в месяц"
          disabled={false}
          hint="Присылаем пуш-уведомления, если не доходят — отправляем смс"
          block={true}
        />
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
