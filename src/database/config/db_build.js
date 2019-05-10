const { car } = require('../models');
const seq = require('./db_connection.js');

const { DB_HOST } = process.env;

if (DB_HOST !== 'localhost') {
  throw Error('Database is not local, aborting to avoid wiping Production DB');
}

const carsArray = [
  {
    model_color: 'Purple Porsche',
    car_no: '23-543-7Z',
    owner: 'Mavis',
    last_log_km: 0,
  },
  {
    model_color: 'Magenta Merc',
    car_no: '31-43-7Z',
    owner: 'Anam',
    last_log_km: 0,
  },
  {
    model_color: 'Jaded Jaguar',
    car_no: '55-543-8Z',
    owner: 'Ghassan',
    last_log_km: 0,
  },
];

seq
  .sync({ force: true })
  .then(() => {
    console.log('synced');
    car
      .bulkCreate(carsArray)
      .then(res => console.log('Successfully added the cars'))
      .catch(console.log);
  })
  .catch((err) => {
    console.log(err);
    console.log('error syncing');
  });
