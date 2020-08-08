const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transactions');

router.route('/').get(getTransactions)
.post(addTransactions); 

router.route('/:id').delete(deleteTransactions); 

module.exports = router;


//CON STR:  mongodb://127.0.0.1:27017/transactions 