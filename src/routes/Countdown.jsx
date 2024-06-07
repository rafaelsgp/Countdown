import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import useCountdown from "../hooks/useCountdown";
import Counter from "../components/Counter";
import Home from "./Home";

import "./Countdown.css";

const Countdown = () => {
  const { dataTitle, dataDate, dataImage, dataThemeColor } =
    useContext(ThemeContext);

  console.log(dataTitle, dataDate, dataImage, dataThemeColor);

  const [day, hour, minute, second] = useCountdown(dataDate);

  return (
    <div className="Countdown">
      <div className="back">
        <Link
          className="btn"
          to={"/"}
          element={
            <Home
              dataTitle={dataTitle}
              dataDate={dataDate}
              dataImage={dataImage}
              dataThemeColor={dataThemeColor}
            />
          }
        >
          Voltar
        </Link>
      </div>
      <div className="container">
        <h1 className="title" style={{ color: `${dataThemeColor}` }}>
          {dataTitle}
        </h1>
        ;
        <div className="countdown-container">
          <Counter
            style={{ backgroundColor: `url(${dataThemeColor})` }}
            title="Dias"
            number={day}
          />
          <Counter
            style={{ backgroundColor: `url(${dataThemeColor})` }}
            title="Horas"
            number={hour}
          />
          <Counter
            style={{ backgroundColor: `url(${dataThemeColor})` }}
            title="Minutos"
            number={minute}
          />
          <Counter
            style={{ backgroundColor: `url(${dataThemeColor})` }}
            title="Segundos"
            number={second}
          />
        </div>
      </div>
    </div>
  );
};

export default Countdown;
