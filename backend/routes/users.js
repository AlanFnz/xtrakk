const router = require('express').Router();
let User = require('../models/user.model');

// Endpoints
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username: username});

  newUser.save()
    .then(() => res.status(201).json({
      status: 'success',
      message: 'User added',
      data: newUser,
    }))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
