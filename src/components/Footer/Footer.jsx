import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <img src="./footer-logo.svg" alt="Shortly" />
      </div>
    </footer>
  );
}
