// Importando modulos o paquetes
const colors = require('colors');

// Importando modulos propios
const { Inquirer } = require('./helpers/inquirer');
const { guardarDB, leerBD } = require('./helpers/saveFile');
const { Tareas } = require('./models/tareas');
// const { Mensajes } = require('./helpers/mensajes');

// Clase principal de la aplicacion por hacer en la consola
class Main {
  constructor() {
    // Esto limpia la caonsola
    console.clear();
    this.tareasDB = leerBD();
  }

  // Metodos de la clase
  async ejecucionApp() {
    // const mensaje = new Mensajes();
    const inquirer = new Inquirer();
    const tareas = new Tareas();

    let opt = '';

    if (this.tareasDB) {
      // Establecer las tareas
    }
    await inquirer.pausaMenu();
    do {
      // Esto imprime el menu
      opt = await inquirer.inquirerMenu();
      // console.log({ opt });

      switch (opt) {
        case '1':
          const desc = await inquirer.leerInput('Descripción');
          tareas.crearTarea(desc);
          break;
        case '2':
          console.log(tareas.listadoArray);
          break;
        default:
          break;
      }

      // Grabar la info en la bd
      guardarDB(tareas.listadoArray);

      if (opt !== '0') {
        await inquirer.pausaMenu();
      }
    } while (opt !== '0');
  }
}

const main = new Main();
main.ejecucionApp();
