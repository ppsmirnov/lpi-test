import questionControllerModule from './questionController';

describe('Question controller tests', () => {
  describe('Post tests', () => {
    it('should not allow an empty title on post', () => {
      function Question() {
        this.save = () => {};
      }

      const req = {
        body: {
          exam: 'lpix101',
        },
      };

      const res = {
        status: jest.fn(),
        send: jest.fn(),
      };

      const questionController = questionControllerModule(Question);
      questionController.post(req, res);

      // expect(res.status.mock.calls[0][0]).toBe(400);
      expect(res.send.mock.calls[0][0]).toBe('Title is required');
    });
  });
});
