import { login, logout, isAutenticado } from './session.js';
import { menuSistema } from './interface.js';

function iniciarSistema() {
  if (login()) {
    console.log("Login realizado com sucesso!");
    menuSistema();
  } else {
    console.log("Login inválido. Tente novamente.");
  }
}

iniciarSistema();
