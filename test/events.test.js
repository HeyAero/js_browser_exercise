const events = require('../static/js/events');

describe('event functions', () => {
  describe('heading click check', () => {
    beforeEach(() => {
      document.documentElement.innerHTML = '<main><h1>Click me</h1></main>';
      main = document.querySelector('main');
      h1 = document.querySelector('h1');
    });
    test('change color of background when h1 tag is clicked', () => {
      click = true;
      expect(events.switchColor(click));
    });
  });

  describe('hover listener', () => {
    test('create greeting when h2 tag is hovered', () => {});
  });

  describe('create listener', () => {
    test('create p element when use types letter into webpage', () => {});
  });

  describe('click listener', () => {
    test('styling should change to bold and font size should increase when nav item clicked', () => {});
  });
});
