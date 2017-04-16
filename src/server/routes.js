/* eslint-disable no-param-reassign */

import express from 'express';
import mongoose from 'mongoose';

import Question from './models/questionModel';

const apiRouter = express.Router();

mongoose.connect('mongodb://localhost/lpiAPI');

apiRouter.route('/questions')
  .post((req, res) => {
    const question = new Question(req.body);

    question.save();
    res.status(201).send(question);
  })
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

apiRouter.use('/questions/:questionId', (req, res, next) => {
  Question.findById(req.params.questionId, (err, question) => { //eslint-disable-line
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (question) {
      req.question = question;
      next();
      return;
    }
    res.status(404).send('no question found');
  });
});

apiRouter.route('/questions/:questionId')
  .get((req, res) => {
    res.json(req.question);
  })
  .put((req, res) => {
    req.question.exam = req.body.exam;
    req.question.type = req.body.type;
    req.question.title = req.body.title;
    req.question.options = req.body.options;

    req.question.save((err) => { //eslint-disable-line
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(req.question);
    });
  })
  .patch((req, res) => {
    Object.keys(req.body).map((key) => {
      if (key !== '_id') {
        req.question[key] = req.body[key];
      }
      return key;
    });

    req.question.save((err) => { //eslint-disable-line
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(req.question);
    });
  })
  .delete((req, res) => {
    req.question.remove((err) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(204).send('Removed');
    });
  });

export default apiRouter;
