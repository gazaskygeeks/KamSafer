const jwt = require('jsonwebtoken');

const cookiesValidator = (req, res, next) => {
  const { SECRET, DB_USERNAME } = process.env;
  jwt.verify(req.cookies.logged_in, SECRET, (error, result) => {
    if (error) res.status(500);
    else if (result.username === DB_USERNAME) {
      req.id = result.id;
      next();
      return;
    }

    res.status(403).json({ auth: false });
  });
};
module.exports = cookiesValidator;
