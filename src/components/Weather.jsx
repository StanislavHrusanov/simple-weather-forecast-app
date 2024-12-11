import styles from "./Weather.module.css";

export default function Weather({ weather }) {
  return (
    <section className={styles["weather-container"]}>
      <h2>{weather.location.name}</h2>
      <div className={styles.conditions}>
        <img src={weather.current.condition.icon} alt={weather.location.name} />
        <p>
          {weather.current["temp_c"]} <span>°C</span>
        </p>
      </div>
      <p className={styles["conditions-word"]}>
        {weather.current.condition.text}
      </p>
      <p className={styles.humidity}>
        Humidity: <span>{weather.current.humidity}%</span>
      </p>
      <p className={styles.wind}>
        Wind: <span>{weather.current["wind_kph"]} km/h</span>
      </p>
    </section>
  );
}
