export default function (Question) {
  const post = (req, res) => {
    const question = new Question(req.body);

    if (!req.body.title) {
      res.status(400);
      res.send('Title is required');
      return;
    }

    question.save();
    res.status(201);
    res.send(question);
  };

  const get = (req, res) => {
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
  };

  return {
    post,
    get,
  };
}
