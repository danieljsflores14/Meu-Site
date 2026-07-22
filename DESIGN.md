---
name: Dr. Daniel Flores
description: Cirurgia geral de alta complexidade — navio escuro, ouro caloroso e reveal cinematográfico.
colors:
  ink-navy: "#060f1e"
  ink-navy-raised: "#0a1a30"
  ink-navy-panel: "#0b1728"
  ink-navy-hover: "#10243c"
  gold: "#c6a15b"
  gold-bright: "#e6c987"
  gold-deep: "#8a6d3b"
  ivory: "#f3efe7"
  mist: "#ece7df"
  sand: "#b6b0a5"
  sand-muted: "#a39c92"
  sand-deep: "#9a938a"
  sand-caption: "#948e84"
  sand-whisper: "#8b857b"
typography:
  display:
    fontFamily: "var(--font-cormorant), Georgia, serif"
    fontSize: "clamp(44px, 7vw, 110px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "var(--font-cormorant), Georgia, serif"
    fontSize: "clamp(32px, 4.4vw, 68px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "var(--font-cormorant), Georgia, serif"
    fontSize: "clamp(24px, 2vw, 30px)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.005em"
  body:
    fontFamily: "var(--font-archivo), -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.72
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-archivo), -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.32em"
rounded:
  none: "0px"
  circle: "50%"
  pill: "100px"
spacing:
  xs: "16px"
  sm: "28px"
  md: "44px"
  section: "clamp(90px, 11vw, 170px)"
components:
  button-pill:
    backgroundColor: "{colors.gold-bright}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.pill}"
    padding: "17px 34px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.mist}"
    rounded: "{rounded.pill}"
    padding: "17px 34px"
  nav-pill:
    backgroundColor: "transparent"
    textColor: "{colors.gold-bright}"
    rounded: "{rounded.pill}"
    padding: "12px 26px"
  area-cell:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.sand-caption}"
    rounded: "{rounded.none}"
    padding: "clamp(34px, 3vw, 52px)"
  area-cell-hover:
    backgroundColor: "{colors.ink-navy-hover}"
---

# Design System: Dr. Daniel Flores

## 1. Overview

**Creative North Star: "O Centro Cirúrgico à Meia-Luz"**

O sistema é uma sala de cirurgia de alto nível vista com as luzes baixas: um navio profundo (`#060f1e`) que domina a tela, com um foco de luz dourada e quente que pousa sobre o que importa. A escuridão não é vazio — é a atmosfera de concentração e seriedade que envolve a alta complexidade. Sobre ela, o ouro é o calor humano na sala fria, e o conteúdo entra em cena por revelações cinematográficas (translação, blur, wipe) conforme se rola a página. Autoridade demonstrada pela contenção e pela precisão do movimento, nunca pelo volume.

A dupla tipográfica carrega a dupla natureza da marca. **Cormorant Garamond** — serif clássica, de alto contraste — fala de ciência, formação e excelência acadêmica (a herança UFRJ). **Archivo** — grotesca de traço firme e altíssima legibilidade — conduz o texto com clareza e, em rótulos maiúsculos com muito tracking, dá o toque institucional. Serif que impõe respeito, grotesca que organiza e acolhe.

Este sistema **rejeita ativamente** a estética de clínica genérica de convênio: nada de azul-clarinho de folheto, sorrisos de banco de imagem ou diagramação de panfleto. Onde o material pop de clínica é raso e comercial, este é profundo, sóbrio e provado por fatos (fotos reais do médico, hospitais, títulos).

**Key Characteristics:**
- Navio escuro dominante (`#060f1e` / `#0a1a30`) como atmosfera de sala cirúrgica à meia-luz.
- Ouro caloroso — gradiente `#e6c987`→`#c6a15b` — para CTAs, hairlines, numerais e acentos.
- Serif institucional (Cormorant) para títulos; Archivo para corpo e rótulos.
- Neutros **quentes** (marfim/areia), nunca cinza-azulado frio nem branco puro.
- Reveal cinematográfico ao rolar; pills e hairlines finas em vez de caixas pesadas.

## 2. Colors

Paleta de dois mundos: o navio profundo que forma a atmosfera e o ouro caloroso que a torna humana, com uma escala de areias quentes para o texto.

### Primary
- **Navio Abissal** (`#060f1e`): fundo do `<body>` e base das seções — a sala à meia-luz. Carrega ~60% da superfície.
- **Navio Elevado** (`#0a1a30`): fundo das seções alternadas (Trajetória, Consultório) para profundidade.
- **Navio Painel** (`#0b1728`): faixas de legenda sobre as fotos.
- **Navio Hover** (`#10243c`): estado hover das células de Áreas de Atuação.

### Secondary
- **Ouro** (`#c6a15b`): o acento central — hairlines, kickers, numerais, ícones, links. A assinatura.
- **Ouro Vivo** (`#e6c987`): topo do gradiente dos CTAs e dos números de destaque; a face mais luminosa.
- **Ouro Profundo** (`#8a6d3b`): fecho do gradiente na ênfase itálica do hero.

### Neutral (quentes)
- **Marfim** (`#f3efe7`): tinta dos títulos sobre o navio. Marfim quente, nunca branco puro.
- **Névoa** (`#ece7df`): tinta base do corpo e de rótulos de contraste.
- **Areia** (`#b6b0a5`): corpo do hero e links de rodapé.
- **Areia Média** (`#a39c92`): parágrafos de seção.
- **Areia Profunda** (`#9a938a`): introduções e legendas secundárias.
- **Areia Legenda** (`#948e84`): descrições de card e marcos.
- **Areia Sussurro** (`#8b857b`): subtítulos discretos (subtítulo do logo, descrição do rodapé).

### Named Rules
**A Regra do Ouro Caloroso.** O ouro é o calor da sala — presente em hairlines, numerais, ícones e CTAs para manter a paleta escura humana. Mas ele nunca disputa o olhar com o marfim: **o ouro guia, o marfim fala.** A headline é sempre marfim; o ouro conduz até ela (com uma única ênfase itálica em gradiente dourado por seção, no máximo).

**A Regra do Marfim Quente.** Nenhum branco puro (`#ffffff`) como tinta. Todo neutro puxa para o quente (marfim/areia). Branco puro ou cinza-azulado frio sobre navio lê como hospitalar — exatamente o que a marca evita.

## 3. Typography

**Display Font:** Cormorant Garamond (com Georgia, serif)
**Body Font:** Archivo (com -apple-system, sans-serif)

**Character:** Contraste real, não similaridade. A Cormorant é serif de alto contraste, elegante e acadêmica; a Archivo é grotesca de traço firme, limpa e altamente legível, que também assina os rótulos maiúsculos com tracking largo. Serif que impõe respeito, grotesca que organiza.

### Hierarchy
- **Display** (Cormorant 400, `clamp(44px, 7vw, 110px)`, line-height 1, `-0.015em`): headline do hero, uma vez por página. Revelada linha a linha; ênfase por *itálico* em gradiente dourado.
- **Headline** (Cormorant 400, `clamp(32px, 4.4vw, 68px)`, line-height 1.05): títulos de seção (`h2`), com uma palavra em *itálico* dourado.
- **Title** (Cormorant 500, `clamp(24px, 2vw, 30px)`): títulos de card e marcos (`h3`).
- **Body** (Archivo 300, `16px`, line-height 1.7–1.78): corpo de texto. Peso 300 é a base sobre o escuro; limite de linha 40–58ch.
- **Label** (Archivo 400/500/600, `11–12px`, `letter-spacing: .22em–.34em`, MAIÚSCULAS): kickers dourados, rótulos de contato e de rodapé.

### Named Rules
**A Regra da Serif com Autoridade.** Todo título é Cormorant; todo corpo e rótulo é Archivo. Trocar a serif dos títulos por grotesca esvazia o peso institucional.

**A Regra do Número Cormorant.** Números de destaque (estatísticas, numerais 01–04, marcos) são sempre Cormorant grande — a serif dá gravidade ao dado.

## 4. Elevation

Sistema **plano com profundidade por luz e movimento**, não por sombra de caixa. Superfícies são planas, separadas por hairlines de 1px translúcidas (`rgba(255,255,255,0.07–0.1)`). A profundidade vem de: (a) o **brilho ambiente dourado** sob os CTAs e o botão flutuante de WhatsApp; (b) o **parallax** do fundo do hero; (c) as **revelações** ao rolar (translação + blur → nítido, ou clip-path wipe nas imagens). Nada de sombra cinza dura de "app 2014".

### Shadow Vocabulary
- **Brilho de Ouro — CTA hover** (`box-shadow: 0 18px 40px -14px rgba(198,161,91,0.6)`): o CTA "acende" e sobe `translateY(-3px)` no hover.
- **Brilho de Ouro — Float** (`box-shadow: 0 14px 34px -10px rgba(198,161,91,0.7)`): sob o botão flutuante de WhatsApp (animação `floaty`).

### Named Rules
**A Regra da Hairline.** Superfícies e cards são separados por linhas de 1px translúcidas, não por caixas com sombra. A grade de Áreas usa gaps de 1px sobre um fundo claro translúcido para desenhar as divisórias.

**A Regra do Reveal.** O conteúdo é visível por padrão (SSR, sem-JS, `prefers-reduced-motion`); o movimento é enriquecimento progressivo via `[data-reveal]`, nunca um portão que esconde conteúdo.

## 5. Components

### Buttons
- **Shape:** pílula (`border-radius: 100px`) — não cantos retos.
- **Primary (pill):** gradiente `linear-gradient(110deg, #e6c987, #c6a15b)`, tinta Navio (`#060f1e`), padding `17px 34px`, maiúsculas com `letter-spacing: .1em`. Hover: `translateY(-3px)` + brilho dourado.
- **Ghost:** transparente, borda `1px solid rgba(255,255,255,0.22)`, tinta Névoa. Hover: borda e texto viram ouro.
- **Nav pill:** contorno dourado (`rgba(198,161,91,0.6)`), tinta Ouro Vivo, pílula compacta `12px 26px`. Hover: preenche de ouro com texto Navio.

### Cards / Surfaces
- **Área de Atuação:** célula de grade (não card solto) sobre grid com gaps de 1px; fundo Navio, hover Navio Hover (`#10243c`); numeral 01–04 em Cormorant 52px `rgba(198,161,91,0.45)` + círculo com seta ↗.
- **Foto (figure):** sem raio; borda hairline (dourada `rgba(198,161,91,0.28)` na foto-âncora), faixa de legenda em Navio Painel (`#0b1728`) abaixo. Reveal por `wipe` (clip-path + zoom da imagem 1.4→1).
- **Hospital card:** `aspect-ratio: 3/4`, imagem com gradiente inferior, hairline dourada de 24px + nome em Cormorant. Hover: leve zoom da imagem.

### Navigation
- **Nav fixa** com monograma "DF" em círculo dourado + nome/subtítulo. Transparente no topo; ao rolar (`y>40`) ganha fundo `rgba(6,15,30,0.9)` + `backdrop-filter: blur(16px)` + hairline inferior. Links some abaixo de 760px, mantendo o pill "Agendar".

### Signature — Scroll Reveal
Runtime de enriquecimento (`ScrollFX`): IntersectionObserver aplica `translateY+blur→nítido` (up), `translateY(110%)→0` (line, dentro de wrappers `overflow:hidden`) e `clip-path wipe` (imagens). Contadores animam de 0 até o valor. Fundo do hero faz parallax; a nav solidifica. Tudo desligado sob `prefers-reduced-motion`, com o conteúdo visível por padrão.

## 6. Do's and Don'ts

### Do:
- **Do** manter o navio escuro (`#060f1e` / `#0a1a30`) como atmosfera dominante.
- **Do** usar o ouro como gradiente quente (`#e6c987`→`#c6a15b`) em CTAs, hairlines e numerais; deixar o **marfim** falar nos títulos.
- **Do** usar Cormorant nos títulos e números; Archivo no corpo e rótulos maiúsculos.
- **Do** manter neutros quentes (marfim/areia); telefone sempre como `tel:` clicável ao lado do WhatsApp.
- **Do** garantir que o conteúdo apareça por padrão e respeitar `prefers-reduced-motion`.

### Don't:
- **Don't** parecer clínica genérica de convênio / material pop: sem **azul-clarinho de folheto**, sem **sorrisos de banco de imagem**, sem **diagramação de panfleto**.
- **Don't** usar branco puro (`#ffffff`) nem cinza-azulado frio como tinta — sempre marfim/areia quentes.
- **Don't** deixar o ouro competir com o marfim pelo olhar; o ouro guia, o marfim fala.
- **Don't** usar sombra cinza dura de "app 2014"; a profundidade é dourada, por luz e movimento.
- **Don't** esconder conteúdo atrás de animação: reveal enriquece um padrão já visível.
- **Don't** usar cantos retos onde o sistema pede pílula, nem borda-lateral colorida (`border-left`/`right` > 1px) como acento.

> Nota: a ênfase itálica em gradiente dourado do hero ("precisão absoluta") usa `background-clip: text`, um recurso que normalmente evitamos. Aqui é uma escolha deliberada e única do look atual; não replicar gradient-text em nenhum outro texto.
