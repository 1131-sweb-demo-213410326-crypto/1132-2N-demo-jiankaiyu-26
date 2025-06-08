// routes/ProductRouter_26.js
import express from 'express';
import db from '../utils/database.js';
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    // 取到的 rows 重命名为 products
    const { rows: products } = await db.query(
      'SELECT id, title, price, img FROM product_26'
    );

    // 传给模板的 key 也叫 products
    res.render('product_26/index', {
      title:    'Get Products From PostgreSQL Server',
      name:     'jiankaiyu',
      id:       '213410326',
      data  // 模板里就用 products.forEach(...)
    });
  } catch (err) {
    next(err);
  }
});

export default router;





