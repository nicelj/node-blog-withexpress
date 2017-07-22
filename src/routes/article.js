/**
 * Created by Administrator on 2017/7/8.
 */
import express from 'express';
const router = express.Router();

import Article from '../controller/articles/article';

router.put('/', Article.writeArticle);
router.get('/', Article.getArticles);
router.get('/:id', Article.getArticleById);

export default router;