import { LAWYER_DATA } from '../data';

export interface LegalDocument {
  id: 'termos' | 'privacidade';
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const LEGAL_DOCS: Record<'termos' | 'privacidade', LegalDocument> = {
  termos: {
    id: 'termos',
    title: 'Termos de Uso do Website',
    subtitle: 'Diretrizes de utilização, finalidade informativa e conformidade ética com a OAB',
    lastUpdated: '14 de Agosto de 2026',
    sections: [
      {
        heading: '1. Caráter Informativo e Não Vinculante',
        content: [
          'Este website foi desenvolvido com propósito estritamente informativo, institucional e educacional pelo escritório Advocacia Helfstein, sob responsabilidade técnica do Dr. Marcelo Vieira Helfstein da Silva (OAB/SP 489.578).',
          'O conteúdo disponibilizado em artigos, textos explicativos, áreas de atuação e respostas de dúvidas frequentes não configura parecer jurídico formal, consulta vinculante ou promessa de resultado, haja vista que a advocacia é atividade de meio e não de fim.',
          'A leitura ou o envio de mensagens através deste portal não estabelece, de forma isolada, relação contratual de cliente-advogado, a qual dependerá de formalização expressa mediante Contrato de Prestação de Serviços Jurídicos e Procuração Ad Judicia.'
        ]
      },
      {
        heading: '2. Conformidade com o Código de Ética e Provimento nº 205/2021 do CFOAB',
        content: [
          'Todas as informações, comunicações e elementos visuais deste site obedecem rigorosamente ao Código de Ética e Disciplina da OAB e ao Provimento nº 205/2021 do Conselho Federal da OAB, que disciplina o marketing jurídico.',
          'É expressamente vedada qualquer forma de captação indevida de clientela, mercantilização da profissão ou promessas de resultados garantidos perante o Poder Judiciário.'
        ]
      },
      {
        heading: '3. Propriedade Intelectual',
        content: [
          'Todos os textos, logotipos, identidades visuais e estruturas de código presentes neste domínio são de titularidade da Advocacia Helfstein ou licenciados para seu uso, sendo vedada a reprodução comercial sem prévia e expressa autorização.'
        ]
      },
      {
        heading: '4. Foro e Legislação Aplicável',
        content: [
          'Estes termos são regidos pelas leis da República Federativa do Brasil e pelas normativas da Ordem dos Advogados do Brasil, elegendo-se a Comarca de Capão Bonito/SP para dirimir eventuais controvérsias.'
        ]
      }
    ]
  },
  privacidade: {
    id: 'privacidade',
    title: 'Política de Privacidade & Proteção de Dados (LGPD)',
    subtitle: 'Tratamento de dados pessoais em conformidade com a Lei nº 13.709/2018 e Sigilo Profissional da OAB',
    lastUpdated: '14 de Agosto de 2026',
    sections: [
      {
        heading: '1. Controlador de Dados e Compromisso de Sigilo',
        content: [
          `O controlador dos dados tratados neste website é a Advocacia Helfstein, representada pelo Dr. Marcelo Vieira Helfstein da Silva (${LAWYER_DATA.oab}), com sede na ${LAWYER_DATA.phoneFormatted}.`,
          'Além da estrita observância à Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), todo e qualquer dado ou documento confiado a este escritório goza da proteção do Sigilo Profissional da Advocacia, resguardado pelo artigo 7º, II, e artigo 34, VII, da Lei Federal nº 8.906/1994 (Estatuto da Advocacia).'
        ]
      },
      {
        heading: '2. Dados Coletados e Finalidade do Tratamento',
        content: [
          'Coletamos apenas os dados estritamente necessários fornecidos voluntariamente por você através de formulários de triagem ou WhatsApp: Nome, Telefone/WhatsApp, Cidade e breve descrição do caso.',
          'Finalidade: Realizar o contato inicial, compreender a natureza da demanda jurídica, verificar eventual conflito de interesses ético e agendar consultas presenciais ou por videoconferência.',
          'Não comercializamos, alugamos ou compartilhamos dados pessoais com terceiros para fins de marketing ou publicidade em nenhuma hipótese.'
        ]
      },
      {
        heading: '3. Armazenamento e Segurança da Informação',
        content: [
          'Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais contra acessos não autorizados, perdas ou alterações ilícitas, utilizando protocolos seguros HTTPS/SSL e criptografia de ponta a ponta nas comunicações.',
          'Os dados fornecidos em consultas prévias são mantidos pelo período estritamente necessário ao cumprimento de obrigações legais, regulatórias ou até eventual formalização contratual.'
        ]
      },
      {
        heading: '4. Direitos do Titular dos Dados (Art. 18 da LGPD)',
        content: [
          'Você possui o direito de solicitar a qualquer momento: (a) confirmação da existência de tratamento; (b) acesso aos dados; (c) correção de dados incompletos ou inexatos; (d) eliminação de dados tratados com seu consentimento; e (e) revogação do consentimento.',
          `Para exercer seus direitos como titular de dados, entre em contato diretamente pelo e-mail: ${LAWYER_DATA.email} ou pelo canal de WhatsApp oficial.`
        ]
      }
    ]
  }
};
