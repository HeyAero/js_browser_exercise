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

module.exports = {
  switchColor,
  returnColor,
};

},{}],2:[function(require,module,exports){
const events = require('./events');

function initBindings() {
  let header1 = document.getElementById('heading-1');
  console.log(header1);

  header1.addEventListener('click', events.switchColor);
  header1.addEventListener('mouseout', events.returnColor);
}

initBindings();

},{"./events":1}]},{},[2]);
