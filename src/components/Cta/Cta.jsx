import css from "./Cta.module.css";

export default function Cta() {
  return (
    <section className={css.cta}>
      <div className={`${css.container} ${css["cta-content"]}`}>
        <h2 className={css["cta-title"]}>Boost your links today</h2>
        <a className={css["cta-button"]} href="#">
          Get Started
        </a>
      </div>
    </section>
  );
}
