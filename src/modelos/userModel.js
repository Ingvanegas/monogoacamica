const mongoose = require('mongoose');

userSchema = { 
    nombre: String, 
    apellido: String, 
    password: String, 
    telefono: Number, 
    direccion: String 
};

module.exports.userModel = mongoose.model('Usuarios', userSchema);