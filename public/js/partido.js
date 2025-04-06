

export class Partido {
    constructor(codigo, nome, sigla) {
      this.codigo = codigo;
      this.nome = nome;
      this.sigla = sigla;
    }
  }
  
  function getPartidos() {
    const dados = localStorage.getItem('partidos');
    return dados ? JSON.parse(dados) : [];
  }
  
  function salvarPartidos(partidos) {
    localStorage.setItem('partidos', JSON.stringify(partidos));
  }
  
  export function cadastrarPartido(partido) {
    const partidos = getPartidos();
    
    const jaExiste = partidos.some(p => p.codigo === partido.codigo);
    if (jaExiste) {
      throw new Error('Já existe um partido com esse código.');
    }
  
    partidos.push(partido);
    salvarPartidos(partidos);
  }
  
  export function listarPartidos() {
    return getPartidos();
  }
  
  export function editarPartido(codigo, novoPartido) {
    const partidos = getPartidos();
    const index = partidos.findIndex(p => p.codigo === codigo);
  
    if (index === -1) throw new Error('Partido não encontrado.');
  
    partidos[index] = novoPartido;
    salvarPartidos(partidos);
  }
  
  export function excluirPartido(codigo) {
    const partidos = getPartidos();
    const atualizados = partidos.filter(p => p.codigo !== codigo);
    salvarPartidos(atualizados);
  }
  