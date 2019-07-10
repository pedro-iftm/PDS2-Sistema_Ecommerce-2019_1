const express = require('express');
const router = express.Router();
const Produto = require("../models/produtos")

router.get("/produtos", (req, res) =>
  Produto.findAll()
    .then(result => res.json(result))
    .catch(error => {
      res.status(412).json({ msg: error.message });
    }));

router.get("/:id", (req, res) => {
  Produto.findOne({
    where: {
      codigo: req.params.id
    }
  }).then(result => {
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  }).catch(error => {
    res.status(412).json({ msg: error.message });
  });
})

router.delete("/:id", (req, res) => {
  Produto.destroy({
    where: {
      codigo: req.params.id
    }
  })
    .then(result => res.sendStatus(204))
    .catch(error => {
      res.status(412).json({ msg: error.message });
    })});

router.post("/", (req, res) => {
  console.log(req.body);
  Produto.create(req.cody)
    .then(result => res.json(result))
    .catch(error => {
      res.status(412).json({msg: error.message});
    });
});

module.exports = router;