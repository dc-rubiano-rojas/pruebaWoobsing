const userCtrls = {};

// Models
const User = require('../models/models');



userCtrls.createUser = async(req, res) => {

    const user = new User({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        telefono: req.body.telefono,
        direccion: req.body.telefono
    });

    // const newUser = await user.save();

    // res.json({
    //     user: newUser
    // });

    await user.save((err, userStored) => {

        if (err) return res.status(500).send({ message: 'Error al guardar el documento.' });

        if (!userStored) return res.status(404).send({ message: 'No se ha podido guardar el proyecto' });

        return res.status(200).send({ user: userStored });
    });
};



userCtrls.getUser = async(req, res) => {

    // const id = req.params.id;

    // const user = await User.findById(id);

    // res.json(user)

    await User.findById(req.params.id, (err, user) => {
        if (err) return res.status(500).send({ message: 'Error al devolver los datos' });

        if (!user) return res.status(404).send({ message: 'El usuario no existe' });

        return res.status(200).send({
            user
        })
    });
};



userCtrls.getUsers = async(req, res) => {

    const users = await User.find();

    res.json(users);
};


userCtrls.editUser = async(req, res) => {
    const { id } = req.params;

    const user = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        nombre: req.body.nombre,
        nombre: req.body.nombre,
    }

    const editUser = await User.findByIdAndUpdate(id, { $set: user }, { new: true });

    res.json({ user: editUser });
};



userCtrls.deleteUser = async(req, res) => {
    const { id } = req.params;

    await User.findByIdAndRemove(id);

    res.json({
        status: 'Eliminación exitosa'
    })

};



module.exports = userCtrls;