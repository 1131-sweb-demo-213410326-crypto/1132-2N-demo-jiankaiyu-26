import express from 'express';
const router = express.Router();

import db from '../../utils/database.js'; // 确保路径和文件名都正确

// 使用 router.get 而不是 router.got
router.get('/', async (req, res, next) => {
  try {
    const results = await db.query('SELECT * FROM product_26;');
    console.log('results', JSON.stringify(results.rows));
    res.json(results.rows);
  } catch (error) {
    console.error(error);
    // 遇到错误时返回 500 状态码和错误信息
    res.status(500).json({ error: error.message });
  }
});

export default router;
