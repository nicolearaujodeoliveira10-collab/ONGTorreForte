# Memória do projeto — ONG Torre Forte

Histórico vivo de decisões e aprendizados. Registrar só o que ajuda na continuidade, sem transcrever conversas.

---

## Decisões aprovadas

- **2026-10-21 · Idioma:** apenas português do Brasil.
- **2026-10-21 · Estrutura:** site com várias páginas (proposta: Início, Quem Somos, Projetos, Como Ajudar, Contato e Política de Privacidade; lista final a confirmar).
- **2026-10-21 · Objetivo:** doação, voluntariado e parceria com empresas têm o mesmo peso.
- **2026-10-21 · Doação financeira:** via Pix, com QR Code e botão de copiar a chave no próprio site.
- **2026-10-21 · Público principal:** moradores de Santo André e do ABC Paulista.
- **2026-10-21 · Stack:** HTML, CSS e JavaScript puros, sem frameworks e sem build.
- **2026-10-21 · Tipografia:** Bricolage Grotesque (títulos) e DM Sans (texto).
- **2026-10-21 · Ritmo visual:** seções alternando fundo claro e escuro.
- **2026-10-21 · Referências:** o site Gerando Falcões International e o template "Humanity" servem só como direção de estrutura e atmosfera, nunca para cópia.
- **2026-10-21 · Paleta oficial (extraída do logo):** vermelho-coração `#D0010C` (primária, doação em fundo claro), amarelo-sol `#FABD03` (doação em fundo escuro, Pix, números de impacto), cinza-tijolo `#9EA0AC` e grafite `#1F1F21` (texto e seções escuras), sobre neutros creme e areia. Substituiu a paleta provisória (laranja, petróleo, noite e mostarda).
- **2026-10-21 · Motivos gráficos:** tijolos empilhados, coração e raios de sol, todos vindos do logo e usados com moderação.
- **2026-10-21 · Slogan oficial:** *Aquecendo corações* (presente no logo).
- **2026-10-21 · Hero:** foto 4:5 em duas colunas no desktop (texto à esquerda, foto à direita), substituindo o 16:9. Motivo: todas as fotos são verticais, com 960×1280.
- **2026-10-21 · Projetos sem foto:** painel tipográfico acabado (tijolos, ícone e nome do projeto), sem placeholder `[FOTO]` visível ao público.
- **2026-10-21 · Largura das fotos:** no máximo 960 px em CSS e nenhuma foto como fundo de seção inteira, até chegarem originais maiores.
- **2026-10-21 · Fotos 01 e 02:** usadas no site a pedido da usuária. A 02 sempre recortada (sem o cartaz); a 01 como foto secundária em Campanhas, **a confirmar o consentimento do grupo de motociclistas antes de publicar**.
- **2026-10-21 · Fontes:** Bricolage Grotesque e DM Sans baixadas do Google Fonts (licença OFL, subset latino) e hospedadas em `assets/fonts/`.
- **2026-10-21 · Dados públicos (blocos 1 e 2 da entrevista):** endereço completo com mapa (grafia "Euclídes", com acento, a pedido da usuária); WhatsApp público; sem horário de atendimento; doação só por Pix (chave CNPJ, conta em nome da ONG); doação não pode ser direcionada a um projeto; não mencionar recibo nem valores sugeridos.
- ~~**2026-10-21 · Mapa:** iframe do Google Maps na página de Contato.~~ Substituída abaixo.
- **2026-10-21 · Endereço fora do site (substitui "endereço completo com mapa"):** a ONG está mudando de local. Endereço e mapa removidos; o site mostra só "Santo André (SP) · ABC Paulista" e orienta combinar visitas e entregas pelo WhatsApp.
- **2026-10-21 · Datas:** não publicar data de fundação formal (o cadastro diz 28/12/2012, o relato diz 2009). O site usa só o relato: 1999 (início em trabalhos comunitários) e 2009 (início do projeto social).
- **2026-10-21 · Número de crianças:** não publicar valor exato (formulários dizem ~300 e ~400). O site usa "centenas de crianças".
- **2026-10-21 · Conteúdo editorial aprovado:** história, missão, visão, valores, textos dos 5 projetos, FAQ e indicadores (+300 kg e ~50 pacotes de fraldas em campanhas; ~20 colaboradores e voluntários; 3 a 15 anos), com o contexto de cada número. Parceiros citados: Liceu Jardim e Lacre Solidário.
- **2026-10-21 · CTAs pelo WhatsApp:** doação de itens, voluntariado, empresas, Jiu-jítsu e Música abrem o WhatsApp com mensagem pronta para cada assunto.
- **2026-10-21 · Formulário sem serviço externo:** ao enviar, abre o aplicativo de e-mail da pessoa com a mensagem pronta para projetoongtorreforte@gmail.com. O site não guarda dados. Se um serviço de envio for escolhido, basta preencher `data-endpoint`.
- **2026-10-21 · Favicon provisório:** coração vermelho da marca, até existir uma versão reduzida oficial do logo (o design.md proíbe separar a torre da palavra).

## Decisões rejeitadas

- **Landing page única** e **formato híbrido**: preferido o site com várias páginas.
- **Astro** e **WordPress**: preferidos HTML, CSS e JS puros.
- **Português + inglês** ou **3 idiomas**: só português.
- **Fundo todo escuro** (como a referência) ou **todo claro**: preferido o ritmo alternado.
- **Fraunces + Nunito Sans** e **Archivo Condensado + Inter**: preferida Bricolage + DM Sans.
- **Doação via plataforma externa ou via WhatsApp** como caminho principal: preferido o Pix no site.
- **Hero 16:9 em largura total no desktop**: as fotos disponíveis não têm orientação nem resolução para isso.
- **Placeholder `[FOTO: …]` visível ao público**: substituído pelo painel tipográfico.

## Alterações realizadas

- **2026-10-21:** atalho para o site Gerando Falcões International salvo em `referência - site/`.
- **2026-10-21:** criados `CLAUDE.md`, `specs/site.md`, `specs/design.md` e `memoria.md` (base documental, sem código ainda).
- **2026-10-21:** paleta do design.md substituída pelas cores do logo; adicionada a seção "Uso do logo"; botões, cards, barra fixa do celular e regras de contraste ajustados às novas cores.
- **2026-10-21:** criado `imagens.md` com o inventário das 9 fotos de `imagens-site/`, a seleção (7 selecionadas e 2 condicionais), a distribuição por página, os recortes, os textos alternativos, a otimização e as pendências. Os originais não foram alterados.
- **2026-10-21:** design.md atualizado com os 3 ajustes aprovados: hero 4:5, painel de projeto sem foto e limite de largura das fotos.
- **2026-10-21:** site construído: 6 páginas (`index`, `quem-somos`, `projetos`, `como-ajudar`, `contato`, `politica-de-privacidade`), CSS em 4 arquivos (`tokens`, `base`, `componentes`, `paginas`), `main.js` (menu, barra de doação, entrada ao rolar, contador, cópia do Pix, validação do formulário), 46 variantes de foto em WebP, logo recortado, imagem de compartilhamento 1200×630, favicons, `robots.txt` e `sitemap.xml`. Testado em 360, 375, 768, 1366 e 1920 px: sem rolagem horizontal, sem erros no console, todos os links, âncoras e imagens válidos. Início: ~415 KB, CLS 0.
- **2026-10-21:** a Política de Privacidade é um **rascunho** baseado no que o site realmente faz (formulário, sem cookies de rastreamento, fontes locais); precisa de revisão da ONG e de assessoria jurídica.

## Problemas encontrados

- O briefing de estrutura citava "Anel X" como dono da identidade e a pasta "@referencias". Interpretado como sobra de modelo: a identidade pertence à ONG Torre Forte e a pasta real é `referência - site/`.
- O briefing fala em "produto"; no contexto de ONG, isso foi interpretado como a instituição e seus projetos.
- Com HTML puro não há componentes, então cabeçalho e rodapé ficam repetidos em cada página e podem ficar diferentes entre si.
- Site estático não envia formulário sozinho.
- A pasta `marca/` tem só um JPEG do logo (comprimido pelo WhatsApp, fundo branco) e nenhum arquivo com os códigos das cores. O JPEG não funciona sobre fundo creme ou grafite.
- O vermelho da marca não tem contraste suficiente sobre o grafite (~2,9:1).
- As 9 fotos são verticais, com 960×1280, e já vêm comprimidas; não servem para uso em largura total.
- Foto 02 (`atividades-com-criancas`): cartaz com gesto obsceno ao fundo. Foto 01 (`acao-comunitaria`): bandeiras com caveiras de um grupo de motociclistas em destaque. Foto 05 (`entrega-de-presentes`): o nome não corresponde ao conteúdo (distribuição de bebida).
- O novo logo `marca/Torre Forte_ Aquecendo Corações.png` tem fundo preto sólido, sem transparência, e vermelho `#F20317`, diferente do `#D0010C` da paleta.

## Soluções aplicadas

- Regra no CLAUDE.md e no site.md: toda mudança no cabeçalho ou no rodapé é replicada em todas as páginas na mesma tarefa.
- O envio do formulário dependerá de um serviço externo (a decidir).
- Dados não fornecidos entram como `[PENDENTE: ...]`, e a seção de depoimentos fica oculta até haver depoimentos reais.
- Cores extraídas por contagem de pixels do logo. Enquanto não houver versão transparente, o logo fica só em fundo branco (cabeçalho branco).
- Em fundo grafite, o botão primário de doação passa a ser amarelo com texto grafite.
- Fotos 01 e 02 marcadas como condicionais; a 02 só pode ser usada com o recorte definido em `imagens.md`, que tira o cartaz do quadro.
- Sem Python, Node ou conversores instalados: o site é servido por `.claude/servidor.ps1` (HttpListener do próprio Windows, porta 8080, configurado em `.claude/launch.json`). As fotos foram recortadas e convertidas para WebP (qualidade 0,8) pelo canvas do navegador do app, sem instalar nada.
- O fundo do logo JPEG é `#FEFEFE` com ruído de compressão; na exportação, pixels quase brancos viram branco puro para não aparecer um retângulo cinza em volta do logo.
- Papéis de cor por seção (`--fundo`, `--texto`, `--btn-primario-*`…): `.secao--escura` troca o botão de doação para amarelo automaticamente. Componentes nunca usam as cores diretas.
- `.btn` define `display`; regras que escondem um botão precisam de mais especificidade (ex.: `.cabecalho .cabecalho__cta`).
- O servidor local travava em requisições HEAD; corrigido para responder sem corpo.
- Abaixo de 400 px, a barra de doação esconde o texto e mostra só o botão, que não cabia sem quebrar em 3 linhas.
- Dados que ainda faltam ficam prontos para preencher sem mexer no layout: chave Pix no atributo `data-chave` do botão de copiar, endereço do serviço de formulário em `data-endpoint` do formulário de contato.

## Pendências

- [x] ~~Pasta `marca/` com o logo~~ → paleta ajustada em 2026-10-21.
- [ ] Logo em PNG transparente ou SVG, uma versão para fundo escuro e (se existir) uma versão reduzida sem slogan.
- [ ] Confirmar o vermelho oficial: `#D0010C` (JPEG) ou `#F20317` (PNG novo), e se há manual da marca ou arquivos do designer.
- [x] ~~Fotos reais dos projetos~~ → 9 recebidas em `imagens-site/`; plano em `imagens.md`.
- [ ] Autorização de uso de imagem: responsáveis pelas crianças (fotos 02, 03, 04, 05 e 09) e adultos retratados. Sem ela, as fotos não vão ao ar.
- [ ] Decidir sobre as fotos condicionais 01 e 02 e confirmar a qual projeto pertence cada foto (`imagens.md`, seção 9).
- [ ] Fotos de Jiu-jítsu, Aulas de música e do fundador; originais das fotos em resolução maior; fotos horizontais.
- [x] ~~Dados oficiais~~ → CNPJ, endereço, Pix, WhatsApp, Instagram, e-mail e ano (2012) aplicados em 2026-10-21 (ver `pendencias.md`).
- [x] ~~E-mail do formulário e da privacidade~~ → projetoongtorreforte@gmail.com (provisório para privacidade).
- [x] ~~Conteúdo de Quem Somos, Projetos, Como Ajudar, FAQ e impacto~~ → aplicado em 2026-10-21; nenhuma marcação `[PENDENTE]` visível no site.
- [ ] Interno: confirmar o novo endereço da ONG e a data de fundação formal; definir o prazo de guarda das mensagens; revisão jurídica da Política de Privacidade.
- [ ] Números de impacto e depoimentos: **não disponíveis** no momento.
- [ ] Textos oficiais de história, missão, visão e valores (ou aprovar rascunhos).
- [ ] Detalhes de cada projeto: dias, horários e locais.
- [ ] Itens aceitos para doação e pontos de entrega; áreas de voluntariado.
- [ ] Empresas parceiras atuais e autorização para exibir os logos.
- [ ] Confirmar a lista final de páginas.
- [ ] Escolher o serviço de formulário, a hospedagem e o domínio.
- [ ] Com o domínio definido: trocar `DOMINIO-PENDENTE` no `sitemap.xml` e no `robots.txt`, tornar absoluto o `og:image` das 5 páginas e adicionar `canonical`.
- [ ] Ao publicar, enviar só os arquivos do site (páginas `.html`, `assets/`, `robots.txt`, `sitemap.xml`). Não publicar `.claude/`, `imagens-site/`, `marca/`, `referência - site/`, `specs/` nem os `.md`.
- [ ] Confirmar o consentimento do grupo de motociclistas antes de publicar a foto 01 (Projetos › Campanhas).
- [ ] QR Code do Pix (imagem da ONG ou gerado a partir da chave) e revisão jurídica da Política de Privacidade.

## Próximos passos

1. Receber os dados oficiais (Pix, CNPJ, contatos) e substituir os `[PENDENTE: …]` do site.
2. Receber as autorizações de imagem e as fotos de Jiu-jítsu, Música e do fundador.
3. Escolher o serviço do formulário, a hospedagem e o domínio.
4. Revisar o site com a ONG e publicar.
