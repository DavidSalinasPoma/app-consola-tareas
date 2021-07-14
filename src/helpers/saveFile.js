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
  const info = fs.readFileSync(pathArchivo, { encoding: 'utf-8' });
  const data = JSON.parse(info);
  console.log(data);
  return null;
};

module.exports = {
  guardarDB,
  leerBD,
};
