const express = require('express');
const router = express.Router();
const Contract = require('../models/Contract');

// Fetch all contracts
router.get('/', async (req, res) => {
  try {
    const contracts = await Contract.find();
    res.json(contracts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new contract
router.post('/', async (req, res) => {
  const contract = new Contract(req.body);
  try {
    const newContract = await contract.save();
    res.status(201).json(newContract);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
