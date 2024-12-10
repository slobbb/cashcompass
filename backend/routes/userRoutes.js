const express = require('express');
const User = require('../models/Users'); 
const router = express.Router();

router.post('/', async (req, res) => {
    const { username, password, age, familyId } = req.body;

    try {
        const newUser  = new User({ username, password, age, familyId });
        await newUser .save();
        res.status(201).json(newUser );
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find().populate('familyID');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('familyID');
        if (!user) return res.status(404).json({ message: 'User  not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User  not found' });
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User  not found' });
        res.json({ message: 'User  deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;