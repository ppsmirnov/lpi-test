import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const questionModel = new Schema({
  exam: {
    type: String,
  },
  type: {
    type: String,
  },
  title: {
    type: String,
  },
  options: {
    type: Array,
  },
});

export default mongoose.model('Question', questionModel);
