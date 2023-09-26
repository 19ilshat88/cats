const nameCats = [
  'Кот с усами',
  'Кошка с колпаком',
  'Кот с тыквой',
  'Кошка-балерина'
]

const imageCats = [
  'images/cats/01.png',
  'images/cats/02.png',
  'images/cats/03.png',
  'images/cats/04.png',
]

for(let i = 0; i < nameCats.length; i++) {
  const dataNameCats = document.createTextNode(nameCats[i]);
  const textCats = document.getElementById(`name-cat-${i+1}`);
  textCats.appendChild(dataNameCats);
}

const imagePaths = document.querySelectorAll('.thumb img')

for(let i = 0; i < imagePaths.length; i++) {
  imagePaths[i].src = imageCats[i];
  imagePaths[i].alt = nameCats[i];
}


