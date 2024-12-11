import { useEffect, useState } from "react";

import styles from "./Home.module.css";
import Weather from "./Weather";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (url) {
      (async () => {
        const res = await fetch(url);

        if (!res.ok) {
          const error = await res.json();
          window.alert(error.error.message);
          return;
        }

        const currWeather = await res.json();

        setWeather(currWeather);
      })();
    }
  }, [url]);

  return (
    <section className={styles["home-container"]}>
      <h1>Weather Forecast</h1>
      <p>You can check weather anytime and anywhere</p>
      <div>
        <input
          type="text"
          id="city"
          name="city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(
              `http://api.weatherapi.com/v1/current.json?key=2ae4c5d132e644de93d92811241112&q=${search}&aqi=no`
            )
          }
        >
          Search
        </button>
      </div>
      {weather.location && <Weather weather={weather} />}
    </section>
  );
}
