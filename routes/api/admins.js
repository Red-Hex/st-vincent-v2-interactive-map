const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Admin = require('../../models/Admin');

// @route   POST api/admins
// @desc    Register an admin
// @access  Private

router.post('/', [
    check('name', 'Name is Required')
        .exists({ checkFalsy: true }),
    check('email', 'Valid Email is Required')
        .isEmail(),
    check('password', 'Password of at least 6 characters is required')
        .isLength({ min: 6 })   
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            // Check to see is the admin exists
            let admin = await Admin.findOne({ email });
            if (admin) {
                return res 
                    .status(400)
                    .json({ errors: [{ msg: 'Admin already exists'}]});
            }

            admin = new Admin({
                name,
                email,
                password
            });

            //password ecryption
            const salt = await bcrypt.genSalt(10);

            admin.password = await bcrypt.hash(password, salt);

            await admin.save();

            const payload = {
                admin: {
                    id: admin.id
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 36000}, // Change later
                (err, token) => {
                    if(err) throw err;
                    res.json({ token });
                }
            );
        }   catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

    });

module.exports = router;