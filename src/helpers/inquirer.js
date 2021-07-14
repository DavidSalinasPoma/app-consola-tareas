// Importar paquetes o mudulos
const inquirer = require('inquirer');
const colors = require('colors');

// Menu options configuración requirer
const pregunta1 = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué decea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear tarea`,
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas`,
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas completadas`,
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes`,
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`,
      },
      {
        value: '6',
        name: `${'6'.green} Borrar tarea`,
      },
      {
        value: '0',
        name: `${'0'.green} Salir`,
      },
    ],
  },
];

const pregunta2 = [
  {
    type: 'input',
    name: 'enter',
    message: `Presione ${'ENTER'.green} para continuar\n`,
  },
];

class Inquirer {
  constructor() {}

  // Metodo de la clase para diseñar un menu
  async inquirerMenu() {
    // Limpia la consola
    console.clear();
    console.log('======================'.green);
    console.log('Seleccione una opción'.white);
    console.log('======================\n'.green); // Este tiene un salto de linea

    // Destructurando objetos
    const { opcion } = await inquirer.prompt(pregunta1);
    return opcion;
  }

  // Metodo de la clase
  async pausaMenu() {
    console.log('\n');
    await inquirer.prompt(pregunta2);
  }

  // Metodo que lee del input
  async leerInput(message) {
    const question = [
      {
        type: 'input',
        name: 'desc',
        message: message,
        validate(value) {
          if (value.length === 0) {
            return 'Por favor ingrese un valor';
          }
          return true;
        },
      },
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
  }
}

module.exports = {
  Inquirer,
};
