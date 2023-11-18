import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Welcomepage from "./components/Welcomepage";
import Projects from "./components/Project";
import OurPartners from "./components/OurPartners";
import ContactInfo from "./components/ContactInfo";
import HowWeWork from "./components/HowWeWork";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Welcomepage />
      <HowWeWork />
      <Projects />
      <OurPartners />
      <ContactInfo />
    </div>
  );
}

export default App;
