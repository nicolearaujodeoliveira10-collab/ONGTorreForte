// Comportamentos do site da ONG Torre Forte.
// Tudo aqui é melhoria progressiva: sem JavaScript, o conteúdo, os links e o Pix continuam acessíveis.
(() => {
  'use strict';

  const raiz = document.documentElement;
  const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const temObservador = 'IntersectionObserver' in window;

  // ---------- Menu do celular ----------
  function iniciarMenu() {
    const botao = document.querySelector('.menu-botao');
    const menu = document.getElementById('menu-principal');
    if (!botao || !menu) return;

    const logo = document.querySelector('.cabecalho__logo');
    const textoBotao = botao.querySelector('.menu-botao__texto');
    const desktop = window.matchMedia('(min-width: 1024px)');
    const foraDoMenu = () => document.querySelectorAll('main, .rodape, .barra-doacao, .pular-conteudo, .cabecalho__cta');
    const aberto = () => raiz.classList.contains('menu-aberto');

    function abrir() {
      raiz.classList.add('menu-aberto');
      botao.setAttribute('aria-expanded', 'true');
      if (textoBotao) textoBotao.textContent = 'Fechar';
      foraDoMenu().forEach((el) => { el.inert = true; });
      const primeiroLink = menu.querySelector('a');
      if (primeiroLink) primeiroLink.focus();
    }

    function fechar(devolverFoco) {
      raiz.classList.remove('menu-aberto');
      botao.setAttribute('aria-expanded', 'false');
      if (textoBotao) textoBotao.textContent = 'Menu';
      foraDoMenu().forEach((el) => { el.inert = false; });
      if (devolverFoco) botao.focus();
    }

    botao.addEventListener('click', () => (aberto() ? fechar(true) : abrir()));
    menu.addEventListener('click', (evento) => {
      if (evento.target.closest('a')) fechar(false);
    });

    document.addEventListener('keydown', (evento) => {
      if (!aberto()) return;
      if (evento.key === 'Escape') {
        fechar(true);
        return;
      }
      if (evento.key !== 'Tab') return;
      const focaveis = [logo, ...menu.querySelectorAll('a, button'), botao].filter(Boolean);
      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];
      if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primeiro.focus();
      }
    });

    desktop.addEventListener('change', (evento) => {
      if (evento.matches && aberto()) fechar(false);
    });
  }

  // ---------- Sombra do cabeçalho ao rolar ----------
  function iniciarCabecalho() {
    const cabecalho = document.querySelector('.cabecalho');
    if (!cabecalho) return;
    const atualizar = () => cabecalho.classList.toggle('rolou', window.scrollY > 8);
    window.addEventListener('scroll', atualizar, { passive: true });
    atualizar();
  }

  // ---------- Entrada suave ao rolar ----------
  function iniciarRevelar() {
    const itens = document.querySelectorAll('[data-revelar]');
    if (!itens.length) return;
    if (reduzirMovimento || !temObservador) {
      itens.forEach((item) => item.classList.add('revelado'));
      return;
    }
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('revelado');
        observador.unobserve(entrada.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    itens.forEach((item) => observador.observe(item));
  }

  // ---------- Barra de doação fixa (celular) ----------
  function iniciarBarraDoacao() {
    const barra = document.querySelector('.barra-doacao');
    const gatilho = document.querySelector('[data-gatilho-barra]');
    if (!barra || !gatilho || !temObservador) return;

    let gatilhoVisivel = true;
    const bloqueiosVisiveis = new Set();
    const atualizar = () => barra.classList.toggle('visivel', !gatilhoVisivel && bloqueiosVisiveis.size === 0);

    new IntersectionObserver(([entrada]) => {
      gatilhoVisivel = entrada.isIntersecting;
      atualizar();
    }).observe(gatilho);

    const observadorBloqueios = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) bloqueiosVisiveis.add(entrada.target);
        else bloqueiosVisiveis.delete(entrada.target);
      });
      atualizar();
    });
    document.querySelectorAll('[data-oculta-barra]').forEach((el) => observadorBloqueios.observe(el));
  }

  // ---------- Contadores de impacto (só com números reais) ----------
  function iniciarContadores() {
    const contadores = document.querySelectorAll('[data-contar]');
    if (!contadores.length || reduzirMovimento || !temObservador) return;

    const animar = (el) => {
      const alvo = Number(el.dataset.contar);
      if (!Number.isFinite(alvo)) return;
      const inicio = performance.now();
      const passo = (agora) => {
        const progresso = Math.min(1, (agora - inicio) / 1200);
        const suavizado = 1 - Math.pow(1 - progresso, 3);
        el.textContent = Math.round(alvo * suavizado).toLocaleString('pt-BR');
        if (progresso < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    };

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        animar(entrada.target);
        observador.unobserve(entrada.target);
      });
    }, { threshold: 0.6 });
    contadores.forEach((el) => observador.observe(el));
  }

  // ---------- Copiar chave Pix ----------
  function iniciarPix() {
    document.querySelectorAll('[data-copiar-pix]').forEach((botao) => {
      const status = document.getElementById(botao.dataset.status);
      const avisar = (mensagem) => { if (status) status.textContent = mensagem; };

      botao.addEventListener('click', async () => {
        const chave = (botao.dataset.chave || '').trim();
        if (!chave) {
          avisar('A chave Pix ainda não foi cadastrada no site.');
          return;
        }
        try {
          await navigator.clipboard.writeText(chave);
          avisar('Chave Pix copiada. Agora é só colar no app do seu banco.');
        } catch (erro) {
          avisar(`Não foi possível copiar automaticamente. A chave é: ${chave}`);
        }
      });
    });
  }

  // ---------- Formulário de contato ----------
  function iniciarFormulario() {
    const formulario = document.querySelector('[data-formulario-contato]');
    if (!formulario) return;

    formulario.noValidate = true;
    const status = document.getElementById('status-formulario');
    const campos = formulario.querySelectorAll('input, select, textarea');
    let tentouEnviar = false;

    const interesse = new URLSearchParams(window.location.search).get('interesse');
    const seletor = formulario.querySelector('#interesse');
    if (interesse && seletor && [...seletor.options].some((opcao) => opcao.value === interesse)) {
      seletor.value = interesse;
    }

    const mensagemDeErro = (campo) => {
      if (campo.validity.valueMissing) {
        if (campo.type === 'checkbox') return 'Para enviar, é preciso concordar com a política de privacidade.';
        if (campo.tagName === 'SELECT') return 'Escolha uma opção.';
        return 'Preencha este campo.';
      }
      if (campo.validity.typeMismatch && campo.type === 'email') return 'Digite um e-mail válido, como nome@exemplo.com.';
      if (campo.validity.tooShort) return `Escreva pelo menos ${campo.minLength} caracteres.`;
      return 'Confira este campo.';
    };

    const validar = (campo) => {
      const erro = document.getElementById(campo.dataset.erro);
      if (!erro) return true;
      if (campo.validity.valid) {
        campo.removeAttribute('aria-invalid');
        erro.textContent = '';
        return true;
      }
      campo.setAttribute('aria-invalid', 'true');
      erro.textContent = mensagemDeErro(campo);
      return false;
    };

    campos.forEach((campo) => {
      campo.addEventListener('blur', () => { if (tentouEnviar) validar(campo); });
      campo.addEventListener('input', () => { if (campo.hasAttribute('aria-invalid')) validar(campo); });
      campo.addEventListener('change', () => { if (campo.hasAttribute('aria-invalid')) validar(campo); });
    });

    formulario.addEventListener('submit', async (evento) => {
      evento.preventDefault();
      tentouEnviar = true;
      const invalidos = [...campos].filter((campo) => !validar(campo));
      if (invalidos.length) {
        status.textContent = invalidos.length === 1
          ? 'Falta corrigir 1 campo antes de enviar.'
          : `Faltam corrigir ${invalidos.length} campos antes de enviar.`;
        invalidos[0].focus();
        return;
      }

      const destino = formulario.dataset.endpoint;
      if (!destino) {
        // Sem serviço de envio: abre o aplicativo de e-mail da pessoa com a mensagem pronta.
        const dados = new FormData(formulario);
        const assunto = `Contato pelo site: ${seletor.options[seletor.selectedIndex].text}`;
        const corpo = [
          `Nome: ${dados.get('nome')}`,
          `E-mail: ${dados.get('email')}`,
          `Telefone: ${dados.get('telefone') || 'não informado'}`,
          '',
          dados.get('mensagem')
        ].join('\n');
        window.location.href = `mailto:${formulario.dataset.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
        status.textContent = `Abrimos o seu aplicativo de e-mail com a mensagem pronta. Se ele não abrir, escreva para ${formulario.dataset.email} ou chame a gente no WhatsApp.`;
        return;
      }

      const botao = formulario.querySelector('[type="submit"]');
      botao.setAttribute('aria-disabled', 'true');
      status.textContent = 'Enviando…';
      try {
        const resposta = await fetch(destino, { method: 'POST', body: new FormData(formulario), headers: { Accept: 'application/json' } });
        if (!resposta.ok) throw new Error(String(resposta.status));
        formulario.reset();
        tentouEnviar = false;
        status.textContent = 'Mensagem enviada. Obrigado por falar com a Torre Forte!';
      } catch (erro) {
        status.textContent = 'Não foi possível enviar agora. Tente de novo em alguns minutos.';
      } finally {
        botao.removeAttribute('aria-disabled');
      }
    });
  }

  iniciarMenu();
  iniciarCabecalho();
  iniciarRevelar();
  iniciarBarraDoacao();
  iniciarContadores();
  iniciarPix();
  iniciarFormulario();
})();
