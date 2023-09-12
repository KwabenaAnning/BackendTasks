/* Replace with your SQL commands */
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname varchar(100),
    lastname varchar (100),
    username varchar(100) UNIQUE,
    password varchar(60),
    -- role role_type,
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)