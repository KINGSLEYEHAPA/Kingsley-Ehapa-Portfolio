import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./assets/background.jfif";

function App() {
  return (
    <div className="m-0 p-0  font-sans  max-w-7xl mx-auto bg-slate-700">
      {/* <div
        className="max-w-7xl"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 60%)",
          position: "absolute",
          width: "100%",
          minHeight: "100%",
          top: "0",
          left: "0",
          zIndex: "-2",
          backgroundColor: "rgb(51 65 85)",
        }}
      ></div> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
