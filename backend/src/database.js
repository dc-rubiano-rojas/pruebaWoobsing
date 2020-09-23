const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/registroUsuariosPrueba', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('Database connected succesfully!'))
    .catch(err => console.log(err));

module.exports = mongoose;