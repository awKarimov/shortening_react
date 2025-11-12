import { useTranslation } from "react-i18next";
import css from "./Header.module.css";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className={css.header}>
      <div className={`${css.container} ${css["header-content"]}`}>
        <img src="./logo.svg" alt="logo" className={css["header-logo"]} />

        <nav className={css.nav}>
          <a href="#">{t("header.features")}</a>
          <a href="#">{t("header.pricing")}</a>
          <a href="#">{t("header.resources")}</a>
        </nav>

        <nav className={css.sign}>
          <a href="#">{t("header.login")}</a>
          <a href="#" className={css["sign-up"]}>
            {t("header.signup")}
          </a>
        </nav>

        <select
          className={css.lang}
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}>
          <option value="uz">🇺🇿 Uz</option>
          <option value="ru">🇷🇺 Ru</option>
          <option value="en">🇬🇧 En</option>
          <option value="ko">🇰🇷 Ko</option>
        </select>
      </div>
    </header>
  );
}
