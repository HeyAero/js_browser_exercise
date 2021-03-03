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
  // get child elements
  // para3.childNodes
  // to use in future
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
