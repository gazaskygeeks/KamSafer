const bcrypt = require('bcryptjs');

const logHash = (plainTextPassword) => {
  console.log(plainTextPassword);
  bcrypt
    .hash(plainTextPassword, 15)
    .then(console.log)
    .catch(console.log);
};

logHash(process.argv[2]);
