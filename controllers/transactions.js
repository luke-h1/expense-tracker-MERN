const Transaction = require('../models/Transaction');

// @desc GET ALL TRANSACTIONS
// @route GET /api/v1/transactions
// @access PUBLIC

exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error ❌ ',
        });
    }
};

// @desc ADD  TRANSACTIONS
// @route POST /api/v1/transactions
// @access PUBLIC
exports.addTransactions = async (req, res, next) => {
  try {
      const { text, amount } = req.body;
      const traction = await this.addTransactions.create(req.body);
      return res.status(201).json({
          success: true,
          data: this.addTransactions,
      });
  } catch (err) {
      if (err.name === 'ValidationError') {
          const messages = Object.values(err.errors).map((val => val.message));
          return res.status(400).json({
              sucess: false,
              error: messages
          });
      } else {
          return res.status(500).json({ 
              success: false,
              error: 'Server Error ',
          }); 
       
      }
  }
};
// @desc delete  TRANSACTIONS
// @route DELETE /api/v1/transactions/:id
// @access PUBLIC
exports.deleteTransactions = async (req, res, next) => {
  res.send('DELETE TRANSACTIONS');
};
