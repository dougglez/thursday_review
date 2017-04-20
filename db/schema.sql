--USERS TABLE

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar(70),
  pass varchar(18),
  first_name varchar(100),
  last_name varchar(100),
)


--PRODCUTS TABLE

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name varchar(50),
  description text,
  price integer,
  imageUrl varchar(255),
  user_id integer references users(id)
)