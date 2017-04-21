--USERS TABLE

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar(70),
  pass varchar(18),
  first_name varchar(100),
  last_name varchar(100),
)


-- INSERT INTO users (username, pass, first_name, last_name)
-- VALUES ('rasbandit', 'password1234', 'Todd', 'Rasband'),
-- 	('joe_blank', 'Securepassw0rd!', 'Joe', 'Blank'),
-- 	('dougglez', 'noonewillguessthis', 'Doug', 'Maxfield')

--PRODCUTS TABLE

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name varchar(50),
  description text,
  price integer,
  imageUrl varchar(255),
  user_id integer references users(id)
)

-- INSERT INTO products (name, description, price, imageurl, user_id)
-- VALUES ('bicycle','two wheels, one is flat', 50, 'https://www.flickr.com/photos/hildgrim/4567255849', 5),
-- 	('a/c unit', 'so quiet you will think its not even working', 125, 'http://static.dudeiwantthat.com/img/household/miscellaneous/geizeer-ice-cube-air-22560.jpg', 4),
-- 	('full-stack js course', '13 weeks, taught by DevMountain, its the best thing you will ever do', 10900, 'https://labnotebook.s3.amazonaws.com/2016/Apr/blog_1-1461985584185.jpg', 3),
-- 	('tea kettle', 'antique, beautiful plastic tea kettle', 750, 'http://ecx.images-amazon.com/images/I/61YO7IfxWOL._SL1490_.jpg', 4)
