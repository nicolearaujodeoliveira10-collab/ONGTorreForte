# Design — ONG Torre Forte

Fonte de verdade **visual** do projeto. A identidade final é original e pertence à ONG Torre Forte.

> **Paleta oficial.** As cores da seção 3 foram extraídas do logo em `marca/WhatsApp Image 2026-10-21 at 00.02.59.jpeg` (2026-10-21). Por enquanto, esse JPEG é o único arquivo de marca disponível; ver a seção 4 sobre as versões que ainda faltam.

---

## 1. Análise das referências

Arquivos analisados em `referência - site/`: o print completo do site Gerando Falcões International, o template "Humanity" (da imagem *20+ Best Nonprofit & Charity Website Templates*) e o atalho com o link do Gerando Falcões.

### Gerando Falcões International
- **Estrutura:** página única e longa; logo centralizado com botão "Doar" no topo; carrossel de fotos; frase-manifesto gigante; texto institucional; números de impacto; história com foto; tecnologias sociais; um bloco repetido por programa (título, frase, botão e 4 fotos); eventos; formulário; rodapé.
- **Paleta:** fundo quase preto (#1E1E1E) em toda a página; títulos em amarelo-ouro, verde e branco; botões azul-ciano; botão de envio verde.
- **Tipografia:** display condensado, pesado e em caixa alta como protagonista; corpo em sans geométrica.
- **Espaçamento e ritmo:** seções bem separadas e texto em coluna estreita centralizada; o ritmo vem da repetição do mesmo bloco por programa.
- **Imagens:** fotos reais, próximas, coloridas e com crianças sorrindo; cantos arredondados nas grades.
- **Tom:** urgente, de manifesto e de grande escala.

### Template "Humanity"
- **Estrutura:** barra superior de contato; hero com rosto de criança e frase curta; 3 cards de ação sobrepostos ao hero; "sobre" com barra de meta de doação; cards de causas com valor e botão.
- **Paleta e tom:** fundo claro, coral e turquesa, serifa clássica; mais acolhedor, porém genérico.

### O que levamos (só direção)
- Tipografia de título grande como protagonista emocional.
- Números de impacto em faixa de destaque.
- Mesma estrutura repetida para cada projeto, o que dá ritmo e previsibilidade.
- Fotos reais, próximas e alegres, com cantos arredondados.
- CTA de doação sempre visível.
- Cards de ação logo abaixo do hero.
- Texto corrido em coluna estreita.

### O que NÃO levamos
- Textos, nomes, logotipos, ícones e imagens das duas referências.
- Fundo escuro em toda a página, palavras gigantes ocupando a largura inteira e títulos todos em caixa alta condensada.
- A combinação de cores do Gerando Falcões (amarelo, verde e ciano sobre preto) e a coral/turquesa do Humanity. O amarelo da Torre Forte vem do sol do próprio logo e sempre aparece junto com o vermelho e o grafite da marca.
- Barra de meta com valores fictícios.
- Layouts reproduzidos de forma idêntica.

---

## 2. Direção visual

**"Calor de comunidade, firmeza de torre."** O slogan oficial da ONG, *Aquecendo corações*, confirma essa direção.

O site deve parecer um lugar seguro: acolhedor como a casa de um vizinho e sólido como uma construção que protege. A emoção vem das fotos reais e das frases curtas; a credibilidade vem da organização, do espaço e da consistência.

- **Palavras-chave:** acolhedor, humano, esperançoso, sólido, próximo, alegre sem ser infantil.
- **Ritmo de página (decisão aprovada): alternado.** As seções intercalam fundo claro (creme ou areia) e fundo escuro (grafite). O escuro é reservado para momentos de peso: impacto, ciclo da solidariedade e CTA final. Nunca duas seções escuras seguidas.
- **Motivos gráficos (vindos do logo):**
  - **Tijolos empilhados**, em cinza-tijolo e com junta grafite: divisores de seção, fundo de faixas de destaque e base do "ciclo da solidariedade";
  - **Coração vermelho:** pequeno destaque (marcador de lista, separador, ícone de "doar"). No máximo um por bloco;
  - **Raios de sol amarelos:** só como acento decorativo pontual (ex.: atrás de um número de impacto ou do card de Pix), nunca como fundo de página.

---

## 3. Paleta oficial

### Cores da marca (extraídas do logo)

| Token | HEX | Origem no logo | Uso |
|-------|-----|----------------|-----|
| `--cor-coracao` | `#D0010C` | Palavra "Torre Forte" e corações | **Primária.** Botões de doação em fundo claro, títulos de destaque e aspas |
| `--cor-coracao-escura` | `#A8000A` | — (derivada) | Hover do botão primário |
| `--cor-sol` | `#FABD03` | Sol, coração em traço e slogan | **Secundária.** Botão primário em fundo escuro, card de Pix, números de impacto e acentos |
| `--cor-sol-escura` | `#E0A800` | — (derivada) | Hover do botão amarelo |
| `--cor-tijolo` | `#9EA0AC` | Tijolos da torre | Motivo de tijolos, texto secundário em fundo escuro e bordas em fundo escuro |
| `--cor-grafite` | `#1F1F21` | Contornos da torre | Texto principal, fundo das seções escuras e botão secundário |

### Neutros

| Token | HEX | Uso |
|-------|-----|-----|
| `--cor-creme` | `#FAF6EF` | Fundo claro principal (calor do "aquecendo corações") |
| `--cor-areia` | `#F1E8DA` | Fundo claro alternativo, cards e placeholders |
| `--cor-branco` | `#FFFFFF` | Cards, campos de formulário e fundo do logo |
| `--cor-linha` | `#E4D9C8` | Bordas e divisores em fundo claro |
| `--cor-grafite-suave` | `#55565E` | Texto secundário em fundo claro |

Texto em fundo grafite: principal em `--cor-creme` e secundário em `--cor-tijolo`.

### Estados

| Token | HEX | Uso |
|-------|-----|-----|
| `--cor-erro` | `#B3261E` | Mensagens de erro, sempre com ícone e texto para não confundir com o vermelho da marca |
| `--cor-sucesso` | `#2E7D32` | Confirmações (ex.: "Chave Pix copiada") |

### Contrastes verificados (WCAG AA)

| Combinação | Contraste | Liberado para |
|------------|-----------|---------------|
| Grafite sobre creme | ~15:1 | Qualquer texto |
| Grafite suave sobre creme / areia | ~6,8:1 / ~6:1 | Qualquer texto |
| Branco sobre coração | ~5,7:1 | Texto do botão primário |
| Coração sobre creme / branco | ~5,3:1 / ~5,7:1 | Títulos, destaques e aspas |
| Grafite sobre sol | ~9,7:1 | Texto do botão amarelo e do card de Pix |
| Sol sobre grafite | ~9,7:1 | Números de impacto e destaques no escuro |
| Creme sobre grafite | ~15:1 | Qualquer texto no escuro |
| Tijolo sobre grafite | ~6,3:1 | Texto secundário no escuro |
| Coração contra sol (borda do botão) | ~3,3:1 | Botão vermelho sobre o card amarelo |

### Regras de cor
- **Proibido como texto ou botão em fundo claro:** sol (~1,7:1) e tijolo (~2,4:1).
- **Proibido em fundo grafite:** coração como texto ou como botão (~2,9:1). No escuro, o botão primário é amarelo.
- O vermelho fica reservado para doação e destaques pontuais; nunca vira fundo de seção inteira. O amarelo pode ser fundo apenas no card de Pix e na faixa de CTA final.
- Uma seção não usa mais de uma cor de destaque (vermelho **ou** amarelo) como protagonista.

---

## 4. Uso do logo

- **Arquivo atual:** `marca/WhatsApp Image 2026-10-21 at 00.02.59.jpeg`, um JPEG de 1600×957 com fundo branco, comprimido pelo WhatsApp.
- **Composição:** torre de tijolos com a palavra "ONG" na base, sol e coração amarelos atrás, palavra "Torre Forte" em vermelho (os "O" são corações) e slogan *Aquecendo corações* em letra cursiva amarela.
- **Não fazer:** redesenhar, recolorir, distorcer, separar a torre da palavra (até existir uma versão oficial reduzida), aplicar sombra ou contorno, ou colocar o JPEG com fundo branco sobre fundo creme ou grafite.
- **Enquanto não houver outras versões:** usar o logo só sobre fundo branco (por exemplo, no cabeçalho branco) ou dentro de uma área branca com raio `--raio-md`.
- **Área de respiro:** no mínimo a altura da palavra "ONG" em todos os lados.
- **Tamanho mínimo:** 160px de largura no desktop e 128px no celular. Abaixo disso o slogan fica ilegível; nesse caso será necessária uma versão sem slogan.
- **A letra cursiva do slogan existe só dentro do logo.** Não recriá-la como fonte do site.

---

## 5. Tipografia

**Decisão aprovada:** **Bricolage Grotesque** nos títulos e **DM Sans** no texto. As duas são gratuitas (Google Fonts) e serão hospedadas localmente em `.woff2`. Elas combinam com a palavra "Torre Forte" do logo, que é sem serifa, pesada e geométrica.

- **Bricolage Grotesque:** pesos 700 e 800. Para display, números e títulos.
- **DM Sans:** pesos 400, 500 e 700. Para texto, botões, rótulos e formulários.
- Fallbacks: `"Bricolage Grotesque", "Segoe UI", system-ui, sans-serif` e `"DM Sans", "Segoe UI", system-ui, sans-serif`.
- Títulos em **sentence case** (só a primeira letra maiúscula), não tudo em caixa alta. Caixa alta só nos rótulos pequenos.
- Linhas de texto corrido com 60 a 70 caracteres (`max-width: 65ch`).

### Escala tipográfica (fluida, celular → desktop)

| Estilo | Fonte / peso | Tamanho | Altura de linha | Extra |
|--------|--------------|---------|-----------------|-------|
| Display | Bricolage 800 | `clamp(2.75rem, 1.6rem + 5vw, 5.5rem)` | 1.0 | `letter-spacing: -0.02em`; só no hero e em frases-manifesto, 1 por página |
| H1 | Bricolage 800 | `clamp(2.25rem, 1.5rem + 3.2vw, 4rem)` | 1.05 | `-0.015em` |
| H2 | Bricolage 700 | `clamp(1.75rem, 1.3rem + 2vw, 3rem)` | 1.1 | `-0.01em` |
| H3 | Bricolage 700 | `clamp(1.25rem, 1.1rem + 0.8vw, 1.75rem)` | 1.2 | — |
| Número de impacto | Bricolage 800 | `clamp(3rem, 2rem + 4vw, 5rem)` | 1.0 | algarismos tabulares |
| Lead (texto de abertura) | DM Sans 400 | `clamp(1.125rem, 1.05rem + 0.4vw, 1.375rem)` | 1.5 | — |
| Corpo | DM Sans 400 | `1.0625rem` (17px) | 1.65 | mínimo de 16px no celular |
| Pequeno | DM Sans 400 | `0.875rem` | 1.5 | legendas e rodapé |
| Rótulo (eyebrow) | DM Sans 700 | `0.8125rem` | 1.4 | caixa alta, `letter-spacing: 0.08em` |
| Botão | DM Sans 700 | `1rem` | 1 | — |

---

## 6. Espaçamentos

Base de **8px**.

| Token | Valor |
|-------|-------|
| `--esp-1` | 4px |
| `--esp-2` | 8px |
| `--esp-3` | 12px |
| `--esp-4` | 16px |
| `--esp-5` | 24px |
| `--esp-6` | 32px |
| `--esp-7` | 48px |
| `--esp-8` | 64px |
| `--esp-9` | 96px |
| `--esp-10` | 128px |

- **Seções:** padding vertical de `clamp(64px, 10vw, 128px)`.
- **Container:** largura máxima de 1200px; 760px para texto corrido.
- **Margem lateral:** 16px no celular, 24px no tablet e 32px no desktop.
- **Grid:** 12 colunas no desktop, 6 no tablet e 4 no celular.
- **Espaço entre cards:** 24px no celular e 32px no desktop.
- **Respiro título → texto:** 16–24px. **Texto → botão:** 32px.

---

## 7. Bordas, raios e sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--raio-sm` | 8px | Campos de formulário e tags |
| `--raio-md` | 16px | Cards e fotos soltas |
| `--raio-lg` | 28px | Blocos de destaque e faixa de CTA |
| `--raio-pill` | 999px | Botões |

- Borda padrão: 1px `--cor-linha` em fundo claro; 1px `--cor-tijolo` com 35% de opacidade em fundo grafite.
- **Sombra única:** `0 8px 24px rgba(31, 31, 33, 0.08)`; no hover dos cards, `0 12px 32px rgba(31, 31, 33, 0.12)`.
- Fotos em largura total (full-bleed) não têm raio.

---

## 8. Botões

- Formato pílula (`--raio-pill`), altura mínima de 48px e padding de `14px 28px`.
- DM Sans 700, 1rem; seta ou ícone opcional à direita (20px). O botão de doação pode levar um pequeno coração.

| Variante | Fundo | Texto | Uso |
|----------|-------|-------|-----|
| **Primário (fundo claro)** | `--cor-coracao` | branco | Doação ("Faça uma doação", "Quero ajudar") |
| **Primário (fundo escuro)** | `--cor-sol` | `--cor-grafite` | Doação dentro de seções grafite e na barra fixa do celular |
| **Secundário** | `--cor-grafite` | branco | Voluntariado, parcerias e ações gerais em fundo claro |
| **Contorno** | transparente, borda 2px `--cor-grafite` (ou creme no escuro) | idem à borda | Ações de menor peso ("Conheça os projetos") |
| **Link** | — | `--cor-grafite`, sublinhado em `--cor-coracao` | Ações dentro do texto ("Conhecer projeto →") |

- **Estados:**
  - **Hover:** o fundo escurece (`--cor-coracao-escura`, `--cor-sol-escura`; o grafite clareia 8%) e o botão sobe 2px (`translateY(-2px)`).
  - **Foco:** anel de 3px a 3px de distância, em grafite no fundo claro e em sol no fundo escuro.
  - **Desabilitado:** 50% de opacidade e sem hover.
- No máximo 2 botões lado a lado. No celular eles empilham com 100% de largura.
- O botão primário aparece **no máximo uma vez por seção**.

---

## 9. Cards

- **Card de projeto:** foto 4:3 no topo (raio 16px), fundo branco, padding de 24px, rótulo (ex.: "Esporte"), título H3, 2 a 3 linhas de texto e link "Conhecer projeto →". No hover, sombra maior e foto com zoom leve (1.03).
- **Card de ação ("Como ajudar"):** ícone de 40px, título H3, texto curto e botão. Na Início ficam 3 lado a lado no desktop e 1 por linha no celular. O card de doação usa fundo `--cor-sol` com texto grafite e botão vermelho; os outros, fundo branco.
- **Card de Pix:** fundo `--cor-sol`, chave em DM Sans 700 grafite, QR Code em uma área branca com raio 16px e botão "Copiar chave Pix" em vermelho.
- **Card de impacto:** sem caixa; número em `--cor-sol` sobre grafite e legenda curta em creme abaixo; motivo de tijolos opcional ao fundo.
- **Card de depoimento:** aspas grandes em `--cor-coracao`, texto em lead, nome e relação com a ONG (ex.: "mãe de aluna do jiu-jítsu") e foto redonda opcional.
- **Regras gerais:** cards da mesma linha têm a mesma altura; textos nunca cortados com reticências; mesma estrutura interna para todos os cards do mesmo tipo.

---

## 10. Direção das fotografias

- **Somente fotos reais** da ONG Torre Forte.
- **O que mostrar:** crianças em ação (treinando, tocando, comendo juntas, rindo), voluntários lado a lado com as crianças, mãos e gestos de cuidado, comunidade reunida. Câmera na altura dos olhos da criança, luz natural, cores quentes.
- **O que evitar:** imagens que explorem a miséria ou humilhem, crianças chorando, olhar de pena, poses de "entrega de sacola" focadas no beneficiário, fotos escuras ou tremidas.
- **Privacidade:** apenas fotos com autorização dos responsáveis; nunca nome completo de criança em legenda ou `alt`; evitar elementos que identifiquem a escola ou o endereço da família.
- **Tratamento:** correção leve e consistente (pouco calor, contraste moderado); sem filtros fortes; preto e branco só para fotos históricas. Texto sobre foto só com gradiente de `--cor-grafite` (até 60% de opacidade) sob o texto.
- **Proporções:** hero 4:5 no desktop (em duas colunas) e no celular; cards 4:3; galeria com mistura de 1:1 e 4:5. Os recortes de cada foto estão em `imagens.md`.
- **Largura máxima (enquanto não houver originais maiores):** nenhuma foto acima de 960 px de largura em CSS (o ideal é até ~600 px) e nenhuma foto como fundo de seção em largura total. As fotos atuais têm 960×1280 e são todas verticais.
- **Projetos sem foto:** painel tipográfico acabado, na mesma proporção da foto que substitui:
  - fundo `--cor-areia`, com o motivo de tijolos em `--cor-tijolo` a 25% de opacidade;
  - ícone do projeto com 64–96 px, em grafite;
  - nome do projeto em Bricolage 700.
  - Nenhum texto de "foto pendente" fica visível ao público; a pendência fica registrada no `memoria.md`.
  - Todos os painéis de projetos sem foto usam o mesmo tratamento.

---

## 11. Tratamento dos projetos e da causa

> No briefing, "produto" significa a ONG e seus projetos.

- **Estrutura fixa de cada projeto:** nome → o que é, em uma frase → quem participa → fotos → como ajudar esse projeto.
- **Ícones próprios para cada projeto**, todos da mesma família (traço de 2px, cantos arredondados), em `--cor-grafite` no fundo claro e em creme no escuro, com um pequeno detalhe opcional em `--cor-coracao`:
  - Pastel Solidário: pastel;
  - Jiu-jítsu Solidário: faixa amarrada;
  - Aulas de música: nota musical;
  - Campanhas solidárias: caixa de doação;
  - Ações comunitárias: mãos ou casa.
- **Storytelling:** realidade → ação da ONG → transformação → convite. Frases curtas e verbos concretos.
- **Linguagem:** as crianças são protagonistas e não "coitadas". Prefira "crianças e famílias que acompanhamos" a termos que reduzam as pessoas à carência.
- **Mensagem central como fio condutor:** o ciclo (hoje → amanhã → outras vidas) aparece na Início e é retomado no fim das páginas. O slogan *Aquecendo corações* pode assinar blocos de CTA.
- **Números:** só os reais. Sem números inventados, nem "aproximados" sem fonte.

---

## 12. Movimento e animações

- **Entrada ao rolar:** fade com deslocamento de 16px para cima, 500ms, `cubic-bezier(0.2, 0.7, 0.2, 1)`, com atraso de 80ms entre itens de uma mesma grade. Acontece só uma vez.
- **Hover e foco:** transições de 150 a 200ms.
- **Contadores de impacto:** contam até o valor em 1,2s, uma única vez, quando entram na tela.
- **Menu do celular:** desliza ou aparece em 250ms.
- **Proibido:** parallax pesado, carrossel automático, animações em loop, elementos que piscam e coração "pulsando" sem parar.
- **`prefers-reduced-motion: reduce`:** todas as animações desligadas.
- O conteúdo fica visível mesmo sem JavaScript; a animação nunca esconde conteúdo por padrão.

---

## 13. Regras para desktop e celular

### Desktop (≥ 1024px)
- Container de 1200px; grids de 3 colunas para cards de projeto e de ação e de 4 colunas para impacto.
- Cabeçalho fixo com **fundo branco** (por causa do logo em JPEG): logo à esquerda, menu no centro ou à direita e botão vermelho "Quero ajudar" no extremo direito.
- Hero em duas colunas: texto à esquerda (7 de 12 colunas) e foto 4:5 à direita (5 de 12 colunas), sem texto sobre a foto.
- Blocos de projeto podem alternar foto à esquerda e à direita, mantendo a mesma estrutura interna.

### Tablet (768–1023px)
- Grids de 2 colunas; menu hambúrguer.

### Celular (< 768px)
- Uma coluna.
- **Hero:** foto 4:5 em cima e texto embaixo (nada de texto sobre foto pequena).
- Menu hambúrguer abrindo painel em tela cheia, com os CTAs no final.
- Botões com 100% de largura, empilhados.
- **Barra de doação fixa** na parte de baixo da tela depois do hero, com 64px de altura, fundo grafite e botão amarelo "Faça uma doação".
- Números de impacto em grade 2×2.
- Espaçamento das seções reduzido pela própria escala fluida.

---

## 14. Elementos que devem ser evitados

- Copiar qualquer coisa das referências: textos, logos, nomes, imagens, combinações de cor ou layouts idênticos.
- Alterar, redesenhar ou recolorir o logo; usar o JPEG com fundo branco sobre fundo colorido.
- Recriar a letra cursiva do slogan como fonte do site.
- Fundo escuro em todas as seções, ou duas seções escuras seguidas.
- Seção inteira com fundo vermelho.
- Títulos todos em caixa alta e condensados.
- Imagens de banco que se passem pelos projetos da ONG.
- Fotos acima de 960 px de largura, fotos como fundo de seção inteira e placeholders `[FOTO: …]` visíveis ao público.
- Números, depoimentos, parceiros ou selos inventados.
- Barras de meta de arrecadação com valores fictícios.
- Linguagem de pena, culpa ou sensacionalismo.
- Gradientes coloridos chamativos, sombras pesadas, efeitos de vidro (glassmorphism) e excesso de ícones.
- Excesso de corações e sóis: no máximo um motivo decorativo por bloco.
- Mais de 2 fontes, ou fonte manuscrita "fofa" infantil.
- Carrosséis automáticos e pop-ups pedindo doação.
- Amarelo ou cinza-tijolo como cor de texto em fundo claro; vermelho como texto ou botão em fundo grafite.
- Mais de um botão primário por seção.
