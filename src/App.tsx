import { Routes, Route, BrowserRouter } from "react-router-dom";

import Cursor from "./components/Cursor.component";
import NavBar from "./components/NavBar.component";

import ComingSoon from "./pages/ComingSoon.page";
import Login from "./pages/Login.page";

function App() {

  const HomePage = <ComingSoon />
  const LoginPage = <Login />

  return(
    <div className="AppContainer">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/login" element={LoginPage} />
        </Routes>
      </BrowserRouter>
      {/* <Cursor /> */}
    </div>
    
  )
}

export default App;