import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BarChart3,
  Lock,
  Info,
  CheckCircle,
  FileText,
  Mail,
  Globe,
  Database,
  Settings,
  Shield,
  Share,
  Target,
  Users,
  ArrowLeft,
  ExternalLink,
  Calendar,
  Eye,
  UserCheck,
  Trash2,
  Download,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import GlassCard from "../../components/GlassCard";
import IconContainer from "../../components/IconContainer";

const PoliticaDePrivacidadePage = () => {
  const breadcrumbItems = [
    {
      label: "AS BI",
      href: "/docs",
    },
    {
      label: "Política de Privacidade",
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
            A Aguiar Sistemas LTDA está comprometida com a proteção da
            privacidade e segurança dos dados pessoais dos usuários do AS BI.
            Esta Política de Privacidade descreve como coletamos, usamos,
            armazenamos e protegemos suas informações.
          </p>
          <p>
            Esta política está em conformidade com a Lei Geral de Proteção de
            Dados (LGPD) e outras regulamentações aplicáveis de proteção de
            dados.
          </p>
        </div>
      ),
    },
    {
      id: "coleta-dados",
      title: "2. Coleta de Dados",
      icon: Database,
      content: (
        <div className="space-y-4">
          <p>Coletamos os seguintes tipos de dados:</p>

          <div className="space-y-4">
            <div>
              {" "}
              <h4 className="font-semibold text-github-fg-default mb-2">
                Dados de Identificação:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
                <li>Nome</li>
                <li>Código de usuário</li>
                <li>Nome da empresa</li>
                <li>CNPJ</li>
                <li>Serial (código de identifiação interno)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-github-fg-default mb-2">
                Dados de Uso:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
                <li>Logs de acesso e navegação</li>
                <li>Relatórios gerados e visualizados</li>
                <li>Configurações personalizadas</li>
                <li>Tempo de uso da plataforma</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-github-fg-default mb-2">
                Dados Técnicos:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Sistema operacional</li>
                <li>Informações de performance</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "finalidade",
      title: "3. Finalidade do Tratamento",
      icon: Target,
      content: (
        <div className="space-y-4">
          <p>Utilizamos seus dados pessoais para:</p>

          <div className="grid gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                {" "}
                <h5 className="font-medium text-github-fg-default">
                  Prestação do Serviço
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Fornecer acesso e funcionalidades da plataforma AS BI
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Suporte Técnico
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Oferecer assistência e resolver problemas técnicos
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Melhorias e Atualizações
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Aprimorar funcionalidades e desenvolver novos recursos
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Segurança
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Detectar e prevenir atividades suspeitas ou fraudulentas
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Comunicação
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Enviar notificações importantes sobre o serviço
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "compartilhamento",
      title: "4. Compartilhamento de Dados",
      icon: Share,
      content: (
        <div className="space-y-4">
          <p>
            A Aguiar Sistemas não vende, aluga ou compartilha dados pessoais com
            terceiros, exceto nas seguintes situações:
          </p>{" "}
          <ul className="list-disc list-inside space-y-2 text-github-fg-muted">
            <li>Quando exigido por lei ou ordem judicial</li>
            <li>Para proteção dos direitos e segurança da empresa</li>
            <li>
              Com prestadores de serviços essenciais (sob rigorosos contratos de
              confidencialidade)
            </li>
            <li>
              Em caso de fusão, aquisição ou reestruturação empresarial (com
              notificação prévia)
            </li>
          </ul>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h5 className="font-medium text-blue-900 dark:text-blue-200 mb-1">
                  Garantia de Proteção
                </h5>
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  Todos os terceiros que eventualmente acessem dados pessoais
                  devem seguir padrões de segurança equivalentes aos nossos.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "seguranca",
      title: "5. Segurança dos Dados",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>
            Implementamos medidas técnicas e organizacionais robustas para
            proteger seus dados:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {" "}
            <div className="space-y-3">
              <h5 className="font-medium text-github-fg-default">
                Medidas Técnicas:
              </h5>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted text-sm">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Autenticação de dois fatores</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups regulares e seguros</li>
                <li>Firewall e sistemas de detecção de intrusão</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="font-medium text-github-fg-default">
                Medidas Organizacionais:
              </h5>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted text-sm">
                <li>Treinamento regular da equipe</li>
                <li>Controle de acesso baseado em funções</li>
                <li>Políticas internas de segurança</li>
                <li>Auditoria periódica dos sistemas</li>
                <li>Plano de resposta a incidentes</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "direitos-usuario",
      title: "6. Direitos do Usuário",
      icon: UserCheck,
      content: (
        <div className="space-y-4">
          <p>
            Conforme a LGPD, você possui os seguintes direitos sobre seus dados
            pessoais:
          </p>{" "}
          <div className="grid gap-3">
            {[
              {
                icon: Eye,
                title: "Acesso",
                desc: "Solicitar acesso aos seus dados pessoais",
              },
              {
                icon: Settings,
                title: "Correção",
                desc: "Corrigir dados incompletos ou desatualizados",
              },
              {
                icon: Trash2,
                title: "Exclusão",
                desc: "Solicitar a exclusão de dados desnecessários",
              },
              {
                icon: Download,
                title: "Portabilidade",
                desc: "Receber seus dados em formato estruturado",
              },
              {
                icon: Lock,
                title: "Oposição",
                desc: "Opor-se ao tratamento em certas situações",
              },
              {
                icon: Info,
                title: "Informação",
                desc: "Obter informações sobre o tratamento",
              },
            ].map((right, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 border border-github-border-default rounded-lg"
              >
                <right.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h5 className="font-medium text-github-fg-default">
                    {right.title}
                  </h5>
                  <p className="text-github-fg-muted text-sm">{right.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-github-canvas-subtle border border-github-border-default rounded-lg p-4 mt-6">
            <h5 className="font-medium text-github-fg-default mb-2">
              Como Exercer Seus Direitos:
            </h5>
            <p className="text-github-fg-muted text-sm mb-3">
              Para exercer qualquer destes direitos, entre em contato conosco:
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-github-fg-muted" />
                <span>suporte@aguiarsistemas.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-github-fg-muted" />
                <span>www.aguiarsistemas.com.br</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contato",
      title: "7. Contato e DPO",
      icon: Mail,
      content: (
        <div className="space-y-4">
          <p>
            Para questões relacionadas à proteção de dados e privacidade, entre
            em contato com nosso Encarregado de Proteção de Dados (DPO):
          </p>{" "}
          <div className="bg-github-canvas-overlay border border-github-border-default rounded-lg p-6">
            <h5 className="font-medium text-github-fg-default mb-4">
              Informações de Contato:
            </h5>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-github-fg-muted" />
                <div>
                  <span className="font-medium">E-mail:</span>
                  <span className="ml-2">suporte@aguiarsistemas.com.br</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-github-fg-muted" />
                <div>
                  <span className="font-medium">Site:</span>
                  <span className="ml-2">www.aguiarsistemas.com.br</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Home className="w-5 h-5 text-github-fg-muted mt-0.5" />
                <div>
                  <span className="font-medium">Endereço:</span>
                  <address className="ml-2 not-italic text-github-fg-muted">
                    Aguiar Sistemas LTDA
                    <br />
                    Imperatriz, MA - Brasil
                  </address>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-github-fg-muted">
            <strong>Tempo de Resposta:</strong> Responderemos às suas
            solicitações em até 15 dias úteis, conforme estabelecido pela LGPD.
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
              <IconContainer size="lg" variant="info">
                <Lock className="w-6 h-6" />
              </IconContainer>{" "}
              <div>
                <h1 className="text-4xl font-bold text-github-fg-default mb-2">
                  Política de Privacidade - AS BI
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
          <GlassCard className="flex items-center justify-between text-sm text-github-fg-muted bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Última atualização: Janeiro 2025</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span>Versão 2.1 • Conforme LGPD</span>
              </div>
            </div>

            <Link
              to="/as-bi/termos-de-uso"
              className="text-github-accent-fg hover:text-github-accent-emphasis transition-colors duration-200 flex items-center"
            >
              <span>Termos de Uso</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
          </GlassCard>
        </div>
        {/* Content */}
        <div className="space-y-8">
          {sections.map((section) => (
            <GlassCard key={section.id} id={section.id}>
              <div className="flex items-center space-x-3 mb-6">
                <IconContainer size="md" variant="info">
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
              to="/as-bi/termos-de-uso"
              className="bg-github-accent-emphasis hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors duration-200 flex items-center"
            >
              <span>Termos de Uso</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidadePage;
