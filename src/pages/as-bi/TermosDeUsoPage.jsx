import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BarChart3,
  FileText,
  Info,
  Smartphone,
  CheckSquare,
  Users,
  ArrowLeft,
  ExternalLink,
  Calendar,
  Shield,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import GlassCard from "../../components/GlassCard";
import IconContainer from "../../components/IconContainer";

const TermosDeUsoPage = () => {
  const breadcrumbItems = [
    {
      label: "AS BI",
      href: "/docs",
    },
    {
      label: "Termos de Uso",
    },
  ];

  const sections = [
    {
      id: "introducao",
      title: "1. Introdução",
      icon: Info,
      content: (
        <div className="space-y-4">
          <p>
            Bem-vindo ao AS BI (Aguiar Sistemas Business Intelligence). Estes
            Termos de Uso estabelecem as condições gerais de utilização da nossa
            plataforma de análise de dados e business intelligence.
          </p>
          <p>
            Ao acessar ou utilizar o AS BI, você concorda em cumprir estes
            termos. Se não concordar com qualquer parte destes termos, não
            utilize nossa plataforma.
          </p>
        </div>
      ),
    },
    {
      id: "definicoes",
      title: "2. Definições",
      icon: FileText,
      content: (
        <div className="space-y-4">
          {" "}
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              AS BI:
            </h4>
            <p>
              Plataforma de Business Intelligence desenvolvida pela Aguiar
              Sistemas LTDA.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Usuário:
            </h4>
            <p>
              Qualquer pessoa física ou jurídica que acesse ou utilize a
              plataforma AS BI.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Dados:
            </h4>
            <p>
              Informações inseridas, processadas ou armazenadas na plataforma
              pelo usuário.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "uso-plataforma",
      title: "3. Uso da Plataforma",
      icon: Smartphone,
      content: (
        <div className="space-y-4">
          <p>
            O AS BI é uma ferramenta profissional destinada à análise de dados
            empresariais. O usuário compromete-se a:
          </p>{" "}
          <ul className="list-disc list-inside space-y-2 text-github-fg-muted">
            <li>
              Utilizar a plataforma apenas para fins legítimos e comerciais
            </li>
            <li>Não tentar violar a segurança do sistema</li>
            <li>Manter a confidencialidade de suas credenciais de acesso</li>
            <li>Respeitar os direitos de propriedade intelectual</li>
            <li>Não sobrecarregar indevidamente o sistema</li>
          </ul>
        </div>
      ),
    },
    {
      id: "responsabilidades",
      title: "4. Responsabilidades",
      icon: CheckSquare,
      content: (
        <div className="space-y-4">
          {" "}
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Do Usuário:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
              <li>Fornecer informações precisas e atualizadas</li>
              <li>Manter seus dados seguros e protegidos</li>
              <li>Utilizar a plataforma conforme os termos estabelecidos</li>
              <li>Reportar problemas ou vulnerabilidades identificadas</li>
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-github-fg-default mb-2">
              Da Aguiar Sistemas:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
              <li>Manter a plataforma funcionando adequadamente</li>
              <li>Proteger os dados conforme nossa Política de Privacidade</li>
              <li>Fornecer suporte técnico durante horário comercial</li>
              <li>Notificar sobre atualizações importantes</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "limitacoes",
      title: "5. Limitações e Exclusões",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>A Aguiar Sistemas não se responsabiliza por:</p>{" "}
          <ul className="list-disc list-inside space-y-2 text-github-fg-muted">
            <li>Perda de dados causada por uso inadequado da plataforma</li>
            <li>Interrupções temporárias do serviço para manutenção</li>
            <li>Decisões comerciais baseadas nas análises fornecidas</li>
            <li>Problemas decorrentes de conexão de internet do usuário</li>
            <li>Uso não autorizado por terceiros das credenciais do usuário</li>
          </ul>
        </div>
      ),
    },
    {
      id: "propriedade",
      title: "6. Propriedade Intelectual",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p>
            Todos os direitos de propriedade intelectual relacionados ao AS BI,
            incluindo mas não limitado a código-fonte, design, funcionalidades e
            documentação, pertencem exclusivamente à Aguiar Sistemas LTDA.
          </p>
          <p>
            Os dados inseridos pelo usuário permanecem de sua propriedade, sendo
            utilizados pela plataforma apenas para fornecer os serviços
            contratados.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen bg-github-canvas-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} className="mb-6" />
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <IconContainer size="lg" variant="primary">
                <FileText className="w-6 h-6" />
              </IconContainer>{" "}
              <div>
                <h1 className="text-4xl font-bold text-github-fg-default mb-2">
                  Termos de Uso - AS BI
                </h1>
                <p className="text-lg text-github-fg-muted">
                  Business Intelligence • Aguiar Sistemas
                </p>
              </div>
            </div>{" "}
            <Link
              to="/"
              className="bg-github-canvas-subtle hover:bg-github-canvas-overlay text-github-fg-default border border-github-border-default rounded-lg px-4 py-2 transition-colors duration-200 flex items-center"
              aria-label="Voltar ao início"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </div>{" "}
          {/* Meta info */}
          <GlassCard className="flex items-center justify-between text-sm text-github-fg-muted bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Última atualização: Janeiro 2025</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span>Versão 2.1</span>
              </div>
            </div>

            <Link
              to="/as-bi/politica-de-privacidade"
              className="text-github-accent-fg hover:text-github-accent-emphasis transition-colors duration-200 flex items-center"
            >
              <span>Política de Privacidade</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
          </GlassCard>
        </div>
        {/* Content */}
        <div className="space-y-8">
          {sections.map((section) => (
            <GlassCard key={section.id} id={section.id}>
              <div className="flex items-center space-x-3 mb-6">
                <IconContainer size="md" variant="primary">
                  <section.icon className="w-5 h-5" />
                </IconContainer>{" "}
                <h2 className="text-2xl font-bold text-github-fg-default">
                  {section.title}
                </h2>
              </div>

              <div className="prose prose-gray text-github-fg-default">
                {section.content}
              </div>
            </GlassCard>
          ))}
        </div>{" "}
        {/* Navigation Footer */}
        <div className="mt-12 pt-8 border-t border-github-border-default">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <Link
              to="/"
              className="bg-github-canvas-subtle hover:bg-github-canvas-overlay text-github-fg-default border border-github-border-default rounded-lg px-4 py-2 transition-colors duration-200 flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Portal
            </Link>

            <Link
              to="/as-bi/politica-de-privacidade"
              className="bg-github-accent-emphasis hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors duration-200 flex items-center"
            >
              <span>Política de Privacidade</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermosDeUsoPage;
