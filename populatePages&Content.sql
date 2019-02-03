INSERT INTO pages (name, is_home_page) VALUES ('Home', true);
INSERT INTO pages (name, is_home_page) VALUES ('Employees', false);
INSERT INTO pages (name, is_home_page) VALUES ('Contact', false);

INSERT INTO content (name, body, page_id) VALUES ('Welcome to the Home Page', 'So looking forward to having you browse our site', (select id from pages where name = 'Home'));

INSERT INTO content (name, body, page_id) VALUES ('Moe', 'Moe is our CEO!!!', (select id from pages where name = 'Employees'));
INSERT INTO content (name, body, page_id) VALUES ('Larry', 'Larry is our CTO!!!', (select id from pages where name = 'Employees'));
INSERT INTO content (name, body, page_id) VALUES ('Curly', 'Curly is our COO!!!', (select id from pages where name = 'Employees'));

INSERT INTO content (name, body, page_id) VALUES ('Phone', 'calls us 212-555-1212', (select id from pages where name = 'Contact'));
INSERT INTO content (name, body, page_id) VALUES ('Fax', 'fax us 212-555-1212', (select id from pages where name = 'Contact'));
