const express = require("express");
const router = express.Router();
const User = require("../Models/user")
const registerFormValidation = require("../validations/register");
const loginFormValidation = require('../validations/login')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys")
// it helps not to repeat routes 
router.post("/register", (req, res) => {

    // Form validation
    const { errors, isValid } = registerFormValidation(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).send(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword
            })
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.confirmpassword = newUser.password;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});
// Note:Get axios request do not have body or data that we will send will show null object in backend so use post instead if want to send data from frontend to backend
router.post("/login", (req, res) => {
    console.log(req.body);
    const { errors, isValid } = loginFormValidation(req.body);
    if (!isValid) {
        return res.status(400).send(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        // 
        bcrypt.compare(password, user.password).then(isMatch => {
            // User matched
            // Create JWT Payload
            if (isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name
                };
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token,
                        });
                    }
                )
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        })

    })


})
module.exports = router;