import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TermosDeUsoPage from "./pages/as-bi/TermosDeUsoPage";
import PoliticaDePrivacidadePage from "./pages/as-bi/PoliticaDePrivacidadePage";
import TermosDeUsoPageCarrinho from "./pages/as-carrinho/TermosDeUsoPage";
import PoliticaDePrivacidadePageCarrinho from "./pages/as-carrinho/PoliticaDePrivacidadePage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/as-bi/termos-de-uso" element={<TermosDeUsoPage />} />
          <Route
            path="/as-bi/politica-de-privacidade"
            element={<PoliticaDePrivacidadePage />}
          />
          <Route
            path="/as-carrinho/termos-de-uso"
            element={<TermosDeUsoPageCarrinho />}
          />
          <Route
            path="/as-carrinho/politica-de-privacidade"
            element={<PoliticaDePrivacidadePageCarrinho />}
          />
          {/* Adicionar novas rotas aqui no futuro */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
