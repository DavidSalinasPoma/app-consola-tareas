// Importando modulos o paquetes
const colors = require('colors');

// Clase mensaje de salidas
class Mensajes {
  constructor() {}

  // Metodos de la clase
  mostrarMenu() {
    return new Promise((resolve, reject) => {
      // Limpia la consola
      console.clear();
      console.log('======================'.green);
      console.log('Seleccione una opción'.green);
      console.log('======================\n'.green); // Este tiene un salto de linea

      // Construyendo el menu
      console.log(`${'1.'.green} Crear tarea`);
      console.log(`${'2.'.green} Listar tareas`);
      console.log(`${'3.'.green} Listar tareas completadas`);
      console.log(`${'4.'.green} Listar tareas pendientes`);
      console.log(`${'5.'.green} Completar tarea(s)`);
      console.log(`${'6.'.green} Borrar tarea`);
      console.log(`${'0.'.green} Salir\n`); // Este tiene un salto de linea

      // Metodo o interface  para mostrar o recibir informacion del usuario
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      // Utilizando el readLine
      readline.question('Seleccione una opción: ', (option) => {
        readline.close();
        resolve(option); // Siempre sera la instrucción final
      });
    });
  }

  //  Metodo para pausar el menu
  pausarMenu() {
    return new Promise((resolve, reject) => {
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      // Utilizando el readLine
      readline.question(`\nPresione ${'ENTER'.green} para continuar.\n`, () => {
        readline.close(); // Cierra la interfas
        resolve(); // Aqui no devuelve nada
      });
    });
  }
}

module.exports = {
  Mensajes,
};
