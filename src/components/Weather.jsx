import styles from "./Weather.module.css";

export default function WeatherPage() {
  return (
    <section className={styles["weather-container"]}>
      <h2>city name</h2>
      <div className={styles.conditions}>
        <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="as" />
        <p>
          10 <span>°C</span>
        </p>
      </div>
      <p className={styles["conditions-word"]}>Sunny</p>
      <p className={styles.humidity}>
        Humidity: <span>10%</span>
      </p>
      <p className={styles.wind}>
        Wind: <span>3 m/s</span>
      </p>
    </section>
  );
}
