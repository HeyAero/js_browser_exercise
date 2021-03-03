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
