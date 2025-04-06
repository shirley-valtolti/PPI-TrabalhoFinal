

export function validarCamposObrigatorios(campos) {
    for (const [campo, valor] of Object.entries(campos)) {
      if (!valor || valor.toString().trim() === '') {
        throw new Error(`O campo "${campo}" é obrigatório.`);
      }
    }
  }
  
  export function validarCPF(cpf) {
    const regex = /^\d{11}$/;
    if (!regex.test(cpf)) {
      throw new Error("CPF deve conter 11 dígitos numéricos.");
    }
  }
  
  export function validarTituloEleitor(titulo) {
    const regex = /^\d{12}$/;
    if (!regex.test(titulo)) {
      throw new Error("Título de eleitor deve conter 12 dígitos numéricos.");
    }
  }
  
  export function validarCEP(cep) {
    const regex = /^\d{8}$/;
    if (!regex.test(cep)) {
      throw new Error("CEP deve conter 8 dígitos numéricos.");
    }
  }
  
  export function validarRenda(renda) {
    const valor = parseFloat(renda);
    if (isNaN(valor) || valor < 0) {
      throw new Error("Renda deve ser um valor numérico positivo.");
    }
  }
  