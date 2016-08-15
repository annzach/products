const express = require('express');
const router = express.Router();
const ProductOrganizer = require('../models/productorganizer');


router.get('/test', (req, res) => {
res.send("hi");
});

router.get('/', (req, res) => {
  ProductOrganizer.getAll()
    .then(productorganizer => {
      res.send(productorganizer);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.get('/:id', (req, res) => {
  ProductOrganizer.getOne(req.params.id)
    .then(productorganizer => {
      res.send(productorganizer);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});


router.post('/', (req, res) => {
  ProductOrganizer.create(req.body)
    .then(() => {
      res.send();
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.delete('/:id', (req, res) => {
  ProductOrganizer.delete(req.params.id)
    .then(() => {
      res.send();
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.put('/:id', (req, res) => {
  ProductOrganizer.update(req.params.id, req.body)
    .then(() => {
      return ProductOrganizer.getOne(req.params.id);
    })
    .then(productorganizer => {
      res.send(productorganizer);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

module.exports = router;