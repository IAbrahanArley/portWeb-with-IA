# Abrahan Arley — direção visual

Referência fornecida pelo usuário: portfólio escuro com geometria turquesa, contraste e composição de galeria. Atualização solicitada: identidade azul, mantendo a composição aprovada. Aplicação: portfólio de engenharia backend; não copiar textos, marca ou fotografia da referência.

## Ideia

Revisão final pela nova referência CodeCraft enviada pelo usuário: apresentação pessoal à esquerda e retrato recortado à direita sobre círculo azul sólido. O monograma permanece na marca do cabeçalho; saiu de trás da foto. Nome em destaque, especialidade real em painel lateral e tecnologias abaixo das ações. A seção Sobre apresenta o contexto profissional sem repetir a foto. Foram mantidos o carrossel e os dados reais, sem adotar as porcentagens de domínio, depoimentos ou estatísticas da referência.

Ajuste solicitado em seguida: sombra suave no círculo e no painel de especialidade. Painel reposicionado para a esquerda sobre a borda do recorte; flutuação vertical de 10 px em ciclo de seis segundos, somente sem preferência por movimento reduzido. Essas sombras e a animação contínua são escolhas explícitas do usuário para essa composição.

O A de Abrahan se torna uma assinatura geométrica que abre a página; os projetos, a experiência financeira e as decisões de implementação dão conteúdo à assinatura. A interação principal é explorar os projetos em carrossel e abrir seus estudos. A trajetória profissional pode ser consultada por empresa, com mouse, toque ou teclado.

## Sistema

- Fundo: `#0d1118`; superfícies: `#141c29` e `#202d42`.
- Texto: `#eef2f8`; texto secundário: `#a9b4c5`.
- Ação e assinatura: `#82b5ff`; texto sobre ação: `#102440`.
- Uma família: Manrope, carregada com next/font. Títulos semibold/medium, medidas curtas, corpo de 16–18 px.
- Botões arredondados; imagens e painéis com cantos retos. Separação por espaço e mudanças de tom.
- Navegação sem vidro, gradiente, brilho ou barra flutuante. Monograma SVG nativo, adaptado à inicial do autor.

## Composição e motion

Hero em duas colunas no desktop e composição vertical no celular. Título em duas linhas, seguido de apresentação e ação. Carrosséis com um projeto dominante e indicação do próximo, títulos sempre visíveis, setas e arraste. Sobre com retrato próprio; experiência com lista de empresas e painel de conteúdo; competências e formação em composições distintas; contato com tipografia ampla.

Motion: revelação dos títulos por linha, entradas de conteúdo via IntersectionObserver/Web Animations, inclinação discreta do monograma por ponteiro, deslocamento da foto vinculado à rolagem em navegadores compatíveis, transições do carrossel e do painel profissional. Sem autoplay ou bloqueio da rolagem. Conteúdo aparece normalmente sem a camada de animação; preferência de movimento reduzido desativa deslocamentos e reduz a duração do carrossel.

## Skills e adaptações

design-taste-frontend: direção final “The dark room”, seed 688603453. A exploração inicial de “Type and nothing else” foi substituída porque a referência explícita do usuário exigia o ambiente escuro e a assinatura geométrica. Tipografia e paleta foram mantidas da direção da referência. O bloco work foi trocado de “Loose scatter with pauses” para “One strip per project” para atender ao pedido explícito de carrosséis. O hero foi adaptado à assinatura A, em vez de usar fotografia atmosférica sem relação com o autor. O contato usa links reais, em vez de formulário sem serviço de envio.

awesome-design-md: referência local Vercel para hierarquia, espaçamento, estados e consistência; não foram adotados os gradientes, sombras, rótulos monoespaçados ou a identidade da marca. web-design-guidelines: revisão de semântica, foco, controles nomeados, teclado, estados vazios e movimento reduzido.

## Imagens e honestidade editorial

- `abrahan-perfil.jpeg`: retrato original fornecido pelo usuário, preservado. A composição atual usa `abrahan-recorte.webp`, derivado com remoção de fundo pela ferramenta integrada image_gen, à frente de círculo azul na abertura. Origem e prompt em `docs/portrait-cutout.md`. A composição anterior sobre o monograma foi substituída a pedido do usuário.
- `projects/pede-rapido.webp`: capa publicada no README de PedeRapidoAI, obtida do anexo GitHub `7aec6d7d-1588-4995-905e-699bdce42f7a`.
- `projects/list-film.webp`: capa publicada no README de listfilm, anexo `23c343f8-70c9-4880-9fdf-4403bf51b2c6`.
- `projects/xadrez.webp`: capa já vinculada ao projeto XadrezConsole, anexo `21bddb46-fbe5-425d-b7c5-b95e703db89e`.

As três capas acima vieram dos repositórios indicados pelo próprio portfólio. São identificadas como capas, sem prometer que toda imagem seja screenshot de uma aplicação em execução. A capa atual de Recrutamento é uma ilustração conceitual, com geração e contexto documentados em `docs/project-rh-capa.md`; a composição HTML/CSS de arquitetura permanece como alternativa no componente. Queridas Compras usa composição HTML/CSS com informações do projeto. Nenhuma tela fictícia é apresentada como captura real. Não foram usadas fotografias de terceiros da biblioteca de referências.

O deploy público por IP do project-rh não respondeu durante a consulta, portanto não foi adicionado botão de demo. Imagens anteriores do Google Cloud retornaram 403; os carrosséis agora usam mídia local ou composição editorial. O SVG de fundo de aproximadamente 30 MB e o vídeo genérico deixaram de ser requisitados pela interface.
