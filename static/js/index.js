const events = require('./events');

function initBindings() {
  let header1 = document.getElementById('heading-1');
  console.log(header1);

  header1.addEventListener('click', events.switchColor);
  header1.addEventListener('mouseout', events.returnColor);
}

initBindings();
