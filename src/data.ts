import { PracticeArea, Testimonial, OfficeLocation } from './types';

export const LAWYER_DATA = {
  name: 'Advocacia Helfstein',
  lawyerName: 'Dr. Marcelo Vieira Helfstein da Silva',
  oab: 'OAB/SP: 489.578',
  phoneFormatted: '(15) 99609-1651',
  phoneRaw: '5515996091651',
  slogan: 'Somos RESULTADO e COMPROMISSO',
  email: 'contato@advocaciahelfstein.adv.br',
  instagram: 'https://instagram.com',
  googleReviewsCount: '+60',
  defaultWhatsAppMessage: 'Olá Dr. Marcelo, vi sua página e gostaria de agendar uma consulta.',
};

export const getWhatsAppLink = (customMessage?: string) => {
  const message = customMessage || LAWYER_DATA.defaultWhatsAppMessage;
  return `https://wa.me/${LAWYER_DATA.phoneRaw}?text=${encodeURIComponent(message)}`;
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil-contratos',
    title: 'Direito Civil & Contratos',
    shortDesc: 'Segurança patrimonial, elaboração de contratos complexos, cobranças judiciais e indenizações.',
    fullDesc: 'Assessoria completa em disputas contratuais, renegociação de dívidas de grande porte, ações indenizatórias por perdas e danos, responsabilidade civil e regularização de bens imóveis.',
    iconName: 'file-text',
    items: [
      'Contratos Comerciais e Imobiliários',
      'Ações de Cobrança e Execução de Títulos',
      'Indenizações por Danos Morais e Materiais',
      'Disputas de Posse e Propriedade'
    ],
    ctaMessage: 'Olá Dr. Marcelo, gostaria de atendimento na área de Direito Civil e Contratos.'
  },
  {
    id: 'familia-sucessoes',
    title: 'Direito de Família & Sucessões',
    shortDesc: 'Inventários ágeis, divórcios, partilha de patrimônio e proteção sucessória com discrição e respeito.',
    fullDesc: 'Atuação sensível e estratégica para resguardar a harmonia familiar e a integridade do patrimônio. Resolução rápida de inventários extrajudiciais e judiciais, divórcios e pensões.',
    iconName: 'users',
    items: [
      'Inventários Judiciais e em Cartório (Extrajudiciais)',
      'Divórcios Consensuais e Litigiosos',
      'Partilha e Planejamento de Herança',
      'Pensão Alimentícia, Guarda e Convivência'
    ],
    ctaMessage: 'Olá Dr. Marcelo, gostaria de orientação na área de Família e Sucessões / Inventário.'
  },
  {
    id: 'tributario',
    title: 'Direito Tributário & Fiscal',
    shortDesc: 'Defesa em execuções fiscais, recuperação de tributos e planejamento tributário estratégico.',
    fullDesc: 'Blindagem de empresas e pessoas físicas contra cobranças indevidas do Fisco, anulação de autos de infração e compensação de créditos tributários com máxima fundamentação jurídica.',
    iconName: 'landmark',
    items: [
      'Defesa em Execuções Fiscais e Débitos Federais/Estaduais',
      'Recuperação de Tributos Pagos Indevidamente',
      'Planejamento Tributário para Empresas',
      'Anulação de Multas e Infrações Fiscais'
    ],
    ctaMessage: 'Olá Dr. Marcelo, preciso de assessoria jurídica na área de Direito Tributário.'
  },
  {
    id: 'trabalho-empresarial',
    title: 'Direito do Trabalho & Empresarial',
    shortDesc: 'Consultoria patronal preventiva, redução de passivos e defesa em reclamatórias trabalhistas.',
    fullDesc: 'Soluções jurídicas para empresários e gestores mitigarem riscos trabalhistas, elaborarem acordos coletivos e individuais seguros e protegerem os resultados do seu negócio.',
    iconName: 'briefcase',
    items: [
      'Auditoria Preventiva e Redução de Riscos',
      'Defesa Estratégica em Ações Trabalhistas',
      'Elaboração de Contratos de Trabalho e Parcerias',
      'Consultoria para Recursos Humanos e Compliance'
    ],
    ctaMessage: 'Olá Dr. Marcelo, gostaria de agendar uma consulta sobre Direito do Trabalho / Empresarial.'
  },
  {
    id: 'consumidor-reparacao',
    title: 'Direito do Consumidor de Alto Impacto',
    shortDesc: 'Reparação contra fraudes bancárias, negativas indevidas de crédito e abusividades comerciais.',
    fullDesc: 'Defesa incisiva para ressarcimento de valores subtraídos por fraudes, golpes virtuais, cancelamento de cobranças abusivas e reparação financeira por prejuízos causados.',
    iconName: 'shield-check',
    items: [
      'Fraudes Bancárias e Golpes Eletrônicos (PIX / Empréstimos)',
      'Inclusão Indevida em Cadastros de Inadimplentes (SPC/Serasa)',
      'Revisão de Cláusulas Abusivas em Contratos Financeiros',
      'Indenização por Falha Grave na Prestação de Serviços'
    ],
    ctaMessage: 'Olá Dr. Marcelo, preciso de assistência jurídica sobre Direito do Consumidor e Fraudes.'
  },
  {
    id: 'extrajudicial-negociacao',
    title: 'Mediação & Soluções Extrajudiciais',
    shortDesc: 'Acordos estratégicos céleres e soluções de litígios sem a morosidade do Judiciário.',
    fullDesc: 'Foco direto em RESULTADO rápido e seguro através de câmaras de conciliação, confecções de termos de ajustamento e negociações diretas de alto nível.',
    iconName: 'scale',
    items: [
      'Negociação Extrajudicial de Litígios Complexos',
      'Acordos Pré-Processuais Homologados',
      'Termos de Transação e Quitação Segura',
      'Assessoria em Mediações Comerciais'
    ],
    ctaMessage: 'Olá Dr. Marcelo, gostaria de saber mais sobre Mediação e Acordos Extrajudiciais.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Gabriela Lopes',
    roleOrContext: 'Cliente Atendida',
    text: 'Excelente profissional! Muito atencioso, transparente e comprometido. Recomendo com certeza!',
    rating: 5,
    date: 'Avaliação no Google',
    verified: true
  },
  {
    id: '2',
    author: "Maria Helena D'Eugênio",
    roleOrContext: 'Ajapei - Asilinho',
    text: 'Profissional excelente, dedicado, uma dádiva! Fomos bem e prontamente atendidos num caso de recursos humanos.',
    rating: 5,
    date: 'Avaliação no Google',
    verified: true
  },
  {
    id: '3',
    author: 'Adina Costa',
    roleOrContext: 'Cliente Atendida',
    text: 'Um profissional que faz tudo com excelência, não poderia recomendar alguém melhor.',
    rating: 5,
    date: 'Avaliação no Google',
    verified: true
  },
  {
    id: '4',
    author: 'Carlos Eduardo Mendes',
    roleOrContext: 'Empresário',
    text: 'Dr. Marcelo demonstrou total domínio técnico e postura ética impecável. Conduziu nosso caso com clareza em cada etapa e alcançou o melhor resultado possível.',
    rating: 5,
    date: 'Avaliação no Google',
    verified: true
  },
  {
    id: '5',
    author: 'Renata Albuquerque',
    roleOrContext: 'Cliente em Inventário',
    text: 'Fui surpreendida pela agilidade e pelo carinho no atendimento familiar. O Dr. Marcelo nos deu segurança do início ao fim.',
    rating: 5,
    date: 'Avaliação no Google',
    verified: true
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'capao-bonito',
    city: 'Capão Bonito - SP',
    type: 'Unidade Principal',
    address: 'Rua Sete de Setembro, 680',
    neighborhood: 'Centro',
    phone: '(15) 99609-1651',
    hours: 'Segunda a Sexta: 08:30 às 18:00',
    mapsUrl: 'https://maps.google.com/?q=Rua+Sete+de+Setembro,+680+-+Centro,+Capao+Bonito+-+SP',
    isMain: true
  },
  {
    id: 'itapetininga',
    city: 'Itapetininga - SP',
    type: 'Unidade Regional',
    address: 'Rua Quintino Bocaiuva, 709',
    neighborhood: 'Centro',
    phone: '(15) 99609-1651',
    hours: 'Segunda a Sexta: 08:30 às 18:00 (Com agendamento prévio)',
    mapsUrl: 'https://maps.google.com/?q=Rua+Quintino+Bocaiuva,+709+-+Centro,+Itapetininga+-+SP',
    isMain: false
  }
];

export const FAQS = [
  {
    question: 'Como funciona a primeira consulta com o Dr. Marcelo?',
    answer: 'A primeira consulta é focada na análise detalhada do seu caso e dos documentos. O Dr. Marcelo ouve suas necessidades, avalia a viabilidade jurídica e traça o plano de ação mais rápido e seguro, com total transparência quanto a prazos e possibilidades.'
  },
  {
    question: 'O atendimento pode ser feito 100% online por WhatsApp ou videoconferência?',
    answer: 'Sim! Atendemos clientes em todo o Estado de São Paulo e no Brasil com ferramentas digitais criptografadas e seguras. Você pode enviar documentos pelo WhatsApp ou e-mail e realizar reuniões por vídeo com a mesma proximidade e atenção do presencial.'
  },
  {
    question: 'Qual a importância de contar com um advogado com OAB ativa e especializada?',
    answer: 'A OAB/SP 489.578 comprova a qualificação técnica e a regularidade do Dr. Marcelo perante a Ordem dos Advogados do Brasil. Isso assegura que sua causa estará sob rigoroso sigilo profissional, ética inegociável e defesa técnica capacitada.'
  },
  {
    question: 'Como receberei as atualizações do andamento do meu processo?',
    answer: 'Prezamos pelo contato direto e humanizado. A cada movimentação relevante no seu processo ou na negociação extrajudicial, nossa equipe ou o próprio Dr. Marcelo informará você de forma clara, sem jargões jurídicos complexos.'
  },
  {
    question: 'Como posso agendar meu horário agora?',
    answer: 'Basta clicar no botão dourado "Agendar Minha Consulta no WhatsApp" ou preencher o formulário rápido nesta página. Responderemos prontamente para reservar seu horário de atendimento.'
  }
];
