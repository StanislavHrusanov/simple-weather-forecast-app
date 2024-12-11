import styles from "./App.module.css";
import HomePage from "./components/Home";
import WeatherPage from "./components/Weather";

function App() {
  return (
    <main className={styles.main}>
      <HomePage />
      <WeatherPage />
    </main>
  );
}

export default App;
