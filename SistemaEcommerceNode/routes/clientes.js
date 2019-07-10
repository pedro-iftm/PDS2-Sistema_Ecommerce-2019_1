const express = require('express');
const router = express.Router();
const Cliente = require("../models/clientes")

router.get("/clientes", (req, res) =>
  Cliente.findAll()
    .then(result => res.json(result))
    .catch(error => {
      res.status(412).json({ msg: error.message });
    }));

router.get("/:id", (req, res) => {
  Cliente.findOne({
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
  Cliente.destroy({
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
  Cliente.create(req.cody)
    .then(result => res.json(result))
    .catch(error => {
      res.status(412).json({msg: error.message});
    });
});

module.exports = router;