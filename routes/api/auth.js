const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// @route  GET api/auth
// @desc   Test Route
// @access Public

router.get('/', auth, async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id).select('-password');
        res.json(admin);
    } catch(error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route  POST api/auth
// @desc   Authenticate Admin Login
// @access Public

router.post('/', [
        check('email', 'Valid Email is Required')
            .isEmail(),
        check('password', 'Password is Required')
            .exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()});
        }

        const { email, password } = req.body;

        try {
            // Check to see if user exists
            let admin = await Admin.findOne({ email });
            if(!admin) {
                return res.status(400).json({ errors: [{msg: 'Invalid Login'}]});
            }

            const isMatch = await bcrypt.compare(password, admin.password);

            if(!isMatch) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Invalid login'}]});
            }
            const payload = {
                admin: {
                    id: admin.id
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 }, // Change after testing
                (err, token) => {
                    if(err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });
module.exports = router;