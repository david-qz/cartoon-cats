const { Router } = require('express');
const { cats } = require('../../data/cats');

const router = new Router();

router
  .get('/:id', (req, res) => {
    const cat = cats.find(x => x.id === req.params.id);
    res.json(cat);
  });

module.exports = router;
