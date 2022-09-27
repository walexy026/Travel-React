// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main/Main";
import ContactUs from "./Pages/ContactUs/ContactUs";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      {/* <Header /> */}
      {/* <Main /> */}
      <Routes>
      {/* <ContactUs/> */}
      {/* <Route /> */}
      <Route path="/" element={<Main/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
      {/* <Footer /> */}

    </div>
      </BrowserRouter>
  );
}

export default App;
