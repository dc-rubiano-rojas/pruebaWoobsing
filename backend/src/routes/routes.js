const express = require('express');

// Controladores
const userCtrls = require('../controllers/controllers');

const router = express.Router();

router.post('/user', userCtrls.createUser);

router.get('/user/:id', userCtrls.getUser);

router.get('/users', userCtrls.getUsers);

router.put('/user/:id', userCtrls.editUser);

router.delete('/user/:id', userCtrls.deleteUser);


module.exports = router;