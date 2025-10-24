import css from "./Hero.module.css";

export default function Hero() {
  return (
    <div>
      <section className={`${css.hero} ${css.container}`}>
        <div className={css["hero-content"]}>
          <div className={css["hero-data"]}>
            <h1 className={css["hero-title"]}>
              More than just <br />
              shorter links
            </h1>
            <p className={css["hero-text"]}>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a className={css["blue-button"]} href="#">
              Get Started
            </a>
          </div>
          <img
            className={css["hero-img"]}
            src="./hero-img.jpg"
            alt="human work with computer"
          />
        </div>
      </section>
    </div>
  );
}
