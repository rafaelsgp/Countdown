import { useContext } from "react";
import { Link } from "react-router-dom";
import Countdown from "./Countdown";
import { ThemeContext } from "../context/ThemeContext";
import "./Home.css";

const Home = () => {
  const {
    dataTitle,
    dataDate,
    dataImage,
    dataThemeColor,
    toggleTitle,
    toggleDate,
    toggleImage,
    toggleThemeColor,
  } = useContext(ThemeContext);

  console.log(dataTitle, dataDate, dataImage, dataThemeColor);

  return (
    <div className="Home">
      <h1 style={{ color: `${dataThemeColor}` }}>
        Monte a sua contagem regressiva!
      </h1>
      <form className="form">
        <div className="form-title">
          <label htmlFor="title" style={{ color: `${dataThemeColor}` }}>
            Título:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            style={{ color: `${dataThemeColor}` }}
            placeholder="Digite o título"
            onChange={(e) => toggleTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-date">
          <label htmlFor="date" style={{ color: `${dataThemeColor}` }}>
            Data:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            style={{ color: `${dataThemeColor}` }}
            onChange={(e) => toggleDate(e.target.value)}
            required
          />
        </div>
        <div className="form-image">
          <label htmlFor="image" style={{ color: `${dataThemeColor}` }}>
            Imagem:
          </label>
          <input
            type="url"
            name="image"
            id="image"
            style={{ color: `${dataThemeColor}` }}
            placeholder="Coloque a url da imagem"
            onChange={(e) => toggleImage(e.target.value)}
            required
          />
        </div>
        <div className="form-theme-color">
          <label htmlFor="thmcolor" style={{ color: `${dataThemeColor}` }}>
            Cor do tema:
          </label>
          <input
            type="color"
            name="thmcolor"
            id="thmcolor"
            style={{ color: `${dataThemeColor}` }}
            onChange={(e) => toggleThemeColor(e.target.value)}
            required
          />
        </div>
      </form>
      <Link
        className="btn"
        style={{ backgroundColor: `${dataThemeColor}` }}
        to={"/countdown"}
        element={
          <Countdown
            dataTitle={dataTitle}
            dataDate={dataDate}
            dataImage={dataImage}
            dataThemeColor={dataThemeColor}
          />
        }
      >
        Criar
      </Link>
    </div>
  );
};

export default Home;
