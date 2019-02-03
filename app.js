const express = require('express');
const app = express();
const db = require('./db');
const homePage = require('./home');

module.exports = app;

app.use((req, res, next)=> {
  db.getPages()
    .then( pages => {
      req.pages = pages;
      next();
    })
    .catch(next);
});

app.get('/', (req, res) => {
  const page = req.pages;
  res.redirect(`/pages/${page.id}`);
});

app.get('/pages/:id', (req, res, next) => {
  db.getContent(req.params.id)
    .then( content => res.send(homePage(content, req.pages)))
    .catch(next)
});
