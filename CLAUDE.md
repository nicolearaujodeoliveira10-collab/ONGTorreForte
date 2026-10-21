# ONG Torre Forte — Site institucional

Site institucional da ONG Torre Forte (Santo André/SP), que apoia crianças de 3 a 15 anos e suas famílias em comunidades vulneráveis do ABC Paulista.
Mensagem central: **ajudar crianças hoje para que elas possam transformar outras vidas amanhã.**

## Fontes de verdade

Leia os três arquivos abaixo antes de qualquer tarefa neste projeto.

- @specs/site.md — o que construir: páginas, seções, funcionalidades, CTAs, stack e escopo.
- @specs/design.md — identidade visual: paleta, tipografia, componentes, fotos e movimento.
- @memoria.md — decisões aprovadas e rejeitadas, problemas, pendências e próximos passos.
- @imagens.md — plano das fotografias: seleção, uso por seção, recortes, texto alternativo e pendências de autorização.
- `referência - site/` — referências visuais. Servem apenas como direção de atmosfera e estrutura, nunca para copiar.

## Regras de trabalho

- Se algum pedido meu contradisser uma decisão registrada em @specs/site.md, @specs/design.md ou @memoria.md, pare e me avise antes de realizar qualquer alteração. Explique qual decisão seria afetada e pergunte se desejo substituí-la.
- Não altere a stack técnica sem minha autorização.
- Não remova uma decisão aprovada silenciosamente.
- Não invente informações comerciais, médicas ou técnicas sobre o produto. Aqui, o "produto" é a ONG e seus projetos: números de atendimento, dados oficiais (CNPJ, chave Pix, endereço), depoimentos, nomes, datas, locais e parceiros só entram se forem fornecidos. O que faltar vira um placeholder visível no formato `[PENDENTE: descrição]`.
- Sempre preserve a consistência visual e estrutural entre as seções.
- Antes de uma mudança grande, apresente um plano resumido.
- Depois de uma decisão importante aprovada, atualize @memoria.md.

## Essenciais do projeto

- Idioma: apenas português do Brasil. Tom acolhedor, direto e esperançoso, nunca sensacionalista.
- Stack: HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build.
- Para ver o site localmente: servidor `.claude/servidor.ps1` (porta 8080), configurado em `.claude/launch.json`. Não instala nada.
- Menu e rodapé são idênticos em todas as páginas. Uma alteração em uma página deve ser replicada em todas.
- Use só fotos reais fornecidas pela ONG. Enquanto elas não chegam, use placeholders neutros, nunca imagens de banco que se passem pelos projetos.
- As cores vêm do logo oficial em `marca/` (vermelho-coração, amarelo-sol, cinza-tijolo e grafite). Não altere nem recolora o logo.
