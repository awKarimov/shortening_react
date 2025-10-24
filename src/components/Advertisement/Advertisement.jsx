import css from "./Advertisement.module.css";

export default function Advertisement() {
  return (
    <div>
      <section className={css.statistics}>
        <div className={css.container}>
          <div className={css["info-content"]}>
            <h2 className={css["info-title"]}>Advanced Statistics</h2>
            <p className={css["info-text"]}>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className={css.advertisement}>
            <div className={css.dominance}>
              <span className={css.circle}>
                <img
                  className={css["statistics-img"]}
                  src="./chart.svg"
                  alt="Brand recognition"
                />
              </span>
              <h3 className={css["statistics-title"]}>Brand Recognition</h3>
              <p className={css["statistics-text"]}>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className={`${css.dominance} ${css.second}`}>
              <span className={css.circle}>
                <img
                  className={css["statistics-img"]}
                  src="./combined-shape.svg"
                  alt="Detailed records"
                />
              </span>
              <h3 className={css["statistics-title"]}>Detailed Records</h3>
              <p className={css["statistics-text"]}>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className={`${css.dominance} ${css.third}`}>
              <span className={css.circle}>
                <img
                  className={css["statistics-img"]}
                  src="./pens.svg"
                  alt="Fully customizable"
                />
              </span>
              <h3 className={css["statistics-title"]}>Fully Customizable</h3>
              <p className={css["statistics-text"]}>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
