CREATE TABLE pages (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(255),
  is_home_page BOOLEAN
);

CREATE TABLE content (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(255),
  body VARCHAR(255),
  page_id INTEGER REFERENCES pages(id)
);
