import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Best from "./component/review/BestReview";
import PicksAward from "./component/picksaward/PicksAward";
import Milkt from "./component/review/MilktReview";
import Smartall from "./component/review/SmartallReview";
import Elihigh from "./component/review/ElihighReview";
import Onlyone from "./component/review/OnlyoneReview";
import Homelearn from "./component/review/HomelearnReview";

import Write from "./component/review/ReviewWrite";
import WriteE from "./component/review/ReviewWriteE";
import WriteS from "./component/review/ReviewWriteS";
import WriteH from "./component/review/ReviewWriteH";
import WriteO from "./component/review/ReviewWriteO";

import Login from "./component/sign/Login";
import Mypage from "./component/mypage/Mypage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best" element={<Best />} />
        <Route path="/award" element={<PicksAward />} />
        <Route path="/milkt" element={<Milkt />} />
        <Route path="/smartall" element={<Smartall />} />
        <Route path="/elihigh" element={<Elihigh />} />
        <Route path="/onlyone" element={<Onlyone />} />
        <Route path="/homelearn" element={<Homelearn />} />
        <Route path="/write" element={<Write />} />
        <Route path="/writeE" element={<WriteE />} />
        <Route path="/writeS" element={<WriteS />} />
        <Route path="/writeH" element={<WriteH />} />
        <Route path="/writeO" element={<WriteO />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>
  );
}

export default App;
