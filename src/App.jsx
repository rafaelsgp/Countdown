import { Outlet } from "react-router-dom";

import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { dataImage } = useContext(ThemeContext);

  console.log(dataImage);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${dataImage})`,
      }}
    >
      <Outlet />
    </div>
  );
};

export default App;
