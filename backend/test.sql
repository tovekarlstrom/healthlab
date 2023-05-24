DROP TABLE IF EXISTS usersLike

CREATE TABLE usersLike (
  id serial PRIMARY key,
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  password text NOT NULL
);
INSERT INTO usersLike (full_name, email, password)
VALUES('test user','test@test.com', 'test123');
