import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { NewPost } from "../../pages/NewPost";
import { Navbar } from "../../components/NavBar";

export const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
    </Router>
  );
};
