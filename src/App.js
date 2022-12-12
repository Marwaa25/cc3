import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Acceuil from "./components/Accueil";

import DetailsUsers from "./components/DetailUser";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User/>} />
        <Route path="acceuil" element={<Acceuil/>}>
          <Route index element={<DetailsUsers/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;