import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoAguiar from "../assets/Logo Aguiar Sistemas.svg";
import { Menu, X, FileText, Home, Sun, Moon, Github } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {" "}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-github-canvas-subtle/95 backdrop-blur-md border-b border-github-border-default shadow-lg"
            : "bg-github-canvas-default border-b border-github-border-muted"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 group"
              aria-label="Aguiar Sistemas - Voltar ao início"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-github-accent-emphasis to-blue-600 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200">
                <img
                  src={LogoAguiar}
                  alt="Aguiar Sistemas"
                  className="w-6 h-6 filter brightness-0 invert"
                  draggable="false"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-github-fg-default">
                  Aguiar Sistemas
                </h1>
                <p className="text-xs text-github-fg-muted">
                  Portal de Documentação
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-1"
              aria-label="Navegação principal"
            >
              <Link
                to="/docs"
                className="github-button px-3 py-2 rounded-md text-sm font-medium text-github-fg-default hover:bg-github-canvas-subtle transition-colors duration-200 flex items-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Início
              </Link>

              <div className="relative group">
                <button className="github-button px-3 py-2 rounded-md text-sm font-medium text-github-fg-default hover:bg-github-canvas-subtle transition-colors duration-200 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Documentação
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-64 bg-github-canvas-overlay border border-github-border-default rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-medium text-github-fg-muted uppercase tracking-wide border-b border-github-border-muted">
                      AS BI - Business Intelligence
                    </div>
                    <Link
                      to="/docs/as-bi/termos-de-uso"
                      className="flex items-center px-4 py-3 text-sm text-github-fg-default hover:bg-github-canvas-subtle transition-colors duration-200"
                    >
                      <FileText className="w-4 h-4 mr-3 text-github-fg-muted" />
                      Termos de Uso
                    </Link>
                    <Link
                      to="/docs/as-bi/politica-de-privacidade"
                      className="flex items-center px-4 py-3 text-sm text-github-fg-default hover:bg-github-canvas-subtle transition-colors duration-200"
                    >
                      <FileText className="w-4 h-4 mr-3 text-github-fg-muted" />
                      Política de Privacidade
                    </Link>
                  </div>
                  <div className="py-2 border-t border-github-border-muted">
                    <div className="px-4 py-2 text-xs font-medium text-github-fg-muted uppercase tracking-wide border-b border-github-border-muted">
                      AS Carrinho - Pré-Venda
                    </div>
                    <Link
                      to="/docs/as-carrinho/termos-de-uso"
                      className="flex items-center px-4 py-3 text-sm text-github-fg-default hover:bg-github-canvas-subtle transition-colors duration-200"
                    >
                      <FileText className="w-4 h-4 mr-3 text-github-fg-muted" />
                      Termos de Uso
                    </Link>
                    <Link
                      to="/docs/as-carrinho/politica-de-privacidade"
                      className="flex items-center px-4 py-3 text-sm text-github-fg-default hover:bg-github-canvas-subtle transition-colors duration-200"
                    >
                      <FileText className="w-4 h-4 mr-3 text-github-fg-muted" />
                      Política de Privacidade
                    </Link>
                  </div>
                </div>
              </div>

              {/* Theme Toggle & GitHub Link */}
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-github-border-muted">
                <a
                  href="https://github.com/aguiarsistemas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button p-2 rounded-md text-github-fg-muted hover:text-github-fg-default hover:bg-github-canvas-subtle transition-colors duration-200"
                  aria-label="GitHub da Aguiar Sistemas"
                >
                  <Github className="w-5 h-5" />
                </a>

                <button
                  onClick={toggleTheme}
                  className="theme-toggle p-2 rounded-md text-github-fg-muted hover:text-github-fg-default hover:bg-github-canvas-subtle transition-colors duration-200"
                  aria-label={`Alternar para tema ${
                    theme === "dark" ? "claro" : "escuro"
                  }`}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-github-fg-default hover:bg-github-canvas-subtle transition-colors duration-200"
              aria-label="Abrir menu de navegação"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>{" "}
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-github-border-muted bg-github-canvas-overlay">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="space-y-2" aria-label="Navegação móvel">
                <Link
                  to="/docs"
                  className="flex items-center px-3 py-3 text-github-fg-default hover:bg-github-canvas-subtle rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="w-4 h-4 mr-3" />
                  Início
                </Link>

                <div className="mt-4">
                  <div className="px-3 py-2 text-xs font-medium text-github-fg-muted uppercase tracking-wide">
                    AS BI - Business Intelligence
                  </div>
                  <Link
                    to="/docs/as-bi/termos-de-uso"
                    className="flex items-center px-3 py-3 text-github-fg-default hover:bg-github-canvas-subtle rounded-lg transition-colors duration-200 ml-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FileText className="w-4 h-4 mr-3 text-github-fg-muted" />
                    Termos de Uso
                  </Link>
                  <Link
                    to="/docs/as-bi/politica-de-privacidade"
                    className="flex items-center px-3 py-3 text-github-fg-default hover:bg-github-canvas-subtle rounded-lg transition-colors duration-200 ml-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FileText className="w-4 h-4 mr-3 text-github-fg-muted" />
                    Política de Privacidade
                  </Link>
                </div>
                <div className="mt-4">
                  <div className="px-3 py-2 text-xs font-medium text-github-fg-muted uppercase tracking-wide">
                    AS Carrinho - Pré-Venda
                  </div>
                  <Link
                    to="/docs/as-carrinho/termos-de-uso"
                    className="flex items-center px-3 py-3 text-github-fg-default hover:bg-github-canvas-subtle rounded-lg transition-colors duration-200 ml-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FileText className="w-4 h-4 mr-3 text-github-fg-muted" />
                    Termos de Uso
                  </Link>
                  <Link
                    to="/docs/as-carrinho/politica-de-privacidade"
                    className="flex items-center px-3 py-3 text-github-fg-default hover:bg-github-canvas-subtle rounded-lg transition-colors duration-200 ml-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FileText className="w-4 h-4 mr-3 text-github-fg-muted" />
                    Política de Privacidade
                  </Link>
                </div>

                {/* Mobile Theme Toggle & Links */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-github-border-muted">
                  <a
                    href="https://github.com/aguiarsistemas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 text-github-fg-muted hover:text-github-fg-default hover:bg-github-canvas-subtle rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>

                  <button
                    onClick={toggleTheme}
                    className="flex items-center px-3 py-2 text-github-fg-muted hover:text-github-fg-default hover:bg-github-canvas-subtle rounded-lg transition-colors duration-200"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="w-4 h-4 mr-2" />
                        Tema Claro
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4 mr-2" />
                        Tema Escuro
                      </>
                    )}
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to prevent content jumping */}
      <div className="h-16" />
    </>
  );
};

export { Header };
