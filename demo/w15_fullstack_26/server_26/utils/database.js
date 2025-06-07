import { Pool } from 'pg';

// const { Pool } = pkg;

let pool;

console.log('process.env.DATABASE', process.env.DATABASE);

if (process.env.DATABASE === 'LOCAL') {
  pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '1q2w3e4r5t',
    database: 'js_demo_26',
  });
} else if (process.env.DATABASE === 'SUPABASE') {
  pool = new Pool({
    host: 'aws-0-us-west-1.pooler.supabase.com',
    port: '5432',
    user: 'postgres.olisoltnaeqafilzslxr',
    password: 'jky18928075692',
    database: 'postgres',
  });
}

console.log('connect database', pool.options);

export default pool;




