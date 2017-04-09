import fs from 'fs';
import { jsdom } from 'jsdom';

describe('First test', () => {
  test('should pass', () => {
    expect(true).toBe(true); // eslint-disable-line
  });
});

describe('index.html', () => {
  test('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (err, window) => {
      const h1 = window.document.querySelector('h1');
      expect(h1.innerHTML).toBe('Hello world'); // eslint-disable-line
      done();
      window.close();
    });
  });
});
