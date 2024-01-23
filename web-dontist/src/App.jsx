// import About from "./About";

import BlanchimentDentaire from "./AllCompenent/Page Spselete/BlanchimentDentaire";
import DentisterieEsthétique from "./AllCompenent/Page Spselete/DentisterieEsthétique";
import Orthodontie from "./AllCompenent/Page Spselete/Orthodontie";
import PImplantologie from "./AllCompenent/Page Spselete/PImplantologie";
import PdDontaire from "./AllCompenent/Page Spselete/PdDontaire";
import SoinsOmnipratiques from "./AllCompenent/Page Spselete/SoinsOmnipratiques";

import "./App.css";

import Page from "./Pages/Page";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/PImplantologie" element={<PImplantologie />} />
            <Route path="/Orthodontie" element={<Orthodontie />} />
            <Route
              path="/DentisterieEsthétique"
              element={<DentisterieEsthétique />}
            />
            <Route
              path="/SoinsOmnipratiques"
              element={<SoinsOmnipratiques />}
            />
            <Route
              path="/BlanchimentDentaire"
              element={<BlanchimentDentaire />}
            />
            <Route path="/PdDontaire" element={<PdDontaire />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
