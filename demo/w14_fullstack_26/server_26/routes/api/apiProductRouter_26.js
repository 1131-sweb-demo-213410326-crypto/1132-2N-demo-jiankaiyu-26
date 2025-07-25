import express from 'express';
const router = express.Router();

import db from '../../utils/database.js';

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query('SELECT * FROM product_26;');
    console.log('results', JSON.stringify(results.rows));
    res.json(results.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: error.message });
  }
});

export default router;
