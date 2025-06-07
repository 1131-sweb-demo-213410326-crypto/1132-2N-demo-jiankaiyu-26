import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import apiProductRouter from './routes/api/apiProductRouter_26.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const app_26     = express();
const port       = process.env.PORT || 5000;

// 1) CORS & Body Parser
app_26.use(cors());
app_26.use(express.json());
app_26.use(express.urlencoded({ extended: true }));

// 2) 静态资源 & EJS 配置 —— 一定要在所有渲染路由前面
app_26.use(express.static(path.join(__dirname, 'public')));
app_26.set('views', path.join(__dirname, 'views'));
app_26.set('view engine', 'ejs');

console.log('ENV check:', 'PORT=', port, 'DATABASE=', process.env.DATABASE);

// 3) 根页面
app_26.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Home',
    name:  'jiankaiyu',
    id:    '213410326',
  });
});

// 4) 产品静态示例页面（EJS）
app_26.get('/product_26/static', (req, res) => {
  res.render('product_26/static_26', {
    title: 'Get Products - Static',
    name:  'jiankaiyu',
    id:    '213410326',
  });
});

// 5) API 路由
app_26.use('/api/product_26', apiProductRouter);

// 6) 其它静态示例（如博客）
app_26.get('/blog_26/static', (req, res) => {
  res.render('blog_26/static_26', {
    title: 'My Blog - Static',
    name:  'jiankaiyu',
    id:    '213410326',
  });
});

// 7) 启动
app_26.listen(port, () => {
  console.log(`Connecting ${process.env.DATABASE} server on port: ${port}`);
});


