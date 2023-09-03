import "./App.css";
import Footer from './Component/Footer';
import BackToTop from "./Pages/Top";
import MainRoutes from './Routes/MainRoutes';
function App() {
  return (
    <div className="App">
      <MainRoutes />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
