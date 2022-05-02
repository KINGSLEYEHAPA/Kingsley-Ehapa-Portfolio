import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./assets/background.jfif";

function App() {
  return (
    <div className="m-0 p-0  font-sans  max-w-7xl mx-auto bg-slate-700">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
