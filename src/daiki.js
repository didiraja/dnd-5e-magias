// Simple JS ID generator
const ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const skills = [
  {
    id: ID(),
    type: "race",
    name: "Arcano",
    desc:
      "+4 em testes de Identificar Magia. A natureza mágica dos hanyô faz com que entendam melhor o funcionamento das energias cósmicas",
  },
  {
    id: ID(),
    type: "race",
    name: "Brincar com Sentimentos",
    desc: "Chacra das Emoções (CAR)",
  },
  {
    id: ID(),
    type: "race",
    name: "Espírito Livre",
    desc:
      "Hanyo recebem +4 em testes contra efeitos que restringem seu movimento, como manobras de agarrar, armadilhas, redes, jutsus como estrepes invisíveis, paralisia, onda de frio e similares.",
  },
  {
    id: ID(),
    type: "race",
    name: "Poder Salvador",
    desc:
      "Um hanyô pode recorrer à sua ancestralidade mística para salvar-se de algum apuro com uma façanha surpreendente e espetacular. Caso esteja em perigo, o meio-youkai pode executar jutsus ou usar outros poderes com custo em PM por –1 ponto de magia (mínimo 1 PM).",
  },
  {
    id: ID(),
    type: "class",
    name: "Aprendiz da mente",
    desc: "Chacra da Mente (INT)",
  },
  {
    id: ID(),
    type: "class",
    name: "Percepção Elemental",
    desc:
      "A ligação do wu-jen com as energias elementais primordiais é forte. Com uma ação padrão para se concentrar, você detecta objetos ou fontes de um elemento (água, ar, fogo ou terra) escolhido no momento do uso. Quanto mais tempo se concentra, mais você descobre, conforme abaixo. <br/><br/> Esta habilidade não detecta criaturas, apenas objetos. Ela tem alcance de 9m, em qualquer direção. <strong>Água</strong> inclui gelo, neve, vapor e líquidos. <strong>Fogo</strong> inclui objetos aquecidos a mais de 70º (mesmo em estado líquido) e lava. <strong>Terra</strong> inclui rocha, pedra, metais, gemas, ácidos e venenos (mesmo em estado líquido). <strong>Ar</strong> inclui quaisquer gases (mesmo ácidos, venenos ou vapor).",
      bonus: [
        {
          "1 rodada":
            "você percebe a existência e a quantidade de objetos ou fontes do elemento na área",
        },
        {
          "2 rodadas":
            "você percebe o tamanho de cada objeto ou fonte do elemento existente na área.",
        },
        {
          "3 rodadas:":
            "você sabe dizer onde está cada objeto ou fonte do elemento na área (mesmo aquelas escondidas ou invisíveis.",
        },
      ],
  },
  {
    id: ID(),
    type: "class",
    name: "Raio Elemental",
    desc:
      "O puro poder elemental também pode ser usado ofensivamente. Como uma ação padrão, o wu-jen pode fazer um ataque de toque à distância a até 9m; se acertar, causa 1d4 pontos de dano (ácido, eletricidade, fogo, frio ou vento, escolhido no momento do uso). Esta habilidade conta como um jutsu para todos os propósitos; você deve fazer selos e mantras para usá-la, ela é afetada por resistência a jutsus, e também por talentos como Wu-jen de Batalha ou de aprimoramento (pelo custo adicional). <br/><br/> No 5º nível, ao disparar o raio elemental, você pode somar seu bônus de Inteligência à jogada de ataque e causa 1d6 pontos de dano. No 9º nível, causa 1d8 pontos de dano. No 13º nível, pode disparar o raio a até 30m e causa 1d10 pontos de dano. Por fim, no 17º nível, causa 1d12 pontos de dano e pode disparar múltiplos raios com uma única ação padrão, gastando 1 PM por raio adicional além do primeiro, até um máximo de raios igual a seu modificador de Inteligência.",
  },
  {
    id: ID(),
    type: "talent",
    name: "Vontade de Ferro",
    desc:
      "Você tem uma imensa força de vontade. <strong>Benefício:</strong> seu bônus de Vontade aumenta em +2. <strong>Especial:</strong> você pode escolher este talento diversas vezes. Seus efeitos se acumulam",
  },
  {
    id: ID(),
    type: "jutsu",
    name: "Bomba de Fumaça",
    stats: [
      {
        name: "Custo",
        desc: "1PM",
      },
      {
        name: "Tempo de Execução",
        desc: "Padrão",
      },
      {
        name: "Alcance",
        desc: "Curto",
      },
      {
        name: "Área",
        desc: "6m raio",
      },
      {
        name: "Efeito",
        desc: "nuvem com 6m de raio e altura",
      },
      {
        name: "Alvo",
        desc: "X",
      },
      {
        name: "Duração",
        desc: "Cena",
      },
      {
        name: "Teste de Resistência",
        desc: "nenhum",
      },
    ],
    desc:
      "Uma explosão faz uma névoa espessa (de cor escolhida por você) elevar-se de um ponto à sua escolha, obscurecendo a visão; criaturas a até 1,5m têm camuflagem e criaturas a partir de 3m têm camuflagem total. Um vento forte dispersa a névoa em 4 rodadas e um vendaval a dispersa em 1 rodada. Este jutsu não funciona sob a água.",
    bonus: [
      {
        "+1 PM":
          "muda o descritor vento para ácido. O jutsu passa a funcionar sob a água, criando uma nuvem de tinta.",
      },
      {
        "+2 PM":
          "até 10 criaturas escolhidas por você enxergam através do efeito.",
      },
      {
        "+2 PM":
          "a nuvem tem um cheiro horrível. Qualquer criatura dentro dela, ou qualquer criatura com faro a até 9m da nuvem, deve fazer um teste de Fortitude no início de seus turnos. Se falhar, fica enjoada por 1 rodada.",
      },
      {
        "+5 PM":
          "a nuvem é espessa, quase sólida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 1,5m (independente de seu deslocamento normal) e sofre penalidade de –2 nas jogadas de ataque e dano",
      },
    ],
  },
  {
    id: ID(),
    type: "jutsu",
    name: "Criar Elemento",
    stats: [
      {
        name: "Custo",
        desc: "1PM",
      },
      {
        name: "Tempo de Execução",
        desc: "Padrão",
      },
      {
        name: "Alcance",
        desc: "CaC",
      },
      {
        name: "Área",
        desc: "X",
      },
      {
        name: "Efeito",
        desc: "Elemento Escolhido",
      },
      {
        name: "Alvo",
        desc: "X",
      },
      {
        name: "Duração",
        desc: "Instant",
      },
      {
        name: "Teste de Resistência",
        desc: "nenhum",
      },
    ],
    desc:
      "<strong>Água:</strong> enche um recipiente de tamanho Mínimo (como uma tokkuri) com água potável. Se não tiver um recipiente, cria um cubo de gelo de tamanho Mínimo. <br/><br/> <strong>Ar:</strong> cria um vento fraco em uma área de 1,5m de diâmetro. Isso purifica a área de qualquer gás ou fumaça por uma rodada. <br/><br/> <strong>Fogo:</strong> cria uma chama com a intensidade de uma tocha. Pode servir para iluminação ou atear fogo em um objeto ou criatura. Nesse caso, faça um ataque de toque corpo-a-corpo para acertar, causando 1d4 pontos de dano de fogo. <br/><br/> <strong>Terra:</strong> cria um cubo ou esfera de tamanho Mínimo feito de terra, argila ou pedra. Os elementos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície horizontal. <br/><br/> Pode-se criar objetos simples (sem partes móveis) de gelo, terra, pedra com um teste de um Ofício apropriado.",
    bonus: [
      {
        "+1 PM":
          "aumenta a quantidade do elemento em um passo (mais uma categoria de tamanho para água ou terra, +1 quadrado de 1, 5m para ar e +1d4 pontos de dano para fogo).",
      },
      {
        "+1 PM":
          "pode arremessar imediatamente um cubo ou esfera que tenha criado em uma criatura ou objeto a até 9m. Faça um ataque de toque à distância. Se acertar, causa 1d6 pontos de dano de esmagamento. Para cada categoria de tamanho acima de Mínimo, o dano aumenta em +1d6. O cubo ou esfera se desfaz após acertar ou errar.",
      },
      {
        "+1 PM":
          "pode arremessar imediatamente uma chama que tenha criado em uma criatura ou objeto a até 9m. Faça um ataque de toque à distância. Se acertar, causa o dano indicado.",
      },
    ],
  },
  {
    id: ID(),
    type: "jutsu",
    name: "Fogo-Fátuo",
    stats: [
      {
        name: "Custo",
        desc: "1PM",
      },
      {
        name: "Tempo de Execução",
        desc: "padrão",
      },
      {
        name: "Alcance",
        desc: "Curto",
      },
      {
        name: "Área",
        desc: "X",
      },
      {
        name: "Efeito",
        desc: "4 esferas de luz",
      },
      {
        name: "Alvo",
        desc: "X",
      },
      {
        name: "Duração",
        desc: "Cena",
      },
      {
        name: "Teste de Resistência",
        desc: "nenhum",
      },
    ],
    desc:
      "Este jutsu cria até quatro pequenas esferas de luz espectral que iluminam como uma tocha e que você pode posicionar onde quiser dentro do alcance. Depois disso, movimentar as esferas exige uma ação livre. Se uma esfera ocupar o espaço de uma criatura, sua silhueta passa a ser vista claramente, e ela não recebe camuflagem por escuridão ou invisibilidade.",
    bonus: [
      {
        "+1 PM":
          "enquanto uma esfera ocupar o espaço de uma criatura, ela também fica ofuscada.",
      },
      {
        "+5 PM":
          "enquanto uma esfera ocupar o espaço de uma criatura, ela também fica cega (Reflexos anula).",
      },
    ],
  },
  {
    id: ID(),
    type: "jutsu",
    name: "Mandala-Escudo",
    stats: [
      {
        name: "Custo",
        desc: "1PM",
      },
      {
        name: "Tempo de Execução",
        desc: "Reação",
      },
      {
        name: "Alcance",
        desc: "pessoal",
      },
      {
        name: "Alvo",
        desc: "Usuario",
      },
      {
        name: "Duração",
        desc: "1 rodada",
      },
      {
        name: "Teste de Resistência",
        desc: "nenhum",
      },
    ],
    desc:
      "Você traça no ar uma mandala mística que o protege contra ataques físicos, recebendo CA+4.",
    bonus: [
      {
        "+1 PM": "aumenta o bônus em +1.",
      },
      {
        "+2 PM":
          "muda o alcance para curto e o alvo para criaturas escolhidas.",
      },
      {
        "+5 PM": "o alvo também recebe redução de dano igual ao bônus na CA.",
      },
    ],
  },
  {
    id: ID(),
    type: "jutsu",
    name: "Voz de Lin-Wu",
    stats: [
      {
        name: "Custo",
        desc: "1PM",
      },
      {
        name: "Tempo de Execução",
        desc: "Padrão",
      },
      {
        name: "Alcance",
        desc: "curto",
      },
      {
        name: "Área",
        desc: "X",
      },
      {
        name: "Alvo",
        desc: "1 Humanoide",
      },
      {
        name: "Duração",
        desc: "1 Rodada",
      },
      {
        name: "Teste de Resistência",
        desc: "Vontade - CD 15 - Anula",
      },
      {
        name: "CD para resistir",
        desc: "15",
      },
    ],
    desc:
      "Um comando superior não pode ser desobedecido. Você deve falar no idioma do alvo, dando uma ordem simples. Ele, em seu próprio turno, obedece da melhor maneira possível. Os comandos possíveis são: <br/><br/> <strong>Caia:</strong> o alvo se joga no chão — ou cai de onde estiver, caso esteja em lugar alto — e não se levanta até o próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto se levantar). <br/><br/> <strong>Fuja:</strong> o alvo gasta seu turno se afastando de você (usando duas ações de movimento). <br/><br/> <strong>Largue:</strong> o alvo solta quaisquer itens que esteja segurando com as mãos, e não pode pegá-los novamente até o início do próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegar aquilo que largou). <br/><br/> <strong>Pare:</strong> o alvo fica pasmo (não pode fazer ações). <br/><br/> <strong>Venha:</strong> o alvo gasta seu turno se aproximando de você (usando duas ações de movimento).",
    bonus: [
      {
        "+1 PM": "muda o alvo para 1 criatura.",
      },
      {
        "+2 PM": "aumenta a quantidade de alvos em +1.",
      },
    ],
  },
  {
    id: ID(),
    type: "jutsu",

    name: "Arma Incendiária",
    stats: [
      {
        name: "Custo",
        desc: "1 PM",
      },
      {
        name: "Tempo de Execução",
        desc: "Movimento",
      },
      {
        name: "Alcance",
        desc: "pessoal",
      },
      {
        name: "Área",
        desc: "X",
      },
      {
        name: "Efeito",
        desc: "X",
      },
      {
        name: "Alvo",
        desc: "1 arma CaC",
      },
      {
        name: "Duração",
        desc: "cena",
      },
      {
        name: "Teste de Resistência",
        desc: "nenhum",
      },
    ],
    desc:
      "A arma escolhida é envolvida por chamas mágicas, causando +1d6 pontos de dano de fogo. Se soltar a arma, o jutsu se esvai.",
    bonus: [
      {
        "+1 PM":
          "muda o alvo para armas de ataque à distância. Afeta qualquer arma arremessada por você ou projétil disparado pela arma.",
      },
      {
        "+2 PM": "muda o bônus para +1d10",
      },
      {
        "+2 PM":
          "se você acertar um crítico com a arma afetada, o oponente é derrubado.",
      },
    ],
  },
  {
    id: ID(),
    type: "jutsu",

    name: "Esfera-Elétrica",
    stats: [
      {
        name: "Custo",
        desc: "1 PM",
      },
      {
        name: "Tempo de Execução",
        desc: "padrão",
      },
      {
        name: "Alcance",
        desc: "pessoal",
      },
      {
        name: "Área",
        desc: "3m de raio",
      },
      {
        name: "Efeito",
        desc: "X",
      },
      {
        name: "Alvo",
        desc: "X",
      },
      {
        name: "Duração",
        desc: "Instant",
      },
      {
        name: "Teste de Resistência",
        desc: "Fortitude - CD 15 - Anula",
      },
      {
        name: "CD para resistir",
        desc: "15",
      },
    ],
    desc:
      "Relâmpagos explodem ao seu redor. Criaturas na área sofrem 2d8 pontos de dano de eletricidade. Criaturas usando armaduras de metal (ou carregando muito metal) sofrem –4 em seu teste de resistência.",
    bonus: [
      {
        "+1 PM": "muda o teste de resistência para Fortitude reduz à metade.",
      },
      {
        "+2 PM": "aumenta o dano em +1d8.",
      },
      {
        "+2 PM": "muda o alcance para 9m.",
      },
    ],
  },
];
