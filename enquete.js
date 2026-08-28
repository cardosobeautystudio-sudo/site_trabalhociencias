/* ============================================
   9A NOTÍCIAS — Enquete interativa
   Persiste votos em localStorage.
   Cada visitante vota 1x; pode trocar voto.
   ============================================ */

(function () {
  const STORAGE_VOTOS = '9a_enquete_votos';
  const STORAGE_VOTO_USUARIO = '9a_enquete_meu_voto';

  const opcoesEls = document.querySelectorAll('.opcao');
  const totalEl = document.getElementById('total-votos');
  const btnTrocar = document.getElementById('trocar-voto');
  const statusEl = document.getElementById('status-voto');

  // Carrega contagem, inicializa se vazio
  function carregar() {
    let dados = null;
    try {
      dados = JSON.parse(localStorage.getItem(STORAGE_VOTOS));
    } catch (e) {}
    if (!dados || typeof dados !== 'object') {
      // valores iniciais para dar sensação de enquete viva
      dados = {
        'marie-curie': 47,
        'rosalind-franklin': 23,
        'ada-lovelace': 31,
        'nise-da-silveira': 19,
        'bertha-lutz': 14,
      };
      salvar(dados);
    }
    return dados;
  }

  function salvar(dados) {
    try { localStorage.setItem(STORAGE_VOTOS, JSON.stringify(dados)); } catch (e) {}
  }

  function meuVoto() {
    return localStorage.getItem(STORAGE_VOTO_USUARIO);
  }

  function setMeuVoto(id) {
    if (id === null) localStorage.removeItem(STORAGE_VOTO_USUARIO);
    else localStorage.setItem(STORAGE_VOTO_USUARIO, id);
  }

  function renderizar() {
    const dados = carregar();
    const total = Object.values(dados).reduce((a, b) => a + b, 0);
    const votoAtual = meuVoto();

    opcoesEls.forEach(op => {
      const id = op.dataset.id;
      const count = dados[id] || 0;
      const pct = total > 0 ? (count / total) * 100 : 0;
      const barra = op.querySelector('.barra');
      const contagem = op.querySelector('.contagem');

      // sempre mostrar resultados
      op.classList.add('mostra-resultados');
      barra.style.width = pct.toFixed(1) + '%';
      contagem.textContent = `${pct.toFixed(1)}% (${count})`;

      op.classList.toggle('escolhida', id === votoAtual);
    });

    totalEl.innerHTML = `Total de votos: <strong>${total}</strong>`;

    if (votoAtual) {
      statusEl.textContent = 'Você já votou nesta enquete. Obrigado por participar!';
      btnTrocar.style.display = 'inline-block';
    } else {
      statusEl.textContent = 'Clique em uma opção para votar.';
      btnTrocar.style.display = 'none';
    }
  }

  function votar(id) {
    const dados = carregar();
    const anterior = meuVoto();

    if (anterior === id) return; // clicou no mesmo

    if (anterior && dados[anterior] > 0) {
      dados[anterior] -= 1;
    }
    dados[id] = (dados[id] || 0) + 1;

    salvar(dados);
    setMeuVoto(id);
    renderizar();
  }

  function trocarVoto() {
    const anterior = meuVoto();
    if (!anterior) return;
    const dados = carregar();
    if (dados[anterior] > 0) dados[anterior] -= 1;
    salvar(dados);
    setMeuVoto(null);
    renderizar();
  }

  opcoesEls.forEach(op => {
    op.addEventListener('click', () => votar(op.dataset.id));
  });
  btnTrocar.addEventListener('click', trocarVoto);

  renderizar();
})();
