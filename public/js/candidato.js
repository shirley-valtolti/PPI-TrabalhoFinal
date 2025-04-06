

export class Candidato {
    constructor(cpf, titulo, nome, endereco, numero, bairro, cidade, uf, cep, renda) {
      this.cpf = cpf;
      this.titulo = titulo;
      this.nome = nome;
      this.endereco = endereco;
      this.numero = numero;
      this.bairro = bairro;
      this.cidade = cidade;
      this.uf = uf;
      this.cep = cep;
      this.renda = renda;
    }
  }
  
  function getCandidatos() {
    const dados = localStorage.getItem('candidatos');
    return dados ? JSON.parse(dados) : [];
  }
  
  function salvarCandidatos(candidatos) {
    localStorage.setItem('candidatos', JSON.stringify(candidatos));
  }
  
  export function cadastrarCandidato(candidato) {
    const candidatos = getCandidatos();
    
    const existe = candidatos.some(c => c.cpf === candidato.cpf);
    if (existe) {
      throw new Error('Já existe um candidato com esse CPF.');
    }
  
    candidatos.push(candidato);
    salvarCandidatos(candidatos);
  }
  
  export function listarCandidatos() {
    return getCandidatos();
  }
  
  export function editarCandidato(cpf, novoCandidato) {
    const candidatos = getCandidatos();
    const index = candidatos.findIndex(c => c.cpf === cpf);
  
    if (index === -1) throw new Error('Candidato não encontrado.');
  
    candidatos[index] = novoCandidato;
    salvarCandidatos(candidatos);
  }
  
  export function excluirCandidato(cpf) {
    const candidatos = getCandidatos();
    const atualizados = candidatos.filter(c => c.cpf !== cpf);
    salvarCandidatos(atualizados);
  }
  