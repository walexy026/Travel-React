import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main/Main";
// import ContactUs from "./Pages/ContactUs/ContactUs";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <ContactUs/> */}
      {/* <BrowserRouter>
      <Routes />
      <Route path="/" element={<Main />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Routes />
      </BrowserRouter> */}

    </div>
  );
}

export default App;
