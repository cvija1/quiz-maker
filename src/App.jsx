import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Review from "./pages/Review";
import NewQuiz from "./pages/NewQuiz";
import EditQuiz from "./pages/EditQuiz";
import StartQuiz from "./pages/StartQuiz";
const App = () => {
  return (
    <>
      <div className="d-flex min-vh-100 flex-column">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/review" element={<Review />} />
            <Route path="/create" element={<NewQuiz />} />
            <Route path="/quiz/:id" element={<EditQuiz />} />
            <Route path="/quiz/:id/start" element={<StartQuiz />} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
