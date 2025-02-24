import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Common/Login";
import { SignUp } from "./components/Common/SignUp";
import { SidebarUser } from "./components/Layout/SidebarUser";
import { UserDashboard } from "./components/User/UserDashboard";
import { AskQuestion } from "./components/User/AskQuestion";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SidebarUser />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="askquestion" element={<AskQuestion />} />
          </Route>

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
