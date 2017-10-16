const express = require('express');
const router = express.Router();
// const knex = require('knex');
/* GET home page. */

router.get('/', function (req, res, next) {
  res.send(console.log('L in CRUDL'))
})

router.get('/:id', function (req, res, next) {
  const id = Number(req.params.id)
  res.send(console.log('A specific R in CRUDL'))
})

router.post('/', function (req, res, next) {
  const { item } = req.body
  res.send(console.log('C in CRUDL'))
})

router.patch('/:id', function (req, res, next) {
  const id = Number(req.params.id)
  const { item } = req.body
  res.send('U in CRUDL')
})

router.delete('/:id', function (req, res, next) {
  const id = Number(req.params.id)
res.send(console.log('D in CRUDL'))
})


module.exports = router;
