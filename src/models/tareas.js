// Importar paquetes o modulos
const { Tarea } = require('./tarea');
const colors = require('colors');

class Tareas {
  // Atributos de la clase
  listado;

  // Metodo constructor
  constructor() {
    this.listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this.listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc) {
    const tarea = new Tarea(desc);
    this.listado[tarea.id] = tarea;
  }

  // setter  and geters
  get listadoArray() {
    const listas = [];
    Object.keys(this.listado).forEach((element) => {
      const tarea = this.listado[element];
      listas.push(tarea);
    });

    return listas;
  }

  listadoCompleto() {
    // 1: en verde
    // Pendiente en rojo
    // 1. Comer :: Completado | pendiente
    // 2. Comida :: Completado | Pendiente
    // 3. Cena :: Completado | Pendiente

    const listas = [];
    let tarea = '';
    let contador = 1;
    Object.keys(this.listado).forEach((element) => {
      if (this.listado[element].completadoEn !== null) {
        tarea = `${colors.green(`${contador}`)}. ${
          this.listado[element].desc
        } :: ${colors.green('Completado')}`;
      } else {
        tarea = `${colors.green(`${contador}`)}. ${
          this.listado[element].desc
        } :: ${colors.red('Pendiente')}`;
      }
      console.log(tarea);
      listas.push(tarea);
      contador++;
    });
    return listas;
  }

  listarTareasCompletadas(completadas) {
    let mostrarCompletado = '';
    let id = 1;

    this.listadoArray.forEach((element) => {
      const idx = `${id + 1}`.green;
      const { desc, completadoEn } = element;

      if (completadas) {
        if (completadoEn) {
          mostrarCompletado = `${colors.green(`${id}`)}. ${desc} ${colors.green(
            completadoEn,
          )}`;
          id++;
          console.log(mostrarCompletado);
        }
      } else {
        if (completadoEn === null) {
          mostrarCompletado = `${colors.green(`${id}`)}. ${desc} ${colors.red(
            completadoEn,
          )}`;
          id++;
          console.log(mostrarCompletado);
        }
      }
    });
  }

  // Metodo que borra tareas
  borrarTarea(id = '') {
    if (this.listado[id]) {
      delete this.listado[id];
    }
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this.listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString;
      }
    });
    this.listadoArray.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this.listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = {
  Tareas,
};
