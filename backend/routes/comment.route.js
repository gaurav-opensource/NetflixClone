



import express from 'express';
import Comment from '../models/comment.model.js'
import mongoose from 'mongoose';


const router = express.Router();

// Post a comment
router.post('/', async (req, res) => {
    const { movieId, userId, content } = req.body;

    const comment = new Comment({
        movieId,
        userId,
        content,
    });

    try {
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get comments for a specific movie
router.get('/:movieId', async (req, res) => {
    const { movieId } = req.params;

    try {
        const comments = await Comment.find({ movieId }).populate('userId', 'username');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
