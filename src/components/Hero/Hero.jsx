import { useTranslation } from "react-i18next";
import css from "./Hero.module.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css["hero-content"]}>
          <div>
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.text")}</p>
            <a href="#" className={css["blue-button"]}>
              {t("hero.button")}
            </a>
          </div>
          <img src="./hero-img.svg" alt="hero" />
        </div>
      </div>
    </section>
  );
}
