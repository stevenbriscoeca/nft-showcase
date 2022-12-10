import React, { useEffect, useState } from "react";

import "./App.css";
import Homepage from "./pages/homepage";

import { fetchCollections } from "./services/opensea";

function App() {
  return <Homepage></Homepage>;
}

export default App;
