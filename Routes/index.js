const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('https://github.com/DrunkenLee');
});

module.exports = router;
