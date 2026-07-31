export type SurgeryGroup = 'hepatobiliopancreatica' | 'trato-digestivo'

export type SurgeryHighlight = {
  label: string
  value: string
}

export type SurgeryContentBlock = {
  title: string
  text: string
}

export type SurgeryFaq = {
  question: string
  answer: string
}

export type SurgerySource = {
  label: string
  url: string
}

export type Surgery = {
  slug: string
  order: number
  group: SurgeryGroup
  category: string
  shortTitle: string
  title: string
  expertise?: boolean
  metaTitle: string
  metaDescription: string
  cardDescription: string
  heroLead: string
  highlights: SurgeryHighlight[]
  overview: string[]
  indicationsIntro: string
  indications: SurgeryContentBlock[]
  procedureIntro: string
  procedureSteps: SurgeryContentBlock[]
  recoveryIntro: string
  recovery: SurgeryContentBlock[]
  faqs: SurgeryFaq[]
  sources: SurgerySource[]
  relatedSlugs: string[]
}

export const surgeryGroups: Record<
  SurgeryGroup,
  { eyebrow: string; title: string; description: string }
> = {
  hepatobiliopancreatica: {
    eyebrow: 'Cirurgia hepatobiliopancreática',
    title: 'Pâncreas, fígado e vias biliares',
    description:
      'Procedimentos de alta complexidade definidos a partir da localização do tumor, de sua relação com estruturas vasculares e da possibilidade de uma ressecção oncológica segura.',
  },
  'trato-digestivo': {
    eyebrow: 'Cirurgia do aparelho digestivo',
    title: 'Estômago, intestino, cólon e reto',
    description:
      'Tratamentos planejados para remover o tumor com margens adequadas, preservar função sempre que possível e integrar cada etapa à estratégia oncológica.',
  },
}

export const surgeries: Surgery[] = [
  {
    slug: 'duodenopancreatectomia-whipple',
    order: 1,
    group: 'hepatobiliopancreatica',
    category: 'Pâncreas e região periampular',
    shortTitle: 'Duodenopancreatectomia (Whipple)',
    title: 'Duodenopancreatectomia — cirurgia de Whipple',
    metaTitle: 'Cirurgia de Whipple | Dr. Daniel Flores',
    metaDescription:
      'Entenda quando a duodenopancreatectomia, ou cirurgia de Whipple, pode ser indicada, como é planejada e o que esperar da recuperação.',
    cardDescription:
      'Operação para tumores selecionados da cabeça do pâncreas e da região periampular, com ressecção e reconstrução do trânsito digestivo.',
    heroLead:
      'Uma operação de alta complexidade que combina ressecção oncológica e reconstrução do aparelho digestivo. A indicação depende do diagnóstico, do estadiamento e de uma avaliação multidisciplinar cuidadosa.',
    highlights: [
      {
        label: 'Objetivo',
        value: 'Remover o tumor em bloco, com margens adequadas e avaliação dos linfonodos regionais.',
      },
      {
        label: 'Principais localizações',
        value: 'Cabeça do pâncreas, ampola, duodeno e porção distal da via biliar.',
      },
      {
        label: 'Decisão',
        value: 'Definida após análise detalhada das imagens, da anatomia vascular e das condições clínicas.',
      },
    ],
    overview: [
      'A duodenopancreatectomia, também conhecida como cirurgia de Whipple, é utilizada principalmente no tratamento de tumores localizados na cabeça do pâncreas e em estruturas próximas. Por compartilharem a mesma região anatômica, tumores da ampola de Vater, do duodeno e da porção distal da via biliar também podem exigir esse procedimento.',
      'Na operação, são removidos a cabeça do pâncreas, o duodeno, a vesícula biliar e parte da via biliar. A extensão sobre o estômago varia conforme a técnica e a situação clínica. Em seguida, o cirurgião reconstrói as conexões do pâncreas, da via biliar e do estômago ou duodeno com o intestino, restabelecendo o trânsito digestivo.',
      'O tratamento não é definido apenas pelo ato operatório. A análise do tipo de tumor, do estadiamento, da relação com vasos próximos e da sequência com quimioterapia ou outros tratamentos faz parte da estratégia desde o início.',
    ],
    indicationsIntro:
      'A possibilidade de realizar a cirurgia é individual. Os principais pontos considerados durante a avaliação incluem:',
    indications: [
      {
        title: 'Diagnóstico e localização',
        text: 'O tipo histológico e a posição exata do tumor determinam se a cirurgia de Whipple é a operação mais adequada.',
      },
      {
        title: 'Ressecabilidade',
        text: 'Tomografias e, em situações selecionadas, ressonância, ecoendoscopia ou outros exames avaliam a relação do tumor com artérias, veias e órgãos próximos.',
      },
      {
        title: 'Condição clínica',
        text: 'Estado nutricional, função de outros órgãos, fragilidade e doenças associadas entram no cálculo entre benefício esperado e risco cirúrgico.',
      },
    ],
    procedureIntro:
      'O planejamento procura antecipar cada etapa da ressecção e da reconstrução, além de integrar a operação ao tratamento oncológico completo.',
    procedureSteps: [
      {
        title: '1. Estadiamento',
        text: 'A equipe revisa exames de imagem, biópsia quando indicada e marcadores relevantes para confirmar a extensão da doença.',
      },
      {
        title: '2. Estratégia multidisciplinar',
        text: 'Cirurgia, oncologia clínica, radiologia, endoscopia, anestesia e nutrição alinham a melhor sequência terapêutica.',
      },
      {
        title: '3. Ressecção e reconstrução',
        text: 'A retirada do bloco tumoral é seguida por conexões cuidadosas entre pâncreas, via biliar, estômago ou duodeno e intestino.',
      },
      {
        title: '4. Anatomopatológico',
        text: 'A peça cirúrgica define margens, linfonodos e características do tumor que ajudam a orientar os próximos passos.',
      },
    ],
    recoveryIntro:
      'A recuperação é acompanhada de perto porque o procedimento envolve diferentes órgãos e novas conexões digestivas.',
    recovery: [
      {
        title: 'Pós-operatório hospitalar',
        text: 'São monitorados dor, hidratação, mobilidade, tolerância alimentar, funcionamento intestinal e sinais relacionados às reconstruções.',
      },
      {
        title: 'Nutrição e função pancreática',
        text: 'A alimentação avança de forma individualizada. Algumas pessoas podem precisar de enzimas pancreáticas ou de acompanhamento da glicemia.',
      },
      {
        title: 'Continuidade oncológica',
        text: 'O resultado anatomopatológico e a evolução clínica orientam o momento de discutir tratamento complementar e o programa de seguimento.',
      },
    ],
    faqs: [
      {
        question: 'A cirurgia de Whipple remove todo o pâncreas?',
        answer:
          'Não. Em sua forma habitual, ela remove a cabeça do pâncreas e preserva o corpo e a cauda. A retirada total do órgão é reservada a situações específicas.',
      },
      {
        question: 'A operação pode ser feita por laparoscopia ou robótica?',
        answer:
          'Em pacientes selecionados, abordagens minimamente invasivas podem ser consideradas. A decisão depende da anatomia, da extensão do tumor, de cirurgias anteriores e da segurança oncológica.',
      },
      {
        question: 'A quimioterapia acontece antes ou depois da cirurgia?',
        answer:
          'As duas sequências são possíveis. O estágio, a relação do tumor com vasos e suas características biológicas ajudam a equipe multidisciplinar a definir o melhor momento.',
      },
      {
        question: 'Quais complicações precisam ser discutidas?',
        answer:
          'Entre os riscos estão sangramento, infecção, atraso do esvaziamento do estômago e vazamento nas conexões, incluindo a fístula pancreática. O risco individual deve ser explicado na consulta.',
      },
    ],
    sources: [
      {
        label: 'National Cancer Institute — Pancreatic Cancer Treatment',
        url: 'https://www.cancer.gov/types/pancreatic/patient/pancreatic-treatment-pdq',
      },
      {
        label: 'INCA — Câncer de pâncreas para profissionais de saúde',
        url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/pancreas/versao-para-profissionais-de-saude',
      },
    ],
    relatedSlugs: [
      'pancreatectomia-distal',
      'tumores-vias-biliares',
      'tumores-neuroendocrinos-pancreas',
    ],
  },
  {
    slug: 'pancreatectomia-distal',
    order: 2,
    group: 'hepatobiliopancreatica',
    category: 'Corpo e cauda do pâncreas',
    shortTitle: 'Pancreatectomia distal',
    title: 'Pancreatectomia distal',
    metaTitle: 'Pancreatectomia Distal | Dr. Daniel Flores',
    metaDescription:
      'Saiba quando a pancreatectomia distal pode ser indicada para tumores do corpo e da cauda do pâncreas e como é o acompanhamento.',
    cardDescription:
      'Ressecção do corpo e da cauda do pâncreas para tumores selecionados, com estratégia definida conforme a biologia da lesão e sua extensão.',
    heroLead:
      'A pancreatectomia distal trata tumores localizados no corpo e na cauda do pâncreas. O planejamento busca combinar margens oncológicas adequadas com preservação segura da função pancreática restante.',
    highlights: [
      {
        label: 'Região tratada',
        value: 'Corpo e cauda do pâncreas.',
      },
      {
        label: 'Extensão',
        value: 'Pode incluir o baço e os linfonodos regionais, conforme o diagnóstico e o objetivo oncológico.',
      },
      {
        label: 'Abordagem',
        value: 'Aberta, laparoscópica ou robótica, de acordo com a complexidade de cada caso.',
      },
    ],
    overview: [
      'A pancreatectomia distal remove a porção do pâncreas situada à esquerda dos principais vasos abdominais, abrangendo parte do corpo e a cauda. Ela pode ser empregada em adenocarcinomas, tumores neuroendócrinos, neoplasias císticas e outras lesões com indicação cirúrgica.',
      'Nos tumores malignos mais comuns, a retirada do baço e dos linfonodos próximos frequentemente integra a operação. A preservação do baço pode ser considerada em situações selecionadas, principalmente quando a biologia da lesão e a segurança oncológica permitem.',
      'Embora seja diferente da cirurgia de Whipple e não envolva reconstruções biliares ou duodenais, continua sendo uma cirurgia pancreática de alta complexidade, com atenção especial ao fechamento da área seccionada do pâncreas.',
    ],
    indicationsIntro:
      'A indicação é baseada na combinação entre características do tumor, possibilidade de ressecção e condições do paciente:',
    indications: [
      {
        title: 'Tipo de lesão',
        text: 'Biópsia, características radiológicas, marcadores e comportamento ao longo do tempo ajudam a definir quais lesões se beneficiam de ressecção.',
      },
      {
        title: 'Extensão local',
        text: 'As imagens avaliam vasos, órgãos adjacentes, linfonodos e possíveis focos à distância antes de definir a operação.',
      },
      {
        title: 'Preservação funcional',
        text: 'A quantidade de pâncreas remanescente e a situação do baço são consideradas junto ao objetivo oncológico.',
      },
    ],
    procedureIntro:
      'O planejamento é adaptado ao diagnóstico e à possibilidade de uma abordagem minimamente invasiva segura.',
    procedureSteps: [
      {
        title: '1. Revisão diagnóstica',
        text: 'A equipe confirma a natureza provável da lesão e se há necessidade de tratamento antes da operação.',
      },
      {
        title: '2. Mapeamento anatômico',
        text: 'Tomografia ou ressonância mostram a relação com vasos esplênicos, baço, estômago, cólon e rim.',
      },
      {
        title: '3. Ressecção',
        text: 'O corpo e a cauda são removidos com a extensão adequada; o manejo do baço depende da indicação oncológica.',
      },
      {
        title: '4. Plano após a cirurgia',
        text: 'O anatomopatológico e a recuperação determinam seguimento e, quando necessário, tratamento complementar.',
      },
    ],
    recoveryIntro:
      'O cuidado pós-operatório concentra-se na recuperação abdominal e na função endócrina e digestiva do pâncreas remanescente.',
    recovery: [
      {
        title: 'Monitorização',
        text: 'A equipe acompanha dor, alimentação, mobilidade e sinais de fístula pancreática, sangramento ou infecção.',
      },
      {
        title: 'Glicemia e digestão',
        text: 'Muitas pessoas mantêm função pancreática suficiente, mas há risco variável de diabetes e insuficiência digestiva; glicose, peso e sintomas são acompanhados individualmente.',
      },
      {
        title: 'Cuidados com o baço',
        text: 'Quando o baço precisa ser retirado, vacinação e medidas preventivas específicas são organizadas pela equipe.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a diferença entre pancreatectomia distal e cirurgia de Whipple?',
        answer:
          'A pancreatectomia distal trata o corpo e a cauda do pâncreas. A cirurgia de Whipple trata a cabeça do órgão e exige reconstrução das conexões digestivas.',
      },
      {
        question: 'O baço sempre precisa ser retirado?',
        answer:
          'Não em todas as situações. Para certos tumores malignos, sua retirada faz parte da ressecção oncológica; em lesões selecionadas, a preservação pode ser avaliada.',
      },
      {
        question: 'É possível fazer a cirurgia por robótica ou laparoscopia?',
        answer:
          'Sim, em casos selecionados. Tamanho, localização, proximidade de vasos, cirurgias anteriores e objetivo oncológico definem a melhor via.',
      },
      {
        question: 'A cirurgia causa diabetes?',
        answer:
          'O risco depende da quantidade e da qualidade do pâncreas remanescente e da condição metabólica prévia. A glicemia é acompanhada antes e depois da operação.',
      },
    ],
    sources: [
      {
        label: 'National Cancer Institute — Pancreatic Cancer Treatment',
        url: 'https://www.cancer.gov/types/pancreatic/patient/pancreatic-treatment-pdq',
      },
      {
        label: 'National Cancer Institute — Pancreatic Neuroendocrine Tumors Treatment',
        url: 'https://www.cancer.gov/types/pancreatic/patient/pnet-treatment-pdq',
      },
    ],
    relatedSlugs: [
      'duodenopancreatectomia-whipple',
      'tumores-neuroendocrinos-pancreas',
      'hepatectomia-metastases-hepaticas',
    ],
  },
  {
    slug: 'hepatectomia-metastases-hepaticas',
    order: 3,
    group: 'hepatobiliopancreatica',
    category: 'Fígado',
    shortTitle: 'Hepatectomia e metástases hepáticas',
    title: 'Hepatectomia e cirurgia de metástases hepáticas',
    metaTitle: 'Hepatectomia e Metástases Hepáticas | Dr. Daniel Flores',
    metaDescription:
      'Entenda como são planejadas as ressecções do fígado para tumores primários e metástases hepáticas, preservando um remanescente funcional seguro.',
    cardDescription:
      'Ressecções hepáticas para tumores primários e metástases selecionadas, planejadas para preservar volume e função adequados do fígado.',
    heroLead:
      'A cirurgia do fígado exige equilíbrio entre remover toda a doença visível com intenção oncológica e preservar um remanescente hepático capaz de sustentar a recuperação.',
    highlights: [
      {
        label: 'Aplicações',
        value: 'Tumores primários do fígado e metástases selecionadas, especialmente de origem digestiva.',
      },
      {
        label: 'Princípio central',
        value: 'Ressecção completa quando possível, mantendo fluxo sanguíneo, drenagem biliar e função do fígado restante.',
      },
      {
        label: 'Estratégia',
        value: 'Pode combinar cirurgia, tratamento sistêmico, ablação ou procedimentos em etapas.',
      },
    ],
    overview: [
      'Hepatectomia é a retirada de uma parte do fígado. A extensão pode variar desde uma pequena ressecção até a remoção de um ou mais segmentos ou lobos, conforme o número, o tamanho e a distribuição dos tumores.',
      'A operação pode ser indicada para tumores que se originam no próprio fígado, como o carcinoma hepatocelular e alguns colangiocarcinomas, ou para metástases selecionadas. No aparelho digestivo, o papel mais estabelecido é no câncer colorretal; metástases de outras origens exigem análise ainda mais individualizada.',
      'O fígado possui capacidade de recuperar volume, mas isso não elimina a necessidade de medir cuidadosamente a qualidade e a quantidade do tecido que permanecerá. Doença hepática prévia, tratamentos anteriores e anatomia vascular e biliar influenciam diretamente o plano.',
    ],
    indicationsIntro:
      'Mais do que contar nódulos, a avaliação considera se toda a doença relevante pode ser tratada e se o fígado remanescente será seguro:',
    indications: [
      {
        title: 'Distribuição dos tumores',
        text: 'Imagens de alta qualidade mapeiam a relação de cada lesão com veias, artérias e vias biliares.',
      },
      {
        title: 'Biologia da doença',
        text: 'Origem do tumor, comportamento ao longo do tempo e resposta a tratamentos sistêmicos ajudam a selecionar a estratégia.',
      },
      {
        title: 'Reserva hepática',
        text: 'Função do fígado, presença de fibrose ou cirrose e volume previsto do remanescente são avaliados antes da ressecção.',
      },
    ],
    procedureIntro:
      'O plano pode envolver uma operação isolada ou uma sequência coordenada para ampliar segurança e possibilidade de tratamento completo.',
    procedureSteps: [
      {
        title: '1. Mapeamento anatômico',
        text: 'Tomografia e ressonância definem distribuição tumoral, vasos, vias biliares e volume do fígado que permanecerá.',
      },
      {
        title: '2. Integração oncológica',
        text: 'A equipe define o momento da quimioterapia. Quando o remanescente previsto é pequeno, a embolização portal pode ser realizada antes da operação; a ablação pode complementar a estratégia em casos selecionados.',
      },
      {
        title: '3. Ressecção personalizada',
        text: 'A retirada pode seguir segmentos anatômicos ou contornar a lesão, sempre respeitando margens e preservação funcional.',
      },
      {
        title: '4. Seguimento',
        text: 'Anatomopatológico, função hepática e resposta global orientam o acompanhamento e tratamentos complementares.',
      },
    ],
    recoveryIntro:
      'A evolução depende da extensão da ressecção e da condição prévia do fígado, por isso o acompanhamento é individualizado.',
    recovery: [
      {
        title: 'Função hepática',
        text: 'Exames laboratoriais, balanço de líquidos e sinais clínicos são monitorados enquanto o fígado remanescente se adapta.',
      },
      {
        title: 'Mobilidade e nutrição',
        text: 'Controle de dor, prevenção de trombose, movimentação precoce e alimentação progressiva fazem parte da recuperação.',
      },
      {
        title: 'Vigilância oncológica',
        text: 'O seguimento combina consulta, exames de sangue e imagens em intervalos definidos para cada diagnóstico.',
      },
    ],
    faqs: [
      {
        question: 'O fígado cresce novamente depois da hepatectomia?',
        answer:
          'O fígado remanescente pode recuperar volume e função. A intensidade dessa resposta varia e depende, entre outros fatores, da saúde do tecido hepático e da extensão da operação.',
      },
      {
        question: 'É possível operar mais de uma metástase?',
        answer:
          'Em casos selecionados, sim. A distribuição das lesões e a possibilidade de preservar um remanescente funcional são mais importantes do que um número isolado.',
      },
      {
        question: 'Cirurgia e ablação podem ser combinadas?',
        answer:
          'Podem, quando essa associação permite tratar diferentes lesões preservando mais fígado. A indicação é discutida individualmente.',
      },
      {
        question: 'A hepatectomia pode ser minimamente invasiva?',
        answer:
          'Ressecções laparoscópicas ou robóticas são possíveis em situações selecionadas. Localização, extensão e segurança vascular e oncológica orientam a escolha.',
      },
    ],
    sources: [
      {
        label: 'National Cancer Institute — Liver Cancer Treatment',
        url: 'https://www.cancer.gov/types/liver/what-is-liver-cancer/treatment',
      },
      {
        label: 'National Cancer Institute — Colon Cancer Treatment',
        url: 'https://www.cancer.gov/types/colorectal/patient/colon-treatment-pdq',
      },
      {
        label: 'AHPBA — Consenso sobre metástases hepáticas colorretais',
        url: 'https://pubmed.ncbi.nlm.nih.gov/39828468/',
      },
    ],
    relatedSlugs: [
      'tumores-vias-biliares',
      'cancer-colon-reto',
      'tumores-neuroendocrinos-intestino-delgado',
    ],
  },
  {
    slug: 'tumores-vias-biliares',
    order: 4,
    group: 'hepatobiliopancreatica',
    category: 'Vias biliares',
    shortTitle: 'Tumores das vias biliares',
    title: 'Cirurgia dos tumores das vias biliares',
    metaTitle: 'Cirurgia das Vias Biliares | Dr. Daniel Flores',
    metaDescription:
      'Conheça o planejamento cirúrgico dos tumores das vias biliares e por que a localização do colangiocarcinoma determina diferentes operações.',
    cardDescription:
      'Tratamento dos colangiocarcinomas intra-hepáticos, peri-hilares e distais, com operação definida pela localização e pela extensão da doença.',
    heroLead:
      'Os tumores das vias biliares formam um grupo complexo. Como atravessam regiões anatômicas diferentes, a localização do tumor determina operações muito distintas.',
    highlights: [
      {
        label: 'Tipos',
        value: 'Colangiocarcinomas intra-hepáticos, peri-hilares e distais.',
      },
      {
        label: 'Operações possíveis',
        value: 'Ressecção da via biliar, hepatectomia ou cirurgia de Whipple, conforme a localização.',
      },
      {
        label: 'Planejamento',
        value: 'Inclui avaliação do fígado, da drenagem da bile e da relação do tumor com vasos próximos.',
      },
    ],
    overview: [
      'As vias biliares conduzem a bile do fígado até o intestino. Os tumores que surgem nesses canais são chamados colangiocarcinomas e costumam ser classificados como intra-hepáticos, peri-hilares ou distais. Essa classificação orienta a operação.',
      'Tumores intra-hepáticos podem exigir ressecção de parte do fígado. Os peri-hilares frequentemente demandam retirada da via biliar associada a hepatectomia e reconstrução biliar. Quando o tumor está na porção distal, próxima ao pâncreas, a duodenopancreatectomia pode ser necessária.',
      'Icterícia, infecção biliar e comprometimento da função do fígado podem exigir medidas antes da cirurgia. Drenagem biliar e preparação do remanescente hepático são avaliadas caso a caso, sem uma conduta única para todos.',
    ],
    indicationsIntro:
      'A cirurgia com intenção oncológica é considerada quando a doença parece ressecável e o procedimento pode ser realizado com segurança:',
    indications: [
      {
        title: 'Localização precisa',
        text: 'Colangiorressonância, tomografia e outros exames definem o nível da obstrução e a extensão ao longo dos ductos.',
      },
      {
        title: 'Relação vascular',
        text: 'A proximidade com artéria hepática e veia porta influencia a possibilidade e a extensão da ressecção.',
      },
      {
        title: 'Condição do fígado',
        text: 'Icterícia, infecção, volume do remanescente e função hepática são considerados antes de uma cirurgia maior.',
      },
    ],
    procedureIntro:
      'O tratamento exige coordenação entre cirurgia, radiologia, endoscopia, oncologia e equipes de suporte.',
    procedureSteps: [
      {
        title: '1. Definição anatômica',
        text: 'Os exames identificam onde o tumor começa, até onde se estende e quais segmentos do fígado drenam adequadamente.',
      },
      {
        title: '2. Otimização pré-operatória',
        text: 'Quando necessário, a equipe controla infecção, melhora drenagem biliar e prepara o volume hepático remanescente.',
      },
      {
        title: '3. Ressecção adequada à localização',
        text: 'A operação pode envolver via biliar, fígado, linfonodos e, nos tumores distais, estruturas removidas na cirurgia de Whipple.',
      },
      {
        title: '4. Reconstrução e tratamento complementar',
        text: 'Quando a via biliar é ressecada, o fluxo da bile é reconstruído para o intestino. O anatomopatológico orienta a discussão sobre terapia adjuvante.',
      },
    ],
    recoveryIntro:
      'A recuperação varia muito porque as operações possíveis têm extensões diferentes.',
    recovery: [
      {
        title: 'Drenagem biliar e fígado',
        text: 'São acompanhados bilirrubina, função hepática, sinais de infecção e funcionamento das reconstruções biliares.',
      },
      {
        title: 'Recuperação geral',
        text: 'Nutrição, mobilidade, controle de dor e prevenção de complicações são ajustados à extensão da cirurgia.',
      },
      {
        title: 'Seguimento',
        text: 'Margens, linfonodos e subtipo tumoral orientam tratamento complementar e calendário de exames.',
      },
    ],
    faqs: [
      {
        question: 'Por que tumores das vias biliares exigem cirurgias diferentes?',
        answer:
          'Porque os ductos percorrem o interior do fígado, a região central entre grandes vasos e a área próxima ao pâncreas. Cada localização envolve estruturas distintas.',
      },
      {
        question: 'A icterícia precisa melhorar antes da operação?',
        answer:
          'Nem toda pessoa precisa de drenagem antes da cirurgia. Intensidade da icterícia, infecção, extensão da ressecção e condições do fígado orientam essa decisão.',
      },
      {
        question: 'A cirurgia sempre inclui parte do fígado?',
        answer:
          'Não. A hepatectomia é mais comum em tumores intra-hepáticos ou peri-hilares. Tumores distais podem exigir uma cirurgia de Whipple.',
      },
      {
        question: 'Há tratamento além da cirurgia?',
        answer:
          'Sim. Conforme o estágio e o anatomopatológico, tratamento sistêmico pode ser recomendado após a operação. Radioterapia e tratamento pré-operatório ficam reservados a situações específicas, discutidas pela equipe multidisciplinar.',
      },
    ],
    sources: [
      {
        label: 'National Cancer Institute — Bile Duct Cancer Treatment',
        url: 'https://www.cancer.gov/types/liver/bile-duct-cancer/treatment',
      },
      {
        label: 'National Cancer Institute — Bile Duct Cancer Treatment (PDQ)',
        url: 'https://www.cancer.gov/types/liver/hp/bile-duct-treatment-pdq',
      },
    ],
    relatedSlugs: [
      'hepatectomia-metastases-hepaticas',
      'duodenopancreatectomia-whipple',
      'gastrectomia-oncologica',
    ],
  },
  {
    slug: 'tumores-neuroendocrinos-pancreas',
    order: 5,
    group: 'hepatobiliopancreatica',
    category: 'Tumores neuroendócrinos',
    shortTitle: 'Tumores neuroendócrinos do pâncreas',
    title: 'Cirurgia dos tumores neuroendócrinos do pâncreas',
    expertise: true,
    metaTitle: 'Tumores Neuroendócrinos do Pâncreas | Dr. Daniel Flores',
    metaDescription:
      'Entenda como tamanho, grau, localização e produção hormonal orientam a cirurgia dos tumores neuroendócrinos pancreáticos.',
    cardDescription:
      'Estratégias que variam de ressecções limitadas a operações pancreáticas maiores, conforme risco, localização e comportamento do tumor.',
    heroLead:
      'Tumores neuroendócrinos pancreáticos têm comportamento muito diferente do adenocarcinoma. A escolha entre observar, operar de forma limitada ou realizar uma ressecção maior exige avaliação especializada.',
    highlights: [
      {
        label: 'Biologia',
        value: 'Tamanho, grau, índice proliferativo, crescimento e produção hormonal orientam a decisão.',
      },
      {
        label: 'Cirurgias possíveis',
        value: 'Enucleação, ressecções preservadoras, pancreatectomia distal ou cirurgia de Whipple.',
      },
      {
        label: 'Objetivo',
        value: 'Equilibrar controle tumoral, avaliação linfonodal e preservação da função pancreática.',
      },
    ],
    overview: [
      'Os tumores neuroendócrinos do pâncreas se originam das células produtoras de hormônios e formam um grupo diverso. Podem ser funcionantes, quando produzem hormônios que causam sintomas, ou não funcionantes. Grau, velocidade de crescimento e extensão da doença variam amplamente.',
      'Diferentemente do adenocarcinoma pancreático, alguns tumores pequenos e de baixo risco podem ser acompanhados. Quando há indicação cirúrgica, a operação pode ser uma enucleação, uma ressecção central, uma pancreatectomia distal ou uma duodenopancreatectomia, dependendo da localização e do risco oncológico.',
      'A possibilidade de múltiplas lesões ou de uma síndrome hereditária também muda o planejamento. O objetivo é não reduzir uma decisão complexa apenas ao tamanho do nódulo.',
    ],
    indicationsIntro:
      'A indicação cirúrgica considera o conjunto de características clínicas, hormonais, radiológicas e anatomopatológicas:',
    indications: [
      {
        title: 'Risco biológico',
        text: 'Grau, Ki-67 quando disponível, velocidade de crescimento, invasão e suspeita de comprometimento linfonodal pesam na decisão.',
      },
      {
        title: 'Função hormonal',
        text: 'Insulinomas, gastrinomas e outros tumores funcionantes exigem investigação e preparo específicos para controlar seus efeitos.',
      },
      {
        title: 'Localização e multiplicidade',
        text: 'Relação com o ducto pancreático e vasos, número de lesões e síndromes hereditárias influenciam a extensão da cirurgia.',
      },
    ],
    procedureIntro:
      'A variedade de operações possíveis torna o planejamento particularmente individualizado.',
    procedureSteps: [
      {
        title: '1. Caracterização do tumor',
        text: 'Imagem anatômica e funcional, avaliação hormonal e anatomopatológica ajudam a estabelecer estágio e comportamento.',
      },
      {
        title: '2. Escolha da extensão',
        text: 'A equipe compara a segurança de uma ressecção limitada com a necessidade de margens e avaliação linfonodal mais ampla.',
      },
      {
        title: '3. Controle perioperatório',
        text: 'Tumores funcionantes podem exigir medicamentos e protocolos anestésicos específicos antes e durante a operação.',
      },
      {
        title: '4. Estratégia de longo prazo',
        text: 'Mesmo após ressecção completa, grau e estágio determinam o acompanhamento; doença hepática pode exigir outras modalidades.',
      },
    ],
    recoveryIntro:
      'A recuperação depende principalmente de qual porção do pâncreas foi operada e de o tumor produzir hormônios.',
    recovery: [
      {
        title: 'Função pancreática',
        text: 'Glicemia, digestão e necessidade de enzimas são acompanhadas conforme a quantidade de pâncreas preservada.',
      },
      {
        title: 'Controle hormonal',
        text: 'Nos tumores funcionantes, sintomas e exames hormonais ajudam a medir a resposta ao tratamento.',
      },
      {
        title: 'Vigilância prolongada',
        text: 'Tumores neuroendócrinos podem ter evolução lenta; o seguimento costuma combinar imagens, exames clínicos e marcadores selecionados.',
      },
    ],
    faqs: [
      {
        question: 'Tumor neuroendócrino pancreático é igual ao câncer de pâncreas mais comum?',
        answer:
          'Não. Ele nasce de outro tipo celular e pode ter comportamento, exames, tratamentos e prognóstico muito diferentes do adenocarcinoma.',
      },
      {
        question: 'Todo tumor neuroendócrino do pâncreas precisa ser operado?',
        answer:
          'Não. Alguns tumores pequenos, não funcionantes e de baixo risco podem ser acompanhados. Sintomas, crescimento, grau, tamanho e preferência do paciente entram na decisão.',
      },
      {
        question: 'É sempre necessário retirar uma parte grande do pâncreas?',
        answer:
          'Não. Algumas lesões permitem enucleação ou ressecções preservadoras; outras exigem pancreatectomia distal ou cirurgia de Whipple para manter segurança oncológica.',
      },
      {
        question: 'Metástases no fígado impedem cirurgia?',
        answer:
          'Não necessariamente. Em casos selecionados, cirurgia do tumor primário, ressecção ou ablação hepática e outras terapias podem ser combinadas. A estratégia depende da distribuição e da biologia da doença.',
      },
    ],
    sources: [
      {
        label: 'National Cancer Institute — Pancreatic Neuroendocrine Tumors Treatment',
        url: 'https://www.cancer.gov/types/pancreatic/patient/pnet-treatment-pdq',
      },
      {
        label: 'ENETS — Diretriz para tumores neuroendócrinos pancreáticos',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/jne.13343',
      },
    ],
    relatedSlugs: [
      'pancreatectomia-distal',
      'duodenopancreatectomia-whipple',
      'tumores-neuroendocrinos-intestino-delgado',
    ],
  },
  {
    slug: 'gastrectomia-oncologica',
    order: 6,
    group: 'trato-digestivo',
    category: 'Estômago',
    shortTitle: 'Gastrectomia oncológica',
    title: 'Gastrectomia oncológica',
    metaTitle: 'Gastrectomia Oncológica | Dr. Daniel Flores',
    metaDescription:
      'Entenda as diferenças entre gastrectomia parcial e total, o papel da linfadenectomia e os cuidados nutricionais após a cirurgia.',
    cardDescription:
      'Retirada parcial ou total do estômago, associada aos linfonodos regionais, com extensão definida pela localização e pelo estágio do tumor.',
    heroLead:
      'A cirurgia do câncer de estômago procura remover o tumor e seus territórios linfonodais com margens adequadas, preservando parte do órgão quando isso é oncologicamente seguro.',
    highlights: [
      {
        label: 'Modalidades',
        value: 'Gastrectomia subtotal ou total, de acordo com localização e extensão do tumor.',
      },
      {
        label: 'Parte oncológica',
        value: 'A retirada dos linfonodos regionais integra o procedimento.',
      },
      {
        label: 'Continuidade',
        value: 'O trânsito alimentar é reconstruído e acompanhado com suporte nutricional.',
      },
    ],
    overview: [
      'Gastrectomia é a retirada de uma parte ou de todo o estômago. Tumores localizados em regiões mais distais podem permitir uma gastrectomia subtotal. Lesões próximas à junção com o esôfago, extensas ou difusas podem exigir gastrectomia total.',
      'Além do estômago, a cirurgia oncológica inclui os linfonodos que acompanham seus principais vasos. Essa linfadenectomia contribui para o controle local e fornece informações importantes sobre o estágio da doença.',
      'Depois da retirada, o aparelho digestivo é reconstruído para que a alimentação continue seu percurso. A adaptação nutricional é parte do tratamento e começa antes da cirurgia.',
    ],
    indicationsIntro:
      'A escolha entre ressecção endoscópica, gastrectomia subtotal ou total depende de uma avaliação integrada:',
    indications: [
      {
        title: 'Profundidade e estágio',
        text: 'Tumores muito iniciais podem ter tratamento endoscópico em critérios específicos; os demais são avaliados para cirurgia e tratamento sistêmico.',
      },
      {
        title: 'Localização',
        text: 'A distância das margens e o padrão de disseminação linfática determinam quanto do estômago precisa ser removido.',
      },
      {
        title: 'Estado nutricional',
        text: 'Peso, massa muscular, anemia e capacidade de alimentação são avaliados e tratados desde o pré-operatório.',
      },
    ],
    procedureIntro:
      'A cirurgia é uma etapa de um plano que frequentemente inclui tratamento sistêmico antes, depois ou nos dois momentos.',
    procedureSteps: [
      {
        title: '1. Estadiamento completo',
        text: 'Endoscopia, biópsia, tomografia e, em casos selecionados, ultrassom endoscópico ou laparoscopia avaliam a extensão.',
      },
      {
        title: '2. Sequência terapêutica',
        text: 'Oncologia clínica e cirurgia definem se a quimioterapia deve anteceder a operação e como continuará depois.',
      },
      {
        title: '3. Gastrectomia e linfadenectomia',
        text: 'A extensão é escolhida para obter margens seguras e remover os linfonodos regionais relevantes.',
      },
      {
        title: '4. Reconstrução digestiva',
        text: 'O intestino é conectado ao estômago remanescente ou ao esôfago, conforme o tipo de gastrectomia.',
      },
    ],
    recoveryIntro:
      'A adaptação alimentar é progressiva e continua depois da alta, com objetivos definidos para peso, hidratação e nutrientes.',
    recovery: [
      {
        title: 'Alimentação fracionada',
        text: 'Refeições menores e mais frequentes costumam facilitar a adaptação. A equipe orienta consistência, volume e progressão.',
      },
      {
        title: 'Vitaminas e minerais',
        text: 'Ferro, vitamina B12, cálcio e outros nutrientes podem precisar de monitorização e reposição, especialmente após gastrectomia total.',
      },
      {
        title: 'Sintomas de adaptação',
        text: 'Saciedade precoce, perda de peso e síndrome de dumping podem ocorrer e são manejadas com orientação nutricional e clínica.',
      },
    ],
    faqs: [
      {
        question: 'Todo câncer de estômago exige retirada total do órgão?',
        answer:
          'Não. A gastrectomia subtotal pode ser adequada quando permite margens oncológicas seguras. Localização, extensão e tipo do tumor definem a escolha.',
      },
      {
        question: 'É possível comer depois de uma gastrectomia total?',
        answer:
          'Sim. O esôfago é conectado ao intestino, e a alimentação é retomada progressivamente. Porções menores e acompanhamento nutricional tornam-se especialmente importantes.',
      },
      {
        question: 'A cirurgia pode ser laparoscópica ou robótica?',
        answer:
          'Pode em pacientes selecionados, desde que a abordagem mantenha os mesmos princípios de margem e linfadenectomia da cirurgia aberta.',
      },
      {
        question: 'A quimioterapia é sempre necessária?',
        answer:
          'Não em todos os estágios. Profundidade do tumor, linfonodos, características anatomopatológicas e condição clínica orientam a recomendação.',
      },
    ],
    sources: [
      {
        label: 'National Cancer Institute — Treatment of Stomach Cancer',
        url: 'https://www.cancer.gov/types/stomach/treatment',
      },
      {
        label: 'National Cancer Institute — Stomach Cancer Treatment by Stage',
        url: 'https://www.cancer.gov/types/stomach/treatment/by-stage',
      },
    ],
    relatedSlugs: [
      'cancer-colon-reto',
      'duodenopancreatectomia-whipple',
      'tumores-neuroendocrinos-intestino-delgado',
    ],
  },
  {
    slug: 'cancer-colon-reto',
    order: 7,
    group: 'trato-digestivo',
    category: 'Cólon e reto',
    shortTitle: 'Cirurgia do câncer de cólon e reto',
    title: 'Cirurgia do câncer de cólon e reto',
    metaTitle: 'Cirurgia do Câncer de Cólon e Reto | Dr. Daniel Flores',
    metaDescription:
      'Conheça as diferenças entre a cirurgia do cólon e do reto, o papel dos linfonodos, da anastomose e da preservação do esfíncter.',
    cardDescription:
      'Ressecções do cólon ou do reto com seus territórios linfonodais, planejadas conforme a localização, o estágio e a possibilidade de preservar função.',
    heroLead:
      'Embora sejam frequentemente reunidos como câncer colorretal, tumores do cólon e do reto têm planejamento diferente. A operação é adaptada à localização e integrada aos demais tratamentos.',
    highlights: [
      {
        label: 'Cólon',
        value: 'Retirada do segmento acometido e dos linfonodos correspondentes, seguida de reconstrução quando segura.',
      },
      {
        label: 'Reto',
        value: 'Planejamento pélvico preciso, com excisão do mesorreto e preservação do esfíncter sempre que possível.',
      },
      {
        label: 'Integração',
        value: 'Quimioterapia e radioterapia têm papéis distintos conforme estágio e localização.',
      },
    ],
    overview: [
      'Na cirurgia do cólon, é removido o segmento que contém o tumor junto aos vasos e linfonodos da região. Na maioria das vezes, as extremidades saudáveis são unidas por uma anastomose, restabelecendo o trânsito intestinal.',
      'No câncer de reto, a anatomia da pelve e a proximidade do esfíncter tornam o planejamento mais delicado. Para tumores que exigem ressecção radical, a retirada adequada do mesorreto é um princípio central. A possibilidade de preservar o esfíncter depende da altura do tumor, de sua resposta ao tratamento e da segurança das margens.',
      'Tumores do reto localmente avançados frequentemente recebem tratamento antes da cirurgia. Já no câncer de cólon, a sequência costuma ser diferente. Por isso, o diagnóstico “colorretal” precisa ser detalhado antes de qualquer decisão.',
    ],
    indicationsIntro:
      'A extensão da operação e a necessidade de tratamentos combinados são definidas por alguns fatores principais:',
    indications: [
      {
        title: 'Localização exata',
        text: 'Colonoscopia e imagens mostram o segmento do cólon ou a altura do tumor no reto e sua relação com estruturas próximas.',
      },
      {
        title: 'Estágio',
        text: 'Profundidade, linfonodos e presença de doença em outros órgãos orientam a sequência terapêutica e o objetivo da cirurgia.',
      },
      {
        title: 'Função e segurança',
        text: 'Continência, hábito intestinal, condição clínica e qualidade da anastomose prevista participam da decisão sobre reconstrução e estomia.',
      },
    ],
    procedureIntro:
      'O plano busca controle oncológico, reconstrução segura do intestino e preservação funcional sempre que possível.',
    procedureSteps: [
      {
        title: '1. Estadiamento específico',
        text: 'Cólon e reto usam exames complementares diferentes; a ressonância da pelve tem papel importante nos tumores retais.',
      },
      {
        title: '2. Tratamento pré-operatório',
        text: 'Em situações selecionadas, sobretudo no reto, quimioterapia e radioterapia podem anteceder a cirurgia.',
      },
      {
        title: '3. Ressecção oncológica',
        text: 'O segmento intestinal e seus linfonodos são removidos; no reto, o mesorreto é tratado conforme a altura e o estágio.',
      },
      {
        title: '4. Anastomose ou estomia',
        text: 'A reconstrução é realizada quando segura. Uma estomia temporária ou definitiva pode ser necessária em alguns casos.',
      },
    ],
    recoveryIntro:
      'O intestino passa por um período de adaptação, e a evolução varia conforme o segmento operado e os tratamentos associados.',
    recovery: [
      {
        title: 'Retorno da função intestinal',
        text: 'Alimentação, eliminação de gases e evacuações são acompanhadas enquanto a dieta e a mobilidade avançam.',
      },
      {
        title: 'Adaptação do hábito',
        text: 'Frequência, urgência e consistência das evacuações podem mudar, especialmente após cirurgias baixas do reto.',
      },
      {
        title: 'Cuidado com estomia',
        text: 'Quando necessária, a orientação começa antes da cirurgia e continua com equipe especializada durante a recuperação.',
      },
    ],
    faqs: [
      {
        question: 'Toda cirurgia colorretal exige bolsa de colostomia?',
        answer:
          'Não. Muitas operações terminam com anastomose. A estomia pode ser temporária para proteger uma conexão baixa ou definitiva quando a preservação do esfíncter não é segura.',
      },
      {
        question: 'É possível preservar o esfíncter no câncer de reto?',
        answer:
          'Frequentemente, sim. Altura e extensão do tumor, resposta ao tratamento e margem necessária definem se a preservação é oncologicamente segura.',
      },
      {
        question: 'A cirurgia pode ser robótica ou laparoscópica?',
        answer:
          'As abordagens minimamente invasivas são opções para muitos pacientes. A escolha considera anatomia, extensão da doença, urgência e cirurgias anteriores.',
      },
      {
        question: 'Câncer de cólon e câncer de reto recebem o mesmo tratamento?',
        answer:
          'Não necessariamente. A radioterapia e o tratamento antes da cirurgia são mais frequentes em tumores do reto, enquanto a sequência do câncer de cólon costuma ser diferente.',
      },
    ],
    sources: [
      {
        label: 'National Cancer Institute — Colon Cancer Treatment',
        url: 'https://www.cancer.gov/types/colorectal/patient/colon-treatment-pdq',
      },
      {
        label: 'National Cancer Institute — Rectal Cancer Treatment',
        url: 'https://www.cancer.gov/types/colorectal/hp/rectal-treatment-pdq',
      },
      {
        label: 'INCA — Padronização no cuidado do paciente com tumor colorretal',
        url: 'https://ninho.inca.gov.br/jspui/handle/123456789/3334',
      },
    ],
    relatedSlugs: [
      'hepatectomia-metastases-hepaticas',
      'gastrectomia-oncologica',
      'tumores-neuroendocrinos-intestino-delgado',
    ],
  },
  {
    slug: 'tumores-neuroendocrinos-intestino-delgado',
    order: 8,
    group: 'trato-digestivo',
    category: 'Tumores neuroendócrinos',
    shortTitle: 'Tumores neuroendócrinos do intestino delgado',
    title: 'Cirurgia dos tumores neuroendócrinos do intestino delgado',
    expertise: true,
    metaTitle: 'Tumores Neuroendócrinos do Intestino Delgado | Dr. Daniel Flores',
    metaDescription:
      'Entenda o planejamento cirúrgico dos tumores neuroendócrinos do jejuno e íleo, incluindo intestino, mesentério e linfonodos.',
    cardDescription:
      'Ressecção do tumor intestinal e do comprometimento mesentérico e linfonodal, com atenção à irrigação e à preservação do intestino.',
    heroLead:
      'Tumores neuroendócrinos do jejuno e do íleo podem ser pequenos, múltiplos e acompanhados por doença no mesentério. A cirurgia exige uma avaliação sistemática de todo o intestino e de sua irrigação.',
    highlights: [
      {
        label: 'Região',
        value: 'Principalmente jejuno e íleo, com avaliação do mesentério e dos linfonodos regionais.',
      },
      {
        label: 'Princípio',
        value: 'Remover a doença relevante preservando o máximo possível de intestino e sua irrigação.',
      },
      {
        label: 'Estratégia',
        value: 'Pode integrar tratamento de sintomas hormonais, doença hepática e vigilância prolongada.',
      },
    ],
    overview: [
      'Os tumores neuroendócrinos do intestino delgado surgem com maior frequência no jejuno e no íleo. Mesmo uma lesão pequena pode estar associada a linfonodos no mesentério, área que contém os vasos responsáveis pela irrigação intestinal.',
      'A cirurgia costuma incluir o segmento do intestino onde está o tumor e o tecido mesentérico com os linfonodos comprometidos. Como pode haver mais de uma lesão, a exploração cuidadosa de todo o intestino delgado é uma etapa importante.',
      'A doença mesentérica pode causar fibrose, alteração do fluxo sanguíneo, dor ou obstrução. Quando há metástases, especialmente no fígado, a utilidade e o momento da cirurgia são discutidos junto às demais opções de tratamento do tumor neuroendócrino.',
    ],
    indicationsIntro:
      'A decisão cirúrgica considera tanto o tumor primário quanto o efeito da doença sobre o mesentério e outros órgãos:',
    indications: [
      {
        title: 'Doença intestinal e mesentérica',
        text: 'Imagens avaliam linfonodos, fibrose, vasos e sinais de risco para obstrução ou redução da irrigação intestinal.',
      },
      {
        title: 'Extensão à distância',
        text: 'Exames anatômicos e funcionais mapeiam principalmente o fígado e ajudam a organizar uma estratégia combinada.',
      },
      {
        title: 'Atividade hormonal',
        text: 'Sintomas, marcadores e eventual síndrome carcinoide orientam preparo clínico e anestésico específico.',
      },
    ],
    procedureIntro:
      'O planejamento busca tratar a doença sem retirar desnecessariamente longos segmentos do intestino.',
    procedureSteps: [
      {
        title: '1. Estadiamento anatômico e funcional',
        text: 'Tomografia, ressonância e exames de receptores de somatostatina podem complementar a avaliação da distribuição tumoral.',
      },
      {
        title: '2. Preparo especializado',
        text: 'Equipe multidisciplinar avalia função cardíaca e controle hormonal quando há suspeita de síndrome carcinoide.',
      },
      {
        title: '3. Exploração e ressecção',
        text: 'Todo o intestino é examinado; tumor ou tumores, mesentério e linfonodos são tratados preservando a circulação intestinal.',
      },
      {
        title: '4. Plano para doença residual',
        text: 'Metástases e achados anatomopatológicos orientam terapias sistêmicas, locorregionais ou novas intervenções selecionadas.',
      },
    ],
    recoveryIntro:
      'Além da recuperação abdominal, o acompanhamento observa adaptação intestinal, sintomas hormonais e a evolução de longo prazo.',
    recovery: [
      {
        title: 'Função intestinal',
        text: 'A equipe acompanha alimentação, trânsito intestinal, hidratação e absorção, especialmente quando foi necessário retirar um segmento maior.',
      },
      {
        title: 'Sintomas hormonais',
        text: 'Rubor, diarreia e alterações cardiovasculares, quando presentes antes da cirurgia, continuam sendo avaliados.',
      },
      {
        title: 'Seguimento prolongado',
        text: 'Por poderem evoluir lentamente, tumores neuroendócrinos exigem vigilância com imagens e marcadores selecionados ao longo do tempo.',
      },
    ],
    faqs: [
      {
        question: 'Por que um tumor pequeno pode exigir cirurgia do mesentério?',
        answer:
          'Porque tumores neuroendócrinos do intestino delgado podem atingir linfonodos mesentéricos mesmo quando o tumor intestinal é pequeno. Essa doença pode envolver vasos e causar fibrose.',
      },
      {
        question: 'Pode haver mais de um tumor no intestino?',
        answer:
          'Sim. Lesões múltiplas podem ocorrer, motivo pelo qual a inspeção cuidadosa de todo o intestino delgado é importante durante a operação.',
      },
      {
        question: 'Metástases no fígado impedem a retirada do tumor intestinal?',
        answer:
          'Não automaticamente. Benefícios e riscos da ressecção do tumor primário são discutidos conforme sintomas, doença mesentérica, extensão hepática e opções de tratamento sistêmico.',
      },
      {
        question: 'O acompanhamento termina depois da cirurgia?',
        answer:
          'Não. Mesmo após ressecção completa, o seguimento costuma ser prolongado porque esses tumores podem apresentar evolução lenta e recorrência tardia.',
      },
    ],
    sources: [
      {
        label: 'National Cancer Institute — Gastrointestinal Neuroendocrine Tumors Treatment',
        url: 'https://www.cancer.gov/types/gi-neuroendocrine-tumors/patient/gi-neuroendocrine-treatment-pdq',
      },
      {
        label: 'ENETS — Diretriz para tumores neuroendócrinos do intestino delgado',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/jne.13423',
      },
    ],
    relatedSlugs: [
      'tumores-neuroendocrinos-pancreas',
      'hepatectomia-metastases-hepaticas',
      'cancer-colon-reto',
    ],
  },
]

export function getSurgery(slug: string) {
  return surgeries.find((surgery) => surgery.slug === slug)
}

export function getRelatedSurgeries(surgery: Surgery) {
  return surgery.relatedSlugs
    .map((slug) => getSurgery(slug))
    .filter((item): item is Surgery => Boolean(item))
}
