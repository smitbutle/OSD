const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

router.post('/reg', [
  body('email').isEmail(),
  body('name').isLength(),
  body('phone').isLength({ min: 10 }),
  // body('name').isLength(),
], async (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    let dual = false
    if (req.body.isDualBooted === "true") {
      dual = true;
    }
    await User.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      college: req.body.college,
      yearOfStudy: req.body.yearOfStudy,
      isDualBooted: dual,
      referralCode: req.body.referralCode,
    });
    res.json({ success: true });
  } 
  catch (err) {
    console.log(err);
    res.json({ success: false });
  }
}
);
module.exports = router;