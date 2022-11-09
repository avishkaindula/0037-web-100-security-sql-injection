const express = require('express');

const db = require('../data/database');

const router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/discussion');
});

router.get('/discussion', async function (req, res) {
  let filter = '';

  if (req.query.author) {
    filter = `WHERE author = "${req.query.author}"`; // Indula"; DROP TABLE comments; SELECT * FROM comments WHERE author = "Janith
    // If we insert this query inside the find comments by author search bar, the table will be dropped.
    // This is how the attackers perform SQL injection attacks.
  }

  const query = `SELECT * FROM comments ${filter}`;

  console.log(query);

  const [comments] = await db.query(query);

  res.render('discussion', { comments: comments });
});

router.post('/discussion/comment', async function (req, res) {

  await db.query('INSERT INTO comments (author, text) VALUES (?)', [[req.body.name, req.body.comment]])

  res.redirect('/discussion');
});

module.exports = router;
