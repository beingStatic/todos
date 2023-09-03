import mongoose, { Schema } from 'mongoose';

const collectionSchema = new Schema({ title: String }, { timestamps: true });
const Collection =
  mongoose.models.Collection || mongoose.model('Collection', collectionSchema);

export default Collection;
