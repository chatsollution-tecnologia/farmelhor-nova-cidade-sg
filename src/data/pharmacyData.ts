export interface ContactNumber {
  type: 'whatsapp' | 'landline';
  label: string;
  numberDisplay: string;
  numberClean: string;
  url?: string;
  isPrimary?: boolean;
}

export interface PharmacyInfo {
  tradeName: string;
  legalName: string;
  cnpj: string;
  cnpjFormatted: string;
  yearsInNeighborhood: number;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    reference: string;
    fullFormatted: string;
  };
  email: string;
  instagram: {
    handle: string;
    url: string;
  };
  whatsAppPrimary: ContactNumber;
  whatsAppSecondary: ContactNumber;
  landlines: ContactNumber[];
  mapsUrl: string;
}

export const PHARMACY_DATA: PharmacyInfo = {
  tradeName: "FarMelhor Nova Cidade SG",
  legalName: "HG FIGUEIREDO LTDA",
  cnpj: "03176094000142",
  cnpjFormatted: "03.176.094/0001-42",
  yearsInNeighborhood: 24,
  address: {
    street: "Rua Vicente de Lima Cleto",
    number: "710",
    neighborhood: "Nova Cidade",
    city: "São Gonçalo",
    state: "RJ",
    reference: "Em frente ao Mercado Novo Rio",
    fullFormatted: "Rua Vicente de Lima Cleto, 710 — Nova Cidade — São Gonçalo/RJ"
  },
  email: "hgfigueiredoltda@gmail.com",
  instagram: {
    handle: "@farmelhor_novacidadesg",
    url: "https://www.instagram.com/farmelhor_novacidadesg/"
  },
  whatsAppPrimary: {
    type: 'whatsapp',
    label: 'WhatsApp Principal',
    numberDisplay: '(21) 98415-7068',
    numberClean: '5521984157068',
    url: 'https://wa.me/5521984157068',
    isPrimary: true
  },
  whatsAppSecondary: {
    type: 'whatsapp',
    label: 'WhatsApp Alternativo',
    numberDisplay: '(21) 96447-3402',
    numberClean: '5521964473402',
    url: 'https://wa.me/5521964473402',
    isPrimary: false
  },
  landlines: [
    {
      type: 'landline',
      label: 'Telefone Fixo 1',
      numberDisplay: '(21) 2702-2378',
      numberClean: '2127022378',
      url: 'tel:2127022378'
    },
    {
      type: 'landline',
      label: 'Telefone Fixo 2',
      numberDisplay: '(21) 3123-1200',
      numberClean: '2131231200',
      url: 'tel:2131231200'
    },
    {
      type: 'landline',
      label: 'Telefone Fixo 3',
      numberDisplay: '(21) 2174-1374',
      numberClean: '2121741374',
      url: 'tel:2121741374'
    },
    {
      type: 'landline',
      label: 'Telefone Fixo 4',
      numberDisplay: '(21) 2725-3209',
      numberClean: '2127253209',
      url: 'tel:2127253209'
    }
  ],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Vicente+de+Lima+Cleto+710+Nova+Cidade+Sao+Goncalo+RJ"
};

export const PRIVACY_POLICY_TEXT = {
  lastUpdated: '22 de Julho de 2026',
  sections: [
    {
      title: '1. Identificação da Controladora dos Dados',
      content: 'A controladora responsável pelo tratamento dos seus dados no contexto deste site institucional é a empresa HG FIGUEIREDO LTDA, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 03.176.094/0001-42, com sede na Rua Vicente de Lima Cleto, 710 — Nova Cidade — São Gonçalo/RJ, e-mail de contato: hgfigueiredoltda@gmail.com.'
    },
    {
      title: '2. Finalidade e Escopo do Site',
      content: 'Este site é institucional e informativo. O seu propósito é apresentar publicamente a existência física, a razão social, os dados cadastrais e os canais de contato da drogaria FarMelhor Nova Cidade SG para clientes e parceiros. Não realizamos coleta ativa de dados pessoais nem disponibilizamos formulários de cadastro ou compras diretas por este site.'
    },
    {
      title: '3. Redirecionamento e Comunicação via WhatsApp',
      content: 'Ao clicar nos botões de contato via WhatsApp dispostos em nosso site, você será redirecionado para o aplicativo oficial do WhatsApp. As informações que você optar por enviar espontaneamente durante a conversa serão utilizadas estritamente para responder à sua solicitação de atendimento. O tratamento dessas comunicações respeita a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).'
    },
    {
      title: '4. Bases Legais do Tratamento',
      content: 'Tratamos as interações iniciadas pelo usuário sob a base legal do Consentimento do Titular (Art. 7º, I da LGPD) manifestado ao clicar voluntariamente nos links de comunicação, bem como para Procedimentos Preliminares Relacionados a Atendimento ao Cliente (Art. 7º, V da LGPD).'
    },
    {
      title: '5. Cookies e Registros de Acesso Web',
      content: 'Este site não utiliza cookies de rastreamento de terceiros para fins publicitários. Os únicos registros eventualmente gerados são os logs padrão de conexão de servidores web estritamente necessários para garantir a segurança e integridade operacional (Lei nº 12.965/2014).'
    },
    {
      title: '6. Compartilhamento de Dados',
      content: 'A HG FIGUEIREDO LTDA não comercializa ou compartilha dados pessoais de clientes com terceiros para fins de marketing. O compartilhamento só poderá ocorrer por exigência legal ou determinação de autoridade competente.'
    },
    {
      title: '7. Direitos do Titular (Art. 18 da LGPD)',
      content: 'Você possui o direito de confirmar a existência de tratamento, acessar seus dados e solicitar correções. Para exercer qualquer um desses direitos, entre em contato pelo e-mail hgfigueiredoltda@gmail.com.'
    }
  ]
};

export const TERMS_OF_USE_TEXT = {
  lastUpdated: '22 de Julho de 2026',
  sections: [
    {
      title: '1. Aceitação dos Termos',
      content: 'Ao acessar o site institucional da FarMelhor Nova Cidade SG (HG FIGUEIREDO LTDA - CNPJ 03.176.094/0001-42), você concorda com os presentes Termos de Uso e com a nossa Política de Privacidade.'
    },
    {
      title: '2. Natureza Informativa e Institucional',
      content: 'O conteúdo deste site possui caráter meramente informativo. O site não oferece diagnósticos ou prescrições médicas de qualquer natureza. As informações não substituem a consulta com profissionais de saúde habilitados.'
    },
    {
      title: '3. Propriedade Intelectual',
      content: 'O nome comercial FarMelhor Nova Cidade SG, a razão social HG FIGUEIREDO LTDA e o conteúdo deste site são protegidos pelas leis de propriedade intelectual.'
    },
    {
      title: '4. Links para Terceiros',
      content: 'Nosso site disponibiliza links direcionadores para WhatsApp, Instagram e Google Maps. Não nos responsabilizamos pelas políticas ou disponibilidade dessas plataformas externas.'
    }
  ]
};
