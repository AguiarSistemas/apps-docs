import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Database,
  Download,
  Eye,
  ExternalLink,
  Globe,
  Home,
  Info,
  Lock,
  Mail,
  Settings,
  Share,
  Shield,
  Target,
  Trash2,
  UserCheck,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import GlassCard from "../../components/GlassCard";
import IconContainer from "../../components/IconContainer";

const PoliticaDePrivacidadePage = () => {
  const breadcrumbItems = [
    {
      label: "As Carrinho",
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
            privacidade e segurança dos dados pessoais dos{" "}
            <strong>usuários (vendedores)</strong> do As Carrinho. Esta Política
            de Privacidade descreve como coletamos, usamos e protegemos as
            informações inseridas na ferramenta.
          </p>
          <p>
            Esta política está em conformidade com a Lei Geral de Proteção de
            Dados (LGPD), focando na proteção dos dados dos colaboradores que
            utilizam a plataforma e dos dados de clientes inseridos nos
            orçamentos.
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
          <p>
            Coletamos os seguintes tipos de dados para a operação da ferramenta:
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-github-fg-default mb-2">
                Dados do Usuário (Vendedor):
              </h4>
              <p className="text-github-fg-muted mb-2 text-sm">
                As informações dos vendedores são sincronizadas diretamente do
                cadastro existente no sistema Gestore.
              </p>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
                <li>Nome completo</li>
                <li>CPF ou CNPJ</li>
                <li>Endereço</li>
                <li>Credenciais de acesso (login/senha) para a plataforma</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-github-fg-default mb-2">
                Dados do Orçamento (Inseridos pelo Vendedor):
              </h4>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
                <li>Dados de identificação do cliente final (nome, CPF/CNPJ)</li>
                <li>Produtos, quantidades e valores do orçamento</li>
                <li>Histórico de orçamentos criados</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-github-fg-default mb-2">
                Dados Técnicos e de Uso da Plataforma:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
                <li>Endereço IP e logs de acesso</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Ações realizadas na plataforma (criação, edição de orçamentos)</li>
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
          <p>Utilizamos os dados coletados para:</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <UserCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Operação da Ferramenta
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Permitir a criação e o envio de orçamentos para o Gestore.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Segurança e Auditoria
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Rastrear acessos e modificações para garantir a segurança.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Suporte Técnico
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Resolver problemas e oferecer assistência aos vendedores.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Globe className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Melhorias na Plataforma
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Analisar o uso para aprimorar funcionalidades.
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
            O compartilhamento de dados é restrito e ocorre apenas nas
            seguintes situações:
          </p>
          <ul className="list-disc list-inside space-y-2 text-github-fg-muted">
            <li>
              <strong>Com o Gestore da Empresa:</strong> Finalidade principal da
              ferramenta, para consolidar os orçamentos.
            </li>
            <li>
              <strong>Obrigações Legais:</strong> Quando exigido por lei ou
              ordem judicial.
            </li>
            <li>
              <strong>Para Suporte Técnico:</strong> Acesso pontual pela equipe da
              Aguiar Sistemas para resolver problemas, sob confidencialidade.
            </li>
          </ul>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h5 className="font-medium text-blue-900 dark:text-blue-200 mb-1">
                  Ambiente Controlado
                </h5>
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  Os dados não são compartilhados com terceiros para fins de
                  marketing ou qualquer outra finalidade não descrita aqui.
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
            proteger os dados inseridos na plataforma:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h5 className="font-medium text-github-fg-default">
                Medidas Técnicas:
              </h5>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted text-sm">
                <li>Criptografia de dados em trânsito (SSL/TLS) e em repouso.</li>
                <li>Autenticação segura de usuários.</li>
                <li>Monitoramento contínuo de segurança e logs de acesso.</li>
                <li>Backups regulares e seguros.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="font-medium text-github-fg-default">
                Medidas Organizacionais:
              </h5>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted text-sm">
                <li>Controle de acesso baseado na função do vendedor.</li>
                <li>Políticas internas de segurança da informação.</li>
                <li>Treinamento da equipe sobre proteção de dados.</li>
                <li>Acordos de confidencialidade com a equipe de suporte.</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "direitos-usuario",
      title: "6. Direitos dos Titulares",
      icon: UserCheck,
      content: (
        <div className="space-y-4">
          <p>
            Garantimos os direitos dos titulares de dados (vendedores e
            clientes finais) conforme a LGPD:
          </p>
          <div className="grid gap-3">
            {[
              {
                icon: Eye,
                title: "Acesso",
                desc: "Solicitar acesso aos dados pessoais tratados.",
              },
              {
                icon: Settings,
                title: "Correção",
                desc: "Corrigir dados incompletos, inexatos ou desatualizados.",
              },
              {
                icon: Trash2,
                title: "Exclusão",
                desc: "Solicitar a exclusão de dados, respeitando as obrigações legais.",
              },
              {
                icon: Info,
                title: "Informação",
                desc: "Obter informações sobre o tratamento e compartilhamento.",
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
              As solicitações devem ser direcionadas ao Encarregado de Proteção
              de Dados (DPO) da sua empresa, que nos contatará se necessário.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "contato",
      title: "7. Contato",
      icon: Mail,
      content: (
        <div className="space-y-4">
          <p>
            Para questões técnicas sobre a plataforma As Carrinho, o canal de
            contato é nosso suporte técnico:
          </p>
          <div className="bg-github-canvas-overlay border border-github-border-default rounded-lg p-6">
            <h5 className="font-medium text-github-fg-default mb-4">
              Informações de Contato:
            </h5>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-github-fg-muted" />
                <div>
                  <span className="font-medium">Site:</span>
                  <span className="ml-2">www.aguiarsistemas.com.br</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-github-fg-muted">
            <strong>Nota:</strong> Para questões relacionadas à privacidade e
            exercício de direitos da LGPD, consulte o DPO da sua empresa.
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
              </IconContainer>
              <div>
                <h1 className="text-4xl font-bold text-github-fg-default mb-2">
                  Política de Privacidade - As Carrinho
                </h1>
                <p className="text-lg text-github-fg-muted">
                  Ferramenta de Pré-venda • Aguiar Sistemas
                </p>
              </div>
            </div>
            <Link
              to="/"
              className="bg-github-canvas-subtle hover:bg-github-canvas-overlay text-github-fg-default border border-github-border-default rounded-lg px-4 py-2 transition-colors duration-200 flex items-center"
              aria-label="Voltar ao início"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </div>
          {/* Meta info */}
          <GlassCard className="flex items-center justify-between text-sm text-github-fg-muted bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Última atualização: Janeiro 2025</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span>Uso Interno • Versão 2.1 • Conforme LGPD</span>
              </div>
            </div>

            <Link
              to="/as-carrinho/termos-de-uso"
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
                </IconContainer>
                <h2 className="text-2xl font-bold text-github-fg-default">
                  {section.title}
                </h2>
              </div>

              <div className="prose prose-gray text-github-fg-default">
                {section.content}
              </div>
            </GlassCard>
          ))}
        </div>
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
              to="/as-carrinho/termos-de-uso"
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