const express = require('express');
const db = require('./db');
const app = require('./app');

const PORT = process.env.PORT || '3000';

app.listen(PORT, ()=>{
  console.log(`App listening on port ${PORT}`)
});
