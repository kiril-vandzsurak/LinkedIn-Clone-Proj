import ProfileView from "./components/ProfileView";
import NavbarLinked from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarLinked />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Placeholder</h1>} />
        <Route path="/profile/" element={<ProfileView />} />
      </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
