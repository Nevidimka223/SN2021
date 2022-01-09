const router = require('express').Router();
const {getComments, getComment, createComment, updateComment, deleteComment} = require('../controllers/comments');

router.get('/', getComments);

router.get('/:id', getComment);

router.post('/', createComment);

router.put('/:id', updateComment);

router.delete('/:id', deleteComment);

module.exports = router;