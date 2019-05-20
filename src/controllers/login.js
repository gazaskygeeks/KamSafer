const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('env2')('.env');

exports.post = (req, res) => {
  const { username, password } = req.body;
  const { DB_HASHED, SECRET, DB_USERNAME } = process.env;
  if (DB_USERNAME === username) {
    bcrypt.compare(password, DB_HASHED, (err, match) => {
      if (err) {
        res.json({ logged: false });
      } else if (!match) {
        res.json({ logged: false });
      } else {
        const token = jwt.sign(
          {
            username,
          },
          SECRET,
        );
        res.cookie('logged_in', token), res.json({ logged: true });
      }
    });
  } else {
    res.json({ logged: false });
  }
};
