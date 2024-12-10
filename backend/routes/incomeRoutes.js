const express = require('express');
const Income = require('../models/income'); 
const router = express.Router();

router.post('/', async (req, res) => {
    const { userId, amount, description, date } = req.body;

    try {
        const newIncome = new Income({ userId, amount, description, date });
        await newIncome.save();
        res.status(201).json(newIncome);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const incomes = await Income.find().populate('userId');
        res.json(incomes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const income = await Income.findById(req.params.id).populate('userId');
        if (!income) return res.status(404).json({ message: 'Income not found' });
        res.json(income);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const income = await Income.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!income) return res.status(404).json({ message: 'Income not found' });
        res.json(income);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const income = await Income.findByIdAndDelete(req.params.id);
        if (!income) return res.status(404).json({ message: 'Income not found' });
        res.json({ message: 'Income deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;