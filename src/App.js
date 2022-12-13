import "./App.css";
import About from "./component/about/About";
import Footer from "./component/footer/Footer";
import Info from "./component/Info/Info";
import Interest from "./component/interest/Interest";

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
