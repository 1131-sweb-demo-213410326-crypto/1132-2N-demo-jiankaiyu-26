// server_26.js
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import path from 'path';

import apiProductRouter   from './routes/api/apiProductRouter_26.js';
import ProductRouter      from './routes/ProductRouter_26.js';

const app = express();

// —— 静态目录 ——
// 1) 把 public/ 映射到 /
app.use(express.static(path.join(process.cwd(), 'public')));

// 2) （可选）把 public/product 映射到 /product-static
app.use(
  '/product-static',
  express.static(path.join(process.cwd(), 'public', 'product'))
);

// —— 中间件 & 视图引擎 —— 
app.use(cors());
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

// —— 路由 ——
// API 路由
app.use('/api/product_26', apiProductRouter);

// 动态产品页
app.use('/product_26', ProductRouter);

// 产品静态 EJS
app.get('/product_26/static', (req, res) => {
  res.render('product_26/static_26', {
    title: 'Get Products - Static (EJS)',
    name:  'jiankaiyu',
    id:    '213410326'
  });
});

// 博客静态页
app.get('/blog_26/static', (req, res) => {
  res.render('blog_26/static_26', {
    title: 'Get Blogs - Static',
    name:  'jiankaiyu',
    id:    '213410326'
  });
});

// 首页
app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Blog - Static',
    name:  'jiankaiyu',
    id:    '213410326'
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));





