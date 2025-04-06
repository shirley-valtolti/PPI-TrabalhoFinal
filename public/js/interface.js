
export function preencherTabela(tbodyId, dados, callbackCriarLinha) {
    const tbody = document.getElementById(tbodyId);
    tbody.innerHTML = '';
  
    dados.forEach(item => {
      const tr = callbackCriarLinha(item);
      tbody.appendChild(tr);
    });
  }
  

  export function criarCelula(texto) {
    const td = document.createElement('td');
    td.textContent = texto;
    return td;
  }
  

  export function criarBotao(texto, onClick, classe = '') {
    const btn = document.createElement('button');
    btn.textContent = texto;
    btn.className = classe;
    btn.onclick = onClick;
    return btn;
  }
  

  export function limparFormulario(formId) {
    const form = document.getElementById(formId);
    form.reset();
  }
  

  export function preencherFormulario(campos) {
    Object.entries(campos).forEach(([chave, valor]) => {
      const input = document.getElementById(chave);
      if (input) input.value = valor;
    });
  }
  