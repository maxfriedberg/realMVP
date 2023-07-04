// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Seasons from "./Seasons";
import Season from "./Season";

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seasons" element={<Seasons />} />
          <Route path="/seasons/:id" element={<Season />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// Kindacode.com
// Just some styling
const styles = {
  app: {
    padding: 50,
  },
};
