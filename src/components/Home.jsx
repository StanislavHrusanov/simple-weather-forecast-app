import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <section className={styles["home-container"]}>
      <h1>Weather Forecast</h1>
      <p>You can check weather anytime and anywhere</p>
      <div>
        <input type="text" id="city" name="city" />
        <button>Search</button>
      </div>
    </section>
  );
}
