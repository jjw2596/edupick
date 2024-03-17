import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Best from "./component/review/BestReview";
import PicksAward from "./component/picksaward/PicksAward";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best" element={<Best />} />
        <Route path="/award" element={<PicksAward />} />
      </Routes>
    </Router>
  );
}

export default App;
