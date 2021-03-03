const events = require('./events');

function initBindings() {
  let header1 = document.getElementById('heading-1');
  let heading2 = document.getElementById('heading-2');
  let nav1 = document.getElementById('nav-1');
  let nav2 = document.getElementById('nav-2');
  let nav3 = document.getElementById('nav-3');
  console.log(header1);

  header1.addEventListener('click', events.switchColor);
  header1.addEventListener('mouseout', events.returnColor);

  heading2.addEventListener('mouseover', events.changeWords);

  document.addEventListener('keydown', events.addParagraph);

  nav1.addEventListener('click', () => events.changeStyling('nav-1'));
  nav2.addEventListener('click', () => events.changeStyling('nav-2'));
  nav3.addEventListener('click', () => events.changeStyling('nav-3'));
}

initBindings();
