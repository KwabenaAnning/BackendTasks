/* Replace with your SQL commands */
ALTER TABLE users
DROP COLUMN password;  

ALTER TABLE users
ADD COLUMN password VARCHAR;

