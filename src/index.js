const userModel = require('./modelos/userModel');
const manager = require('./conexion/connect');
const actions = require('./acciones/acciones');

async function start() {

    manager.connect();

    await actions.crear(userModel.userModel, {
            nombre: 'Andres', apellido: 'Salomon', password: '1234', telefono: 3007002550, direccion: 'Fake street 123'
    });

    await actions.actualizar(userModel.userModel, '6088ae1d612e68d3a4c3c660',
    {
        nombre: 'Walter', apellido: 'Vanegas Barcelo', password: '1234', telefono: 3007002550, direccion: 'Fake street 123'
    });

    await actions.eliminar(userModel.userModel, '6088ae1d612e68d3a4c3c660');

    await actions.consultar(userModel.userModel);

    await actions.consultarUno(userModel.userModel, '6088a205eaad769190190aca');
}

start();
