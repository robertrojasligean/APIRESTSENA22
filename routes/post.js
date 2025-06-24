const express = require('express');
const router = express.Router();

// Importar el modelo de la base de datos que esta en Post.js
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        // Obtener todos los posts de la base de datos
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:cedula', async(req, res) => {
    try {
        // Obtener un post por su cedula
        const post = await Post.findById(req.params.cedula);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});


// Crear un nuevo post
router.post('/', async (req, res) => {
    const post = new Post({ 
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono
    });  
      try {
        const savedPost = await post.save();
        res.json(savedPost);
      }catch (err) {
        res.json({ message: err.message });             
      } 
      
    });    
    
    router.patch('/:cedula', async (req, res) => {
        try {
            // Actualizar un post por su cedula
            const updatedPost = await Post.updateOne(
                { _id: req.params.cedula },
                { $set: { 
                    // cedula: req.body.cedula,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    telefono: req.body.telefono
                } }
            );
            res.json(updatedPost);
        } catch (err) {
            res.json({ message: err.message });
        }
    });


    // Eliminar un post por su cedula
    router.delete('/:cedula', async (req, res) => {
        try {
            const removedPost = await Post.findByIdAndDelete(req.params.cedula );
            if (!removedPost){
                return res.status(404).json({ message: 'Post no encontrado' });
            }
        } catch (err) {
            res.status(500).json({ message: "Error de conexión" });
        }   
        });   




// exporto el router
module.exports = router;