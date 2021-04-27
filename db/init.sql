/*CREATE DATABASE test;*/
CREATE SCHEMA IF NOT EXISTS test;
CREATE TABLE IF NOT EXISTS test.timer (
    id SERIAL PRIMARY KEY,
    timer time
);
CREATE USER test WITH PASSWORD 'test';
GRANT ALL PRIVILEGES ON DATABASE test to test;

/*INSERT INTO test.timer(timer) VALUES ('00:00:10');*/

