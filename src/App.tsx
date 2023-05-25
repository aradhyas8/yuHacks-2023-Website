import { Routes, Route, BrowserRouter } from "react-router-dom";

import Cursor from "./components/Cursor.component";
import NavBar from "./components/NavBar.component";
import Footer from "./components/Footer.component";

import ComingSoon from "./pages/ComingSoon.page";
import Login from "./pages/Login.page";

function App() {

  const HomePage = <ComingSoon />
  const LoginPage = <Login />

  return(
    <div className="AppContainer" style={{backgroundColor: "#CC5A5A"}}>
      <Cursor />
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/login" element={LoginPage} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    
  )
}

export default App;