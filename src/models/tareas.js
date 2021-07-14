// Importar paquetes o modulos
const { Tarea } = require('./tarea');

class Tareas {
  // Atributos de la clase
  listado;

  // Metodo constructor
  constructor() {
    this.listado = {};
  }

  crearTarea(desc) {
    const tarea = new Tarea(desc);
    this.listado[tarea.id] = tarea;
  }

  // setter  and geters
  get listadoArray() {
    const listado = [];
    Object.keys(this.listado).forEach((element) => {
      const tarea = this.listado[element];
      listado.push(tarea);
    });

    return listado;
  }
}

module.exports = {
  Tareas,
};
