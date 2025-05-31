import express from 'express';
import apiProductRouter from './routes/api/apiProductRouter_26.js';

const app_26 = express();

app_26.use(express.static('public'));
app_26.set('view engine', 'ejs');

app_26.use('/product_26/static', (req, res, next) =>{
    res.render('product_26/static_26',{
    title:'Get Products - Static',
    name:'jiankaiyu',
    id:'213410326',
    });
});

app_26.use('/api/product_26',apiProductRouter);

app_26.use('/',(req, res, next)=>{
res.render('index',{
    title:'Express',
    name:'jiankaiyu',
    id:'213410326',
});
});

const port = process.env.PORT || 5000;

app_26.listen(port, () =>{
    console.log(`Connecting on port: ${port}`);
});