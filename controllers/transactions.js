// @desc GET ALL TRANSACTIONS 
// @route GET /api/v1/transactions  
// @access PUBLIC  

exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
}; 

// @desc ADD  TRANSACTIONS 
// @route POST /api/v1/transactions  
// @access PUBLIC  
exports.addTransactions = (req, res, next) => {
  res.send('POST transactions');
}; 

// @desc delete  TRANSACTIONS 
// @route DELETE /api/v1/transactions/:id
// @access PUBLIC  
exports.deleteTransactions = (req, res, next) => {
  res.send('DELETE transactions');
}; 