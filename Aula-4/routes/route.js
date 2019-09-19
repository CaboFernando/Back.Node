const express = require('express');
const router = express.Router();

const USER_DATA = [
    {
        nome: "Lukinha do Zap"
    },
    {
        nome: "Carlão BINGOOOOOO!!!!"
    }
]

// const get = async (req, res) => {
//     res.json({ message: 'AOBAAAA'});    
// }

// const post = async (req, res) => {
//     res.send(req.body);    
// }

const get = async (req, res) => {
    res.json(USER_DATA);    
}

const post = async (req, res) => {
    USER_DATA.push(req.body);
    res.status(201).json(req.body);
}

router.get('/', get);
router.post('/', post);

module.exports = router;