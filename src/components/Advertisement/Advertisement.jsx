import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import css from "./Advertisement.module.css";

export default function Advertisement() {
  const { t, i18n } = useTranslation();
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch(`https://json-api.uz/api/project/shortly/${i18n.language}`)
      .then((res) => res.json())
      .then((data) => setAds(data.advertisements || []));
  }, [i18n.language]);

  return (
    <section className={css.statistics}>
      <div className={css.container}>
        <div className={css["info-content"]}>
          <h2>{t("advertisement.title")}</h2>
          <p>{t("advertisement.text")}</p>
        </div>
        <div className={css.advertisement}>
          {ads.map((item) => (
            <div key={item.id} className={css.dominance}>
              <span className={css.circle}>
                <img src={item.icon} alt={item.title} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
