import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main/Main";
// import ContactUs from "./Pages/ContactUs/ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <ContactUs/> */}
      {/* <Route /> */}
      {/* <Route path="/" pages={<Main />} /> */}
      {/* <Route path="/contactus" pages={<ContactUs />} /> */}
      {/* <Routes /> */}

    </div>
      </Router>
  );
}

export default App;
