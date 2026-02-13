import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App(props) {
  return (
    <div className="app">
      <h1>App Component</h1>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
