const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    cedula:{
        type: Number,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true
    }
});

// Exportar el modelo Post
module.exports = mongoose.model('Post', PostSchema);