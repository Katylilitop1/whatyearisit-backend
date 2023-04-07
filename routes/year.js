var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
 const date = new Date();
 const year= date.getUTCFullYear();

 res.json({ year: year });
});

module.exports = router;