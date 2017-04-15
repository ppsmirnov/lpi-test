import express from 'express';
import mongoose from 'mongoose';

import Question from './models/questionModel';

const apiRouter = express.Router();

mongoose.connect('mongodb://localhost/lpiAPI');

apiRouter.get('/hello', (req, res) => {
  res.end('Hello world!');
});

apiRouter.route('/questions')
  .get((req, res) => {
    const query = {};

    if (req.query.exam) {
      query.exam = req.query.exam;
    }

    Question.find(query, (err, questions) => { //eslint-disable-line
      if (err) {
        res.status(500).send(err);
      }
      res.json(questions);
    });
  });

apiRouter.route('/questions/:questionId').get((req, res) => {
  Question.findById(req.params.questionId, (err, question) => { //eslint-disable-line
    if (err) {
      res.status(500).send(err);
    }
    res.json(question);
  });
});

export default apiRouter;
