import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
  host: 'localhost',
  port: "5432",            
  user: 'postgres',      
  password: '1q2w3e4r5t',
  database: 'js_demo_26' 
});


console.log('connect database', pool.options);

export default pool;




