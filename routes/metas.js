var express = require('express');
var router = express.Router();
var model = require('../models/index');

router.get('/', function (req, res, next) {
  model.Metas.findAll({})
  .then(metas => res.json({
    error: false,
    data: metas
  }))
  .catch(error => res.json({
    error: true,
    data: [],
    error: error
  }));
});

router.post('/', function (req, res, next) {
  const {
    descricao,
    valor,
    data
  } = req.body;
  model.Metas.create({
    descricao: descricao,
    valor: valor,
    data: data
  })
  .then(metas => res.status(201).json({
    error: false,
    data: metas,
    message: 'Nova meta criada com sucesso!'
  }))
  .catch(error => res.json({
    error: true,
    data: [],
    error: error
  }));
});


router.put('/:id', function (req, res, next) {
  const meta_id = req.params.id;
  const { descricao, valor, data } = req.body;
  model.Metas.update({
    descricao: descricao,
    valor: valor,
    data: data
  }, {
    where: {
      id: meta_id
    }
  })
  .then(metas => res.status(201).json({
    error: false,
    message: 'Meta atualizada.'
  }))
  .catch(error => res.json({
    error: true,
    error: error
  }));
});


router.delete('/:id', function (req, res, next) {
  const meta_id = req.params.id;
  model.Metas.destroy({ where: {
    id: meta_id
  }})
  .then(status => res.status(201).json({
    error: false,
    message: 'Meta deletada.'
  }))
  .catch(error => res.json({
    error: true,
    error: error
  }));
});



module.exports = router;
