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
                .exists({ checkFalsy: true })
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const newPost = new Post({
                name: req.body.name, 
                category_id: req.body.category_id,
                description: req.body.description,
                longitude: req.body.longitude,
                lattitude: req.body.lattitude
            });
            const post = await newPost.save();

            res.json(post);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }

);

// @route  GET api/posts/:id
// @desc   Get a post by id
// @access Private

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route  GET api/posts/:id
// @desc   Get a post by id
// @access Private

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(!post) {
            return res.status(404).json({ msg: 'Post not found'});
        }

        res.json(post);
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route  DELETE api/posts/:id
// @desc   Delete a map post
// @access Private

router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(!post) {
            return res.status(401).json({ msg: 'User not Authorised '});
        }
        
        await post.remove();

        res.json({ msg: 'Post has been Removed'});
    } catch {
        console.error(err.message);
        if(!post) {
            return res.status(404).json({ msg: 'Post not found'});
        }
        res.status(500).send('Server Error');
    }
})

module.exports = router;

