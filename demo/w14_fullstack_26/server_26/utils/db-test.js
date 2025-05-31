import db from './database.js';

const testDB = async () => {
  try {
    const results = await db.query('SELECT * FROM product_26;');
    console.log('results',JSON.stringify(results.rows));
  } catch (error) {
    console.log(error);
  }
};

testDB();

export default testDB;
