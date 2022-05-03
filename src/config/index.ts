import 'dotenv/config';

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  DBUser: process.env.DB_USER,
  DBPassword: process.env.DB_PASSWORD,
  DBHost: process.env.DB_HOST,
  DBName: process.env.DB_NAME,
  DBPort: process.env.DB_PORT || 5432,
  APIKey: process.env.API_KEY,
  JWTSecret: process.env.JWT_SECRET,
  BaseURL: process.env.BASE_URL || 'http:localhost:3000/api/v1/'
}

export default config;