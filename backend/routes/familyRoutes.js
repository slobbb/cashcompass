const express = require('express');
const Family = require('../models/family');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name } = req.body;

    try {
        const newFamily = new Family({ name });
        await newFamily.save();
        res.status(201).json(newFamily);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const families = await Family.find();
        res.json(families);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const family = await Family.findById(req.params.id);
        if (!family) return res.status(404).json({ message: 'Family not found' });
        res.json(family);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const family = await Family.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!family) return res.status(404).json({ message: 'Family not found' });
        res.json(family);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const family = await Family.findByIdAndDelete(req.params.id);
        if (!family) return res.status(404).json({ message: 'Family not found' });
        res.json({ message: 'Family deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;