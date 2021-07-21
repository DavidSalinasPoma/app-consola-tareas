// Modulo para guardar un archivo
const fs = require('fs');

// Configurando directorio
const pathArchivo = './src/db/data.json'; // Donde grabar la bd

// Funcion que guarda las tareas en la BD
const guardarDB = (data) => {
  fs.writeFileSync(pathArchivo, JSON.stringify(data));
};

// Funcion que lee la BD de un archivo json
const leerBD = () => {
  if (!fs.existsSync(pathArchivo)) {
    return null;
  }
  // Si existe se comienza a leer la data del archivo
  const info = fs.readFileSync(pathArchivo, { encoding: 'utf-8' });
  const data = JSON.parse(info); // convertir de JSON a objeto

  // Retornando datos del json
  return data;
};

module.exports = {
  guardarDB,
  leerBD,
};
