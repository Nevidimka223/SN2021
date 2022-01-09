const router = require('express').Router();
const {
  getLike,
  getLikes,
  createLike,
  deleteLike,
} = require('../controllers/likes');

router.get('/', getLikes);

router.get('/:id', getLike);

router.post('/', createLike);

router.delete('/:id', deleteLike);

module.exports = router;
