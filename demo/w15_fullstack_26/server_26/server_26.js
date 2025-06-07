// server_26.js

// 1. 必须把这行放在最最最前面，保证 .env 会最先被加载
import 'dotenv/config';

import express from 'express';
import apiProductRouter from './routes/api/apiProductRouter_26.js';

const app_26 = express();

// 2. 从 process.env 里读取环境变量。如果 .env 有 PORT、DATABASE，就用它们；没有的话才 fallback 到默认值。
const port = process.env.PORT || 5000;
console.log('ENV check:', 'PORT=', process.env.PORT, 'DATABASE=', process.env.DATABASE);

app_26.use(express.static('public'));
app_26.set('view engine', 'ejs');

// 3. 渲染静态页面：访问 /product_26/static
app_26.use('/product_26/static', (req, res) => {
  res.render('product_26/static_26', {
    title: 'Get Products - Static',
    name: 'jiankaiyu',
    id: '213410326',
  });
});

// 4. 把 /api/product_26 的请求都给 apiProductRouter_26.js 来处理
app_26.use('/api/product_26', apiProductRouter);

// 5. 根路径：访问 / 时渲染 index.ejs
app_26.get('/', (req, res) => {
  res.render('index', {
    title: 'Express',
    name: 'jiankaiyu',
    id: '213410326',
  });
});

// 6. 启动监听。这里会打印 “Connecting <DATABASE> server on port: <port>”
app_26.listen(port, () => {
  console.log(`Connecting ${process.env.DATABASE} server on port: ${port}`);
});

