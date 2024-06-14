import { Outlet } from "react-router-dom";
import "./App.css";
import About from "./components/Home/About/About";
import RouteItem from "./components/Home/Shared/RouteItem";

function App() {
  return (
    <div>
      <RouteItem />
      <About />
      
      <Outlet />
    </div>
  );
}

export default App;
