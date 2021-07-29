var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/a', function(req, res, next) {
  res.send({name:'duan'});
});

module.exports = router;
