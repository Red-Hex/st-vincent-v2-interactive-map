const { request } = require('express');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Category = require('../../models/Category');

// @route  POST api/categories
// @desc   Create a map post
// @access Private

router.post('/', [auth, [
        check('name', 'Name is Required')
            .exists({ checkFalsy: true}),
        check('id', 'ID is required')
            .exists({ checkFalsy: true})
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const newCategory = new Category({
                name: req.body.name,
                id: req.body.id
            });
            const category = await newCategory.save();   

            res.json(category);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route  GET api/categories
// @desc   Get All posts
// @access Private

router.get('/', async (req,res) => {
    try {
        const categories = await Category.find().sort({ id: 'asc' });
        res.json(categories);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error: ' + err.message);
    }
});

module.exports = router;