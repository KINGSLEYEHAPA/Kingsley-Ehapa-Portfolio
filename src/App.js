import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="text-orange-500 font-bont text-center text-4xl p-4 ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
