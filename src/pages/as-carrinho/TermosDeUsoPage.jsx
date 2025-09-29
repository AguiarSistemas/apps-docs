import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  CheckSquare,
  ExternalLink,
  FileText,
  Home,
  Info,
  Package,
  Shield,
  Smartphone,
  Users,
  BarChart3,
  FileSignature,
  Send,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import GlassCard from "../../components/GlassCard";
import IconContainer from "../../components/IconContainer";

const TermosDeUsoPage = () => {
  const breadcrumbItems = [
    {
      label: "As Carrinho",
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
            Bem-vindo ao As Carrinho. Estes Termos de Uso estabelecem as
            condições para a utilização da nossa ferramenta de pré-venda e
            criação de orçamentos, destinada ao uso exclusivo dos vendedores da
            empresa.
          </p>
          <p>
            Ao acessar ou utilizar o As Carrinho, você, como vendedor, concorda
            em cumprir estes termos. A plataforma foi desenvolvida para
            otimizar o processo de vendas presenciais e integrar orçamentos ao
            nosso sistema Gestore.
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
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              As Carrinho:
            </h4>
            <p>
              Ferramenta de pré-venda para criação de orçamentos, desenvolvida
              pela Aguiar Sistemas LTDA.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Usuário (Vendedor):
            </h4>
            <p>
              Colaborador autorizado pela empresa para utilizar a plataforma
              para fins de pré-venda.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Orçamento:
            </h4>
            <p>
              Documento de pré-venda criado na plataforma, contendo produtos e
              condições comerciais para um cliente.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Gestore:
            </h4>
            <p>
              Nosso sistema de Gestão Empresarial (ERP), integrado ao As
              Carrinho para onde os orçamentos são enviados.
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
            O As Carrinho é uma ferramenta profissional destinada a agilizar o
            trabalho dos vendedores. O usuário compromete-se a:
          </p>
          <ul className="list-disc list-inside space-y-2 text-github-fg-muted">
            <li>Utilizar a plataforma apenas para fins profissionais legítimos.</li>
            <li>Não tentar violar a segurança do sistema ou do Gestore.</li>
            <li>
              Manter a confidencialidade de suas credenciais de acesso (login e
              senha).
            </li>
            <li>Respeitar os direitos de propriedade intelectual.</li>
            <li>Não sobrecarregar indevidamente o sistema.</li>
            <li>Inserir informações precisas e corretas nos orçamentos.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "criacao-orcamentos",
      title: "4. Criação e Envio de Orçamentos",
      icon: FileSignature,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Processo de Pré-Venda:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
              <li>Identificação do cliente e seleção de produtos.</li>
              <li>Definição de quantidades, preços e condições.</li>
              <li>Geração do orçamento na plataforma.</li>
              <li>Revisão e confirmação dos dados pelo vendedor.</li>
              <li>Envio do orçamento para o sistema Gestore da empresa.</li>
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-github-fg-default mb-2">
              Validade dos Orçamentos:
            </h4>
            <p className="text-github-fg-muted">
              As condições comerciais, preços e disponibilidade de estoque
              refletidos no orçamento são validados e gerenciados pelo Gestore
              após o envio. A plataforma As Carrinho funciona como um ponto de
              entrada de dados.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "responsabilidades",
      title: "5. Responsabilidades",
      icon: CheckSquare,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Do Vendedor:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
              <li>Garantir a precisão das informações inseridas.</li>
              <li>Proteger suas credenciais de acesso contra uso não autorizado.</li>
              <li>Utilizar a ferramenta de acordo com as políticas da empresa.</li>
              <li>Reportar problemas ou vulnerabilidades identificadas.</li>
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-github-fg-default mb-2">
              Da Aguiar Sistemas:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
              <li>Manter a plataforma funcionando adequadamente.</li>
              <li>Proteger os dados conforme nossa Política de Privacidade.</li>
              <li>Garantir a integração segura com o sistema Gestore.</li>
              <li>Fornecer suporte técnico durante o horário comercial.</li>
              <li>Notificar sobre atualizações importantes na ferramenta.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "limitacoes",
      title: "6. Limitações e Exclusões",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>A Aguiar Sistemas não se responsabiliza por:</p>
          <ul className="list-disc list-inside space-y-2 text-github-fg-muted">
            <li>
              Erros de digitação ou de inserção de dados cometidos pelo
              vendedor.
            </li>
            <li>
              Decisões comerciais baseadas em orçamentos ainda não confirmados
              pelo Gestore.
            </li>
            <li>Interrupções temporárias do serviço para manutenção.</li>
            <li>Problemas decorrentes de conexão de internet do usuário.</li>
            <li>Uso não autorizado das credenciais do vendedor por terceiros.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "propriedade",
      title: "7. Propriedade Intelectual",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p>
            Todos os direitos de propriedade intelectual relacionados ao As
            Carrinho, incluindo código-fonte, design e funcionalidades,
            pertencem exclusivamente à Aguiar Sistemas LTDA.
          </p>
          <p>
            Os dados dos orçamentos e dos clientes inseridos na plataforma são de
            propriedade da empresa contratante, sendo utilizados pela
            plataforma apenas para os fins de pré-venda descritos.
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
                <FileText className="w-6 h-6" />
              </IconContainer>
              <div>
                <h1 className="text-4xl font-bold text-github-fg-default mb-2">
                  Termos de Uso - As Carrinho
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
                <span>Uso Interno • Versão 2.1</span>
              </div>
            </div>

            <Link
              to="/as-carrinho/politica-de-privacidade"
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
              to="/as-carrinho/politica-de-privacidade"
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