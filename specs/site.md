# Especificação do site — ONG Torre Forte

Fonte de verdade sobre **o que** precisa ser construído. A parte visual está em `specs/design.md`.

---

## 1. Objetivo do site

Apresentar a ONG Torre Forte com credibilidade e emoção, mostrar o impacto dos projetos na vida das crianças e transformar visitantes em apoiadores.

O site deve:

- Apresentar a ONG, sua história, missão e propósito;
- Mostrar os projetos sociais e o impacto na vida das crianças;
- Despertar empatia e conexão emocional;
- Incentivar doações financeiras, de alimentos e de materiais;
- Atrair novos voluntários e empresas parceiras;
- Transmitir credibilidade e transparência;
- Facilitar o contato com a instituição.

**Prioridade de conversão (decisão aprovada):** doação, voluntariado e parceria com empresas têm **o mesmo peso**. Nenhum desses caminhos fica escondido atrás dos outros.

## 2. Público-alvo

- **Público principal:** moradores de Santo André e do ABC Paulista (pessoas físicas). Podem doar dinheiro, levar alimentos, roupas e materiais, ser voluntários perto de casa ou indicar o comércio onde trabalham.
- **Atendidos pelos CTAs, mas sem ser o foco da comunicação:** empresas e comércios locais (parcerias) e pessoas de outras regiões que chegam pelas redes sociais.

A comunicação fala com o vizinho do ABC: alguém que conhece a realidade da região e pode ajudar de forma concreta e próxima.

## 3. A instituição e a proposta de valor

> No briefing, "produto" significa a própria ONG e seus projetos.

**Fatos confirmados (podem ser usados no site):**

- Organização sem fins lucrativos localizada em Santo André, São Paulo.
- Criada por **Rodolfo Donetti**.
- Apoia crianças e famílias de comunidades em situação de vulnerabilidade social.
- Atua com alimentação, acolhimento, educação e desenvolvimento infantil.
- Atende **centenas de crianças**, principalmente entre **3 e 15 anos**.
- Slogan oficial (presente no logo): ***Aquecendo corações***.
- Projetos:
  - **Pastel Solidário:** distribuição de alimentos em comunidades do ABC Paulista;
  - **Jiu-jítsu Solidário:** atividades esportivas para crianças;
  - **Aulas de música:** incentivo à aprendizagem e ao desenvolvimento de novas habilidades;
  - **Campanhas solidárias:** arrecadação e distribuição de alimentos, roupas e materiais;
  - **Ações comunitárias:** iniciativas de apoio às crianças e suas famílias.

**Proposta de valor:** ajuda concreta e próxima. Cada doação vira comida, esporte e música para crianças do próprio ABC, e essas crianças crescem para transformar outras vidas, formando um ciclo contínuo de solidariedade.

**Mensagem central:** *Ajudar crianças hoje para que elas possam transformar outras vidas amanhã.*

Qualquer dado fora desta lista (números exatos, datas, endereços, parceiros, depoimentos, frequência dos projetos) só entra no site quando for fornecido. Até lá, use `[PENDENTE: ...]`.

## 4. Idiomas

- Apenas **português do Brasil** (`<html lang="pt-BR">`).
- Sem seletor de idioma.

## 5. Páginas

O site tem **5 páginas principais e 1 página auxiliar**. A lista de páginas é uma proposta e ainda precisa ser confirmada (ver Pendências).

| # | Página | Arquivo | Papel |
|---|--------|---------|-------|
| 1 | Início | `index.html` | Emocionar, resumir tudo e distribuir para os 3 caminhos de ajuda |
| 2 | Quem Somos | `quem-somos.html` | História, fundador, missão e transparência |
| 3 | Projetos | `projetos.html` | Os 5 projetos em detalhe |
| 4 | Como Ajudar | `como-ajudar.html` | Pix, doação de itens, voluntariado e empresas |
| 5 | Contato | `contato.html` | Formulário, WhatsApp, redes e endereço |
| — | Política de Privacidade | `politica-de-privacidade.html` | Exigida porque o formulário coleta dados pessoais (LGPD) |

## 6. Seções necessárias

### Todas as páginas
- **Cabeçalho:** logo, menu (Início, Quem Somos, Projetos, Como Ajudar, Contato) e botão "Quero ajudar".
- **Bloco final de CTA** antes do rodapé.
- **Rodapé:** logo, resumo de uma linha, links do menu, contatos, redes sociais, CNPJ, link para a política de privacidade e chave Pix resumida.

### Início
1. **Hero:** foto real, a frase central e dois CTAs ("Faça uma doação" e "Seja voluntário").
2. **Três caminhos de ajuda:** cards logo abaixo do hero (Doar, Ser voluntário, Ser empresa parceira).
3. **Quem somos (resumo):** origem com Rodolfo Donetti e propósito, com link para Quem Somos.
4. **Projetos em destaque:** os 5 projetos em cards, com link para Projetos.
5. **Impacto:** faixa escura com números. Só números reais; até chegarem, usar "centenas de crianças de 3 a 15 anos".
6. **O ciclo da solidariedade:** a mensagem central contada em 3 passos (hoje ajudamos → elas crescem → transformam outras vidas).
7. **Galeria:** momentos reais dos projetos.
8. **Depoimentos:** só se houver depoimentos reais autorizados; até lá a seção fica oculta.
9. **CTA final de doação** (Pix).

### Quem Somos
1. Abertura com frase de propósito.
2. **Nossa história:** a origem da ONG e Rodolfo Donetti (`[PENDENTE: texto da história]`).
3. **Missão, visão e valores** (`[PENDENTE: textos oficiais ou rascunho aprovado]`).
4. **Onde atuamos:** Santo André e comunidades do ABC.
5. **Transparência:** CNPJ, dados oficiais e prestação de contas, quando houver.
6. CTA.

### Projetos
1. Introdução curta.
2. **Um bloco por projeto (5)**, sempre com a mesma estrutura: nome, o que é, quem participa, onde e quando (`[PENDENTE]`), fotos e um CTA específico.
3. CTA final.

### Como Ajudar
1. Introdução: "Existem muitas formas de fazer parte".
2. **Doe via Pix** (`#pix`): chave, QR Code e botão "Copiar chave Pix".
3. **Doe alimentos, roupas e materiais** (`#itens`): o que é aceito e onde e quando entregar (`[PENDENTE]`).
4. **Seja voluntário** (`#voluntario`): áreas de atuação (`[PENDENTE]`) e um link para o formulário com o interesse "Voluntariado" já marcado.
5. **Empresas parceiras** (`#empresas`): formas de apoio e contato.
6. **Perguntas frequentes:** só com respostas reais (`[PENDENTE]`).

### Contato
1. **Formulário:** nome, e-mail, telefone (opcional), interesse (Doar / Voluntariado / Empresa parceira / Outro), mensagem e consentimento LGPD.
2. WhatsApp, e-mail e Instagram.
3. Endereço e mapa, se a ONG quiser o endereço público (`[PENDENTE]`).

## 7. Funcionalidades

- Menu responsivo com botão hambúrguer abaixo de 1024px, abrindo um painel em tela cheia acessível por teclado.
- Cabeçalho fixo no topo ao rolar.
- **Seção Pix:** QR Code (imagem fornecida pela ONG ou gerada a partir da chave), botão "Copiar chave Pix" com confirmação visual e anúncio para leitor de tela.
- **Barra de doação fixa no celular:** aparece depois que o hero sai da tela e leva para `como-ajudar.html#pix`.
- **Formulário de contato:** validação no navegador. O envio depende de um serviço externo, já que o site é estático (`[PENDENTE: Formspree, Netlify Forms ou envio via WhatsApp]`). O parâmetro `?interesse=voluntariado` pré-seleciona o campo.
- Links diretos para o WhatsApp (`wa.me`) com mensagem pré-preenchida.
- Contadores de impacto animados, só com números reais.
- Galeria de fotos em grade, sem bibliotecas externas.
- SEO básico: `title` e `description` únicos por página, Open Graph, favicon, `sitemap.xml`, `robots.txt` e dados estruturados `schema.org/NGO`.
- O site funciona sem JavaScript: conteúdo, links e Pix continuam visíveis. O JS só melhora a experiência.

## 8. Chamadas para ação

**Os três CTAs principais têm o mesmo peso:**

| CTA | Destino |
|-----|---------|
| Faça uma doação | `como-ajudar.html#pix` |
| Seja voluntário | `como-ajudar.html#voluntario` |
| Seja uma empresa parceira | `como-ajudar.html#empresas` |

**CTAs de apoio:**
- "Quero ajudar" (cabeçalho) → `como-ajudar.html`
- "Conheça os projetos" → `projetos.html`
- "Copiar chave Pix" → copia a chave
- "Fale com a gente no WhatsApp" → `wa.me`
- "Conheça nossa história" → `quem-somos.html`

**Regras:**
- Toda página termina com um bloco de CTA.
- No máximo 2 botões lado a lado.
- Textos dos botões com verbos de ação.

## 9. Informações que ainda precisam ser definidas

| Item | Situação |
|------|----------|
| Logo e cores oficiais | **Recebido** em `marca/` (JPEG com fundo branco). Faltam a versão PNG transparente ou SVG e uma versão para fundo escuro |
| Fotos reais dos projetos | **9 recebidas** em `imagens-site/` (plano em `imagens.md`). Faltam fotos de Jiu-jítsu, Aulas de música e do fundador |
| CNPJ, endereço, chave Pix, WhatsApp, Instagram, e-mail, ano de fundação | Com a ONG; ainda não enviados |
| Números de impacto (crianças, famílias, refeições etc.) | **Não disponíveis** |
| Depoimentos de famílias e voluntários | **Não disponíveis** |
| Texto oficial da história, missão, visão e valores | Não fornecido |
| Detalhes de cada projeto (dias, horários, locais) | Não fornecido |
| Itens aceitos para doação e pontos de entrega | Não fornecido |
| Áreas de voluntariado | Não fornecido |
| Empresas parceiras atuais e autorização para exibir os logos | Não fornecido |
| Autorização de uso de imagem das crianças | A confirmar com a ONG |
| Se o endereço da sede pode ser público | A confirmar |
| Serviço de envio do formulário | A decidir |
| Hospedagem e domínio | A decidir |
| Lista final de páginas | Proposta acima, a confirmar |

## 10. Stack técnica

**Decisão aprovada:** HTML, CSS e JavaScript puros.

- HTML5 semântico, uma página por arquivo `.html`.
- CSS3 com variáveis (`custom properties`), sem frameworks (sem Tailwind e sem Bootstrap).
- JavaScript puro, carregado com `defer`, sem jQuery e sem bibliotecas de animação.
- Sem etapa de build: o site abre direto no navegador.
- Fontes `.woff2` hospedadas no próprio site (desempenho e privacidade), com subset latino.
- Hospedagem estática gratuita sugerida: Netlify, Vercel ou GitHub Pages (`[PENDENTE]`).

**Estrutura de pastas prevista:**

```
/
├─ index.html, quem-somos.html, projetos.html, como-ajudar.html, contato.html, politica-de-privacidade.html
├─ assets/
│  ├─ css/  (tokens.css, base.css, componentes.css, paginas.css)
│  ├─ js/   (main.js)
│  ├─ img/
│  └─ fonts/
├─ marca/   (logo e cores oficiais enviados pela ONG)
├─ sitemap.xml, robots.txt
```

**Regra de consistência:** como não há componentes reutilizáveis, cabeçalho e rodapé são copiados em cada página. Toda mudança neles deve ser replicada em todas as páginas na mesma tarefa.

## 11. Responsividade

- Mobile-first.
- Breakpoints: 480px, 768px, 1024px e 1280px.
- Funciona de 320px a 1920px, sem rolagem horizontal.
- Texto de corpo com no mínimo 16px; alvos de toque com no mínimo 44×44px.
- Menu hambúrguer abaixo de 1024px.
- Imagens com `srcset`/`sizes` e proporções definidas por breakpoint (ver design.md).
- Testar em 360×800, 768×1024, 1366×768 e 1920×1080.

## 12. Acessibilidade

Meta: **WCAG 2.2 nível AA**.

- Contraste de 4.5:1 para texto normal e de 3:1 para texto grande e elementos de interface.
- Landmarks (`header`, `nav`, `main`, `footer`), um `h1` por página e hierarquia de títulos sem saltos.
- Link "Pular para o conteúdo".
- Navegação completa por teclado, com foco sempre visível.
- `alt` descritivo em todas as imagens informativas, sem expor o nome completo das crianças; `alt=""` nas decorativas.
- Formulários com `label` visível, erros em texto (não só por cor) e `aria-describedby`.
- O botão "Copiar chave Pix" anuncia o resultado via `aria-live`.
- Respeitar `prefers-reduced-motion`.
- Informação nunca transmitida apenas por cor.

## 13. Desempenho

- Lighthouse (mobile) ≥ 90 em Desempenho, Acessibilidade, Boas práticas e SEO.
- LCP < 2,5 s, CLS < 0,1 e INP < 200 ms.
- Imagens em WebP ou AVIF, com `width`/`height` definidos e `loading="lazy"` fora da primeira dobra; a imagem do hero usa `fetchpriority="high"`.
- Peso de cada página ≤ 1,5 MB na primeira carga.
- No máximo 2 famílias tipográficas, com `font-display: swap` e preload da fonte de título.
- JavaScript mínimo e sem carrosséis pesados.
- Vídeos incorporados (se houver) com miniatura e carregamento só ao clicar.

## 14. Escopo

**Dentro do escopo (v1):**
- 5 páginas principais e a política de privacidade;
- Layout responsivo e acessível;
- Seção Pix com QR Code e botão de copiar;
- Formulário de contato com serviço externo de envio;
- Links de WhatsApp e redes sociais;
- SEO básico;
- Placeholders marcados onde faltar conteúdo real.

**Fora do escopo (v1):**
- Pagamento online por cartão, boleto ou doação recorrente;
- Área logada, painel administrativo ou CMS;
- Blog e notícias;
- Outros idiomas;
- Loja virtual;
- Chat ao vivo, newsletter e integração com CRM;
- Criação ou redesenho do logotipo;
- Produção de fotos e redação de textos oficiais (fornecidos pela ONG; podemos sugerir rascunhos para aprovação).
