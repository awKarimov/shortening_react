import { useTranslation } from "react-i18next";
import css from "./Cta.module.css";

export default function Cta() {
  const { t } = useTranslation();

  return (
    <section className={css.cta}>
      <div className={`${css.container} ${css["cta-content"]}`}>
        <h2>{t("cta.title")}</h2>
        <a href="#" className={css["cta-button"]}>
          {t("cta.button")}
        </a>
      </div>
    </section>
  );
}
