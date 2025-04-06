

const usuarioPadrao = {
    username: 'admin',
    senha: 'admin'
  };
  
  export function login(usuario, senha) {
    if (usuario === usuarioPadrao.username && senha === usuarioPadrao.senha) {
      const sessao = {
        usuario: usuario,
        inicio: Date.now()
      };
      sessionStorage.setItem('sessao', JSON.stringify(sessao));
      return true;
    }
  
    return false;
  }
  
  export function logout() {
    sessionStorage.removeItem('sessao');
  }
  
  export function isAutenticado() {
    const sessao = JSON.parse(sessionStorage.getItem('sessao'));
  
    if (!sessao) return false;
  
    const agora = Date.now();
    const tempoDecorrido = (agora - sessao.inicio) / 1000 / 60;
  
    return tempoDecorrido < 30;
  }
  