import { BrowserRouter, Route, Routes } from "react-router-dom";

import LojaProducts from "./Componentes/Pages/Home/Loja";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LojaProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
