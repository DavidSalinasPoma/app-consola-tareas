// Son clases encargadas de manejar la logica del negocio
// Importar modulos o paquetes
const { v4: uuidv4 } = require('uuid');

class Tarea {
  // Atributos de la clase
  id;
  desc;
  completadoEn;

  // Metodo constructor
  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.completadoEn = null;
  }
}

module.exports = {
  Tarea,
};
