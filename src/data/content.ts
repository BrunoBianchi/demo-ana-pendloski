/**
 * Conteúdo específico da lead Ana Pendloski.
 * Fontes: blocos 1–4 em ../ (site oficial, Viralist, NAP verificado).
 * Claims não verificados (ex.: "1000 newborn") foram omitidos de propósito.
 */

export const demoNotice =
  'Demonstração de redesign — não é o site oficial de Ana Pendloski Fotografia.'

export const business = {
  name: 'Ana Pendloski Fotografia',
  personName: 'Ana Pendloski',
  tagline: 'Fotógrafa de família, gestante e newborn em São Paulo',
  city: 'São Paulo',
  neighborhood: 'Campo Belo',
  addressLine: 'Rua Vieira de Morais, 1713 — 3º andar, Conjunto 32',
  addressFull:
    'Rua Vieira de Morais, 1713, 3º andar, Conjunto 32, Campo Belo, São Paulo — SP',
  phoneDisplay: '(11) 96574-0067',
  phoneE164: '+5511965740067',
  whatsappUrl: 'https://wa.me/5511965740067',
  email: 'fotografa@anapendloski.com',
  instagramHandle: '@anapendloskifotografa',
  instagramUrl: 'https://www.instagram.com/anapendloskifotografa/',
  officialSite: 'https://anapendloski.com/',
  /** Observado na bio IG (Viralist) — claim da própria bio, não auditado como métrica. */
  bioSnippet:
    'Fotografias de gestantes, partos e bebês e conteúdos sobre maternidade real. Atendimento em São Paulo.',
} as const

export const hero = {
  title: 'Memórias de família, com delicadeza e presença',
  subtitle:
    'Ensaios de gestante, parto, newborn e acompanhamento do primeiro ano — com estúdio no Campo Belo e orçamento pelo WhatsApp.',
  primaryCta: 'Pedir orçamento no WhatsApp',
  secondaryCta: 'Ver serviços',
  portfolioNote:
    'Imagens ilustrativas (banco de imagens). As fotos reais da fotógrafa não foram usadas neste mock — falta autorização de republicação.',
} as const

/** Unsplash — uso ilustrativo; dimensões definidas no componente */
export const portfolioImages = [
  {
    id: 'p1',
    src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80',
    width: 800,
    height: 1000,
    alt: 'Imagem ilustrativa: bebê recém-nascido envolto em manta clara (banco Unsplash — não é trabalho da lead)',
  },
  {
    id: 'p2',
    src: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=800&q=80',
    width: 800,
    height: 1000,
    alt: 'Imagem ilustrativa: gestante em luz suave (banco Unsplash — não é trabalho da lead)',
  },
  {
    id: 'p3',
    src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
    width: 800,
    height: 1000,
    alt: 'Imagem ilustrativa: mãos de bebê e adulto (banco Unsplash — não é trabalho da lead)',
  },
  {
    id: 'p4',
    src: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=800&q=80',
    width: 800,
    height: 1000,
    alt: 'Imagem ilustrativa: família com criança pequena (banco Unsplash — não é trabalho da lead)',
  },
  {
    id: 'p5',
    src: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80',
    width: 800,
    height: 1000,
    alt: 'Imagem ilustrativa: bebê dormindo (banco Unsplash — não é trabalho da lead)',
  },
  {
    id: 'p6',
    src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=80',
    width: 800,
    height: 1000,
    alt: 'Imagem ilustrativa: mãe e bebê (banco Unsplash — não é trabalho da lead)',
  },
] as const

export const services = [
  {
    id: 'gestante',
    title: 'Ensaio gestante',
    description:
      'Registro da espera em estúdio ou externo, com direção cuidadosa e foco no conforto da gestante.',
  },
  {
    id: 'parto',
    title: 'Registro de parto',
    description:
      'Documentação do nascimento com discrição e acolhimento — alinhada à experiência de quem também atua como doula (conforme declarado no site oficial).',
  },
  {
    id: 'newborn',
    title: 'Ensaio newborn',
    description:
      'Sessões nos primeiros dias de vida, em ritmo do bebê, no estúdio do Campo Belo.',
  },
  {
    id: 'acompanhamento',
    title: 'Acompanhamento do bebê',
    description:
      'Pacotes ao longo do primeiro ano (marcos como 3, 6, 9 e 12 meses), em estúdio ou lifestyle em casa — conforme oferta descrita no site oficial.',
  },
  {
    id: 'familia',
    title: 'Ensaio em família',
    description:
      'Retratos que privilegiam conexão e espontaneidade entre pais, bebês e irmãos.',
  },
  {
    id: 'smash',
    title: 'Smash the cake / fruit',
    description:
      'Celebração do primeiro aninho com sessão lúdica e entrega em galeria online (conforme páginas de serviço oficiais).',
  },
] as const

export const differentials = [
  {
    title: 'Olhar de fotógrafa e de doula',
    body: 'O site oficial destaca a combinação de fotografia materno-infantil com formação em doula — útil para gestante e parto. Detalhes de certificações específicas ficam para validação com a fotógrafa.',
  },
  {
    title: 'Estúdio próprio no Campo Belo',
    body: 'Atendimento presencial na Rua Vieira de Morais, 1713 (3º andar, cj. 32). Há também página de aluguel do espaço para outros profissionais.',
  },
  {
    title: 'Orçamento personalizado',
    body: 'O fluxo atual do site oficial promete proposta em até 24 horas após o pedido — neste mock o canal principal é o WhatsApp confirmado.',
  },
  {
    title: 'Jornada da maternidade',
    body: 'Do ensaio gestante ao acompanhamento do primeiro ano, com linguagem de “legado visual” presente nos textos públicos da marca.',
  },
] as const

export const about = {
  heading: 'Sobre Ana',
  paragraphs: [
    'Ana Pendloski apresenta-se como fotógrafa de família em São Paulo, com estúdio no Campo Belo, acompanhando gestação, nascimento e os primeiros tempos com o bebê.',
    'Na biografia pública do Instagram, fala em fotografias de gestantes, partos e bebês e em conteúdos sobre maternidade real, com agendamentos em SP.',
    'Este redesign demonstra uma home centrada no portfólio e em CTAs claros — sem republicar o acervo fotográfico da lead e sem inventar números de clientes.',
  ],
} as const

export const studio = {
  heading: 'O estúdio',
  body: 'Espaço no Campo Belo, zona sul de São Paulo, usado para ensaios e também oferecido para aluguel (conforme anapendloski.com/aluguel-estudio/). Equipamentos e regras de locação devem ser confirmados diretamente no atendimento.',
  mapQuery:
    'Rua+Vieira+de+Morais+1713+Campo+Belo+São+Paulo',
} as const

/** FAQ só com temas que o site oficial já responde publicamente */
export const faq = [
  {
    q: 'Qual a melhor época para o ensaio gestante?',
    a: 'O site oficial recomenda, em geral, entre 28 e 34 semanas — quando a barriga está evidente e ainda há conforto para a sessão. A data ideal é alinhada na conversa de planejamento.',
  },
  {
    q: 'O pai e outros filhos podem participar?',
    a: 'Sim. As páginas de serviço descrevem a participação da família como bem-vinda, tornando o ensaio mais completo.',
  },
  {
    q: 'Os ensaios são só em estúdio?',
    a: 'Não. Há opções em estúdio e em locais externos ou lifestyle em casa (por exemplo no acompanhamento), conforme o tipo de ensaio e o combinado no orçamento.',
  },
  {
    q: 'Como peço um orçamento?',
    a: 'Pelo WhatsApp (11) 96574-0067 ou pelo formulário do site oficial. Neste mock, o botão de WhatsApp abre o chat (você decide se envia a mensagem); o formulário abaixo apenas simula o envio.',
  },
] as const

export const nav = [
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#estudio', label: 'Estúdio' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
] as const

export const colors = {
  gray: '#606060',
  taupe: '#B4A89E',
  brown: '#8B7155',
  cream: '#F5F3F0',
} as const
