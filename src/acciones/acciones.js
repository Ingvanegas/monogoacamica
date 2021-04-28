const mongoose = require('mongoose');

module.exports.crear = async (model, data) => {
    const nuevousuario = new model(data);
    await nuevousuario.save();
}

module.exports.actualizar = async (model, id, user) => {
    await model.findByIdAndUpdate(id, user);
}

module.exports.eliminar = async (model, id) => {
    await model.findByIdAndDelete(id);
}

module.exports.consultar = async (model) => {
    console.log(await model.find());
}

module.exports.consultarUno = async (model, _id) => {
    console.log(await model.find({_id}));
}
