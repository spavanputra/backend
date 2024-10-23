const app = require('./app');
const pool = require('./config/db');
const { createUserTable } = require('./models/User');
const { createContactTable } = require('./models/Contact');

const PORT = process.env.PORT || 3000;

const init = async () => {
  await createUserTable();
  await createContactTable();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

init();
