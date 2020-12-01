const { request } = require('express');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const Category = require('../../models/Category');

// @route  POST api/posts
// @desc   Create a map post
// @access Private

router.post('/', [auth, [
            check('name', 'Please enter a name')
                .exists({ checkFalsy: true }),
            check('category_id', ' Select Category')
                .exists({ checkFalsy: true }),
            check('longitude', 'Enter longitude')
                .exists({ checkFalsy: true}),
            check('lattitude', 'Enter lattiude')
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        try {
            const newPost = new Post({
                name: req.body.text, 
                category_id: req.body.text,
                description: req.body.text,
                longitude: req.body.number,
                lattitude: req.body.number
            });
            const post = await newPost.save();

            res.json(post);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }

);

module.exports = router;

