/* eslint-disable no-undef */

db.questions.insert([
  {
    exam: 'lpic101',
    type: 'options',
    title: 'First questions',
    options: [
      {
        value: 'option1',
        isCorrect: false,
      },
      {
        value: 'option2',
        isCorrect: true,
      },
    ],
  },
  {
    exam: 'lpic102',
    type: 'options',
    title: 'Second questions',
    options: [
      {
        value: 'option1',
        isCorrect: true,
      },
      {
        value: 'option2',
        isCorrect: false,
      },
    ],
  },
]);
