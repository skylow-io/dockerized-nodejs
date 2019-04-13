import mongoose, { Schema } from 'mongoose'

/**
 * Article Schema
 */

const ArticleSchema = new Schema({
  title: { type: String, default: '', trim: true, maxlength: 400 },
  body: { type: String, default: '', trim: true, maxlength: 1000 }
})

/**
 * Validation
 */

ArticleSchema.path('title').required(true, 'Article title cannot be blank')
ArticleSchema.path('body').required(true, 'Article body cannot be blank')

/**
 * Pre-remove hook
 */

ArticleSchema.pre('remove', next => {
  // do something on remove
  next()
})

/**
 * Methods
 */

ArticleSchema.methods = {
  // add custom methods
}

ArticleSchema.statics = {
  load: function(_id: string) {
    return this.findOne({ _id }).exec()
  }
}

export default mongoose.model('Article', ArticleSchema)
