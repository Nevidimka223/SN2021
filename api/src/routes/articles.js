const router = require('express').Router();
const {
  getArticle,
  getArticles,
  getArticleComments,
  getArticleLikes,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articles');

router.get('/', getArticles);

router.get('/:id', getArticle);

router.get('/:articleid/comments', getArticleComments);

router.get('/:articleid/likes', getArticleLikes);

router.post('/', createArticle);

router.put('/:id', updateArticle);

router.delete('/:id', deleteArticle);

module.exports = router;
