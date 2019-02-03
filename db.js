const pg = require('pg');
const client = new pg.Client('postgres://localhost/acme_web');

client.connect();

const getPages = () => {
  return client.query('SELECT * FROM pages')
  .then(pages => pages.rows)
  .catch(() => 'Could not fetch pages');
};

const getContent = (id) => {
  return client.query('select a.* from (select content.id as content_id, content.name as content_name, body, page_id from content join pages on pages.id = content.page_id) as a where a.page_id = $1', [id])
  .then(content => content.rows)
  .catch('Could not get content')
};


module.exports = {
  client,
  getPages,
  getContent
}
