import express from 'express'
import mongoose from 'mongoose'

import Article from '../models/article'

const router = express.Router()

router.get('/article/:id', async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id)
    return res.json(article)
  } catch (error) {
    return res.sendStatus(403)
  }
})

router.get('/articles', async (req, res, next) => {
  try {
    const articles = await Article.find()
    return res.json(articles)
  } catch (error) {
    return res.sendStatus(403)
  }
})

export default router
