(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function switchColor() {
  console.log('Switching Color');
  let main = document.querySelector('main');
  main.style.backgroundColor = 'green';
}

function returnColor() {
  console.log('Returning Color');
  let main = document.querySelector('main');
  main.style.backgroundColor = 'white';
}

function changeWords() {
  console.log('Changing Text');
  let heading2 = document.getElementById('heading-2');
  heading2.textContent = 'Hello there!';
}

function addParagraph(e) {
  let main = document.querySelector('main');
  let para = document.createElement('p');
  let count = document.querySelectorAll('p');
  para.id = `para-${count.length + 1}`;
  para.textContent = e.key;
  main.appendChild(para);
}

function changeStyling(nav) {
  let para1 = document.getElementById('para-1');
  let para2 = document.getElementById('para-2');
  let para3 = document.getElementById('para-3');
  if (nav === 'nav-1') {
    para1.style.fontSize = '2rem';
    para1.style.fontWeight = 'bold';
  } else if (nav === 'nav-2') {
    para2.style.fontSize = '2rem';
    para2.style.fontWeight = 'bold';
  } else {
    para3.style.fontSize = '2rem';
    para3.style.fontWeight = 'bold';
  }
}

module.exports = {
  switchColor,
  returnColor,
  changeWords,
  addParagraph,
  changeStyling,
};

},{}],2:[function(require,module,exports){
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

},{"./events":1}]},{},[2]);
