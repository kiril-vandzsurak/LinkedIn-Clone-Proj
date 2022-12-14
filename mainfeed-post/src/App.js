import ProfileView from "./components/ProfileView";
import NavbarLinked from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddingPost from "./components/AddingPost";

function App() {
  return (
    <>
      <NavbarLinked />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddingPost />} />
          <Route path="/profile/" element={<ProfileView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
