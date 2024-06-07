import { useContext } from "react";
import "./Counter.css";
import { ThemeContext } from "../context/ThemeContext";

const Counter = ({ title, number }) => {
  const { dataThemeColor } = useContext(ThemeContext);

  return (
    <div className="counter">
      <p
        className="counter-number"
        style={{ backgroundColor: `${dataThemeColor}` }}
      >
        {number}
      </p>
      <h3 className="counter-text" style={{ color: `${dataThemeColor}` }}>
        {title}
      </h3>
    </div>
  );
};

export default Counter;
