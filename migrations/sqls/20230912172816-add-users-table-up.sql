/* Replace with your SQL commands */

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email varchar(100) UNIQUE,
    password varchar(),
    created_at Timestamptz DEFAULT NOW(),
    updated_at Timestamptz DEFAULT NOW()
)