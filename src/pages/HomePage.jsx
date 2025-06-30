import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  FileText,
  Clock,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Sparkles,
  Code,
  BookOpen,
  Users,
  Rocket,
  Star,
} from "lucide-react";

const HomePage = () => {
  // Estado para rastreamento suave do mouse
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);

  // Sistema de partículas simples (25 partículas)
  useEffect(() => {
    const initialParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.4 + 0.2,
      color: i % 3 === 0 ? "accent" : i % 3 === 1 ? "blue" : "purple",
    }));
    setParticles(initialParticles);
  }, []);

  // Efeito para rastrear movimento do mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const newX = ((e.clientX - rect.left) / rect.width) * 100;
      const newY = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x: newX, y: newY });
    };

    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
      heroSection.addEventListener("mouseenter", () => setIsHovered(true));
      heroSection.addEventListener("mouseleave", () => setIsHovered(false));

      return () => {
        heroSection.removeEventListener("mousemove", handleMouseMove);
        heroSection.removeEventListener("mouseenter", () => setIsHovered(true));
        heroSection.removeEventListener("mouseleave", () =>
          setIsHovered(false)
        );
      };
    }
  }, []);

  // Smoothing suave do mouse position
  useEffect(() => {
    const smoothingFactor = 0.05; // Muito suave
    const interval = setInterval(() => {
      setSmoothPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * smoothingFactor,
        y: prev.y + (mousePosition.y - prev.y) * smoothingFactor,
      }));
    }, 16); // 60 FPS

    return () => clearInterval(interval);
  }, [mousePosition]);

  // Sistema de animação simples das partículas
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Movimento natural da partícula
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Efeito magnético suave do mouse (apenas quando próximo)
          const distanceToMouse = Math.sqrt(
            Math.pow(smoothPosition.x - particle.x, 2) +
              Math.pow(smoothPosition.y - particle.y, 2)
          );

          if (distanceToMouse < 15 && isHovered) {
            const magneticForce = 0.008 * (15 - distanceToMouse);
            newX += (smoothPosition.x - particle.x) * magneticForce;
            newY += (smoothPosition.y - particle.y) * magneticForce;
          }

          // Boundaries com wrap-around
          if (newX < 0) newX = 100;
          if (newX > 100) newX = 0;
          if (newY < 0) newY = 100;
          if (newY > 100) newY = 0;

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 100); // Suave
    return () => clearInterval(interval);
  }, [smoothPosition, isHovered]);

  const features = [
    {
      icon: Zap,
      title: "Acesso Rápido",
      description: "Encontre rapidamente a documentação que precisa",
      color: "text-github-accent-fg",
    },
    {
      icon: CheckCircle,
      title: "Sempre Atualizado",
      description: "Documentos atualizados com as últimas versões",
      color: "text-github-success-fg",
    },
    {
      icon: Globe,
      title: "Responsivo",
      description: "Acesse de qualquer dispositivo, a qualquer hora",
      color: "text-github-attention-fg",
    },
  ];

  const applications = [
    {
      name: "AS BI",
      description: "Business Intelligence para análise avançada de dados",
      icon: BarChart3,
      status: "Ativo",
      color: "bg-github-success-subtle",
      textColor: "text-github-success-fg",
      links: [
        { name: "Termos de Uso", href: "/as-bi/termos-de-uso" },
        {
          name: "Política de Privacidade",
          href: "/as-bi/politica-de-privacidade",
        },
      ],
    },
    {
      name: "Novos Apps",
      description: "Aplicações inovadoras em desenvolvimento",
      icon: Rocket,
      status: "Em breve",
      color: "bg-github-attention-subtle",
      textColor: "text-github-attention-fg",
      links: [],
    },
  ];

  // Dados reais
  const stats = [
    {
      label: "Aplicativos",
      value: "1",
      icon: Code,
      description: "AS BI ativo",
    },
    {
      label: "Documentos",
      value: "2",
      icon: BookOpen,
      description: "Termos e Políticas",
    },
    {
      label: "Última Atualização",
      value: "2025",
      icon: Clock,
      description: "Janeiro",
    },
  ];

  return (
    <div className="min-h-screen bg-github-canvas-default">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative overflow-hidden bg-github-canvas-default min-h-screen flex items-center"
      >
        {/* Background Effects Simples */}
        <div className="absolute inset-0">
          {/* Gradient Orb do Mouse */}
          <div
            className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl transition-all duration-1000 ease-out"
            style={{
              background:
                "linear-gradient(45deg, rgb(var(--github-accent-emphasis)), rgb(59 130 246))",
              left: `${smoothPosition.x}%`,
              top: `${smoothPosition.y}%`,
              transform: `translate(-50%, -50%) scale(${
                isHovered ? 1.2 : 0.8
              })`,
            }}
          />

          {/* Partículas Simples */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle) => {
              const getParticleColor = () => {
                switch (particle.color) {
                  case "accent":
                    return "rgb(var(--github-accent-emphasis))";
                  case "purple":
                    return "rgb(168 85 247)";
                  case "blue":
                    return "rgb(59 130 246)";
                  default:
                    return "rgb(var(--github-accent-emphasis))";
                }
              };

              // Calcular proximidade do mouse
              const distanceToMouse = Math.sqrt(
                Math.pow(smoothPosition.x - particle.x, 2) +
                  Math.pow(smoothPosition.y - particle.y, 2)
              );
              const isNearMouse = distanceToMouse < 15;

              return (
                <div
                  key={particle.id}
                  className="absolute rounded-full transition-all duration-300 ease-out"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: getParticleColor(),
                    opacity:
                      particle.opacity * (isHovered && isNearMouse ? 1.5 : 1),
                    boxShadow: `0 0 ${
                      particle.size * 3
                    }px ${getParticleColor()}`,
                    transform: `translate(-50%, -50%) scale(${
                      isNearMouse ? 1.3 : 1
                    })`,
                    animation: `particle-float ${
                      3 + Math.random() * 2
                    }s ease-in-out infinite alternate`,
                  }}
                />
              );
            })}
          </div>

          {/* Mouse Trail Suave */}
          <div
            className="absolute w-24 h-24 rounded-full opacity-20 blur-2xl transition-all duration-700 ease-out pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgb(var(--github-accent-emphasis)) 0%, rgb(168 85 247) 50%, transparent 100%)`,
              left: `${smoothPosition.x}%`,
              top: `${smoothPosition.y}%`,
              transform: `translate(-50%, -50%) scale(${
                isHovered ? 1.3 : 0.6
              })`,
            }}
          />

          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-github-canvas-subtle/20 via-transparent to-github-canvas-overlay/10 backdrop-blur-[0.5px]" />
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          <div className="text-center">
            <div className="mb-6 relative">
              {/* Animated Icon Container */}
              <div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-github-accent-emphasis to-blue-600 rounded-3xl shadow-2xl relative overflow-hidden group cursor-pointer"
                style={{
                  transform: `translateY(${isHovered ? -3 : 0}px) scale(${
                    isHovered ? 1.03 : 1
                  })`,
                  transition: "all 0.4s ease",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Sparkles className="w-10 h-10 text-white relative z-10 transform group-hover:rotate-6 transition-transform duration-700" />
                <div className="absolute -inset-2 bg-gradient-to-r from-github-accent-emphasis to-blue-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-700"></div>
              </div>
            </div>

            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-github-fg-default mb-4 tracking-tight">
                Portal de
                <span className="block bg-gradient-to-r from-github-accent-emphasis via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Documentação
                </span>
              </h1>
            </div>

            <p className="text-xl text-github-fg-muted max-w-3xl mx-auto mb-10 leading-relaxed">
              Acesse a documentação legal de todos os nossos aplicativos em um
              só lugar. Mantenha-se informado sobre termos de uso, políticas de
              privacidade e diretrizes.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/as-bi/termos-de-uso"
                className="group inline-flex items-center px-8 py-4 bg-github-accent-emphasis/90 backdrop-blur-sm text-white rounded-2xl hover:bg-github-accent-emphasis transition-all duration-300 font-medium shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
              >
                <FileText className="w-6 h-6 mr-3 group-hover:rotate-3 transition-transform duration-300" />
                Ver Documentação AS BI
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="https://aguiarsistemas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-github-canvas-overlay/80 backdrop-blur-sm text-github-fg-default border border-github-border-default/50 rounded-2xl hover:bg-github-canvas-overlay transition-all duration-300 font-medium transform hover:scale-105 shadow-xl"
              >
                <Globe className="w-6 h-6 mr-3 group-hover:rotate-6 transition-transform duration-300" />
                Aguiar Sistemas
                <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group text-center bg-github-canvas-overlay/60 backdrop-blur-md rounded-2xl p-6 border border-github-border-default/30 hover:border-github-accent-emphasis/50 transition-all duration-300 hover:bg-github-canvas-overlay/80 transform hover:scale-105 cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-github-canvas-subtle/80 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-github-accent-emphasis/10 transition-all duration-300">
                    <stat.icon className="w-7 h-7 text-github-accent-fg group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-github-fg-default mb-1">
                    {stat.value}
                  </div>
                  <div className="text-base text-github-fg-muted font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-github-fg-muted">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-github-fg-default mb-3">
            Nossos Aplicativos
          </h2>
          <p className="text-lg text-github-fg-muted max-w-xl mx-auto">
            Explore a documentação de cada aplicativo da Aguiar Sistemas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {applications.map((app, index) => (
            <div
              key={index}
              className="github-card bg-github-canvas-overlay border border-github-border-default rounded-xl p-6 hover:border-github-border-emphasis transition-all duration-200 group hover:shadow-lg"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-github-accent-emphasis to-blue-600 rounded-lg shadow-sm">
                  <app.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-github-fg-default">
                      {app.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${app.color} ${app.textColor}`}
                    >
                      {app.status}
                    </span>
                  </div>
                  <p className="text-github-fg-muted leading-relaxed text-sm">
                    {app.description}
                  </p>
                </div>
              </div>

              {app.links.length > 0 && (
                <div className="space-y-3 mb-4">
                  <h4 className="text-base font-semibold text-github-fg-default flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-github-accent-fg" />
                    Documentos Disponíveis
                  </h4>

                  <div className="grid gap-2">
                    {app.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={link.href}
                        className="flex items-center justify-between p-3 border border-github-border-default rounded-lg hover:border-github-accent-emphasis hover:bg-github-canvas-subtle transition-all duration-200 group"
                      >
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-3 text-github-fg-muted group-hover:text-github-accent-fg" />
                          <span className="font-medium text-github-fg-default text-sm">
                            {link.name}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-github-fg-muted group-hover:text-github-accent-fg" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {app.links.length === 0 && (
                <div className="text-center py-6">
                  <Clock className="w-8 h-8 text-github-fg-muted mx-auto mb-2" />
                  <p className="text-github-fg-muted text-sm">
                    Documentação em desenvolvimento
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-github-fg-muted pt-3 border-t border-github-border-muted">
                <span>Última atualização:</span>
                <span className="font-medium">Janeiro 2025</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-github-canvas-subtle border-t border-github-border-default py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-github-fg-default mb-3">
              Por que usar nosso Portal?
            </h2>
            <p className="text-lg text-github-fg-muted max-w-xl mx-auto">
              Centralizamos toda a documentação legal para sua conveniência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center github-card bg-github-canvas-default border border-github-border-default rounded-xl p-6 hover:border-github-border-emphasis transition-all duration-200 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-github-canvas-subtle rounded-xl mb-4">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                <h3 className="text-lg font-semibold text-github-fg-default mb-2">
                  {feature.title}
                </h3>

                <p className="text-github-fg-muted leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-github-accent-emphasis to-blue-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Precisa de Suporte?
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-xl mx-auto">
            Nossa equipe está sempre pronta para ajudar com questões sobre
            nossos aplicativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:suporte@aguiarsistemas.com.br"
              className="inline-flex items-center px-6 py-3 bg-white text-github-accent-emphasis rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium transform hover:scale-105"
            >
              <FileText className="w-5 h-5 mr-2" />
              Suporte Técnico
            </a>
            <a
              href="mailto:contato@aguiarsistemas.com.br"
              className="inline-flex items-center px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-github-accent-emphasis transition-all duration-200 font-medium transform hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" />
              Contato Comercial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
