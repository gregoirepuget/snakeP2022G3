let snake, posX, posY, dir, tail, tailTab, diamond, diamondPosX, diamondPosY, diamondPenality, penality, score, scoreValue

init()
function init(){

  //initialiser penality
  penality = 6
  // initialiser scoreValue à 0;
  scoreValue = 0
  // initialiser la direction de départ dir.
  dir =1
  // initiliser tailTab comme un tableau
  tailTab = []
  // creer une nouvelle balise div et l'assigner à snake
  snake = document.createElement('div')

  // lui attribuer l'id snake
  snake.setAttribute('id', 'snake')

  // générer aléatoirement une pos sur X et Y
  posX = Math.floor(Math.random() * window.innerWidth / 10) * 10
  posY = Math.floor(Math.random() * window.innerHeight / 10) * 10

  // Lui assigner cette position sur X et sur Y
  displaySnake()

  // afficher dans le dom la balise snake.
  document.querySelector('body').appendChild(snake)


  generateDiamond()

  
  // creer une nouvelle balise div et l'assigner à tail
  tail = document.createElement('div')

  // lui attribuer l'id tail
  tail.setAttribute('id', 'tail')

  // afficher dans le dom la balise tail.
  document.querySelector('body').appendChild(tail)

  // creer une nouvelle balise et l'assigner à score.
  score = document.createElement('div')

  // lui attribuer l'id score.
  score.setAttribute('id', 'score')
  // la preremplir de la valeur de scoreValue
  score.innerHTML = scoreValue
  // afficher la balise dans le dom
  document.querySelector('body').appendChild(score)

  //lancer la partie
  // game()
}
function generateDiamond() {
  // creer une nouvelle balise div et l'assigner à diamond
  diamond = document.createElement('div')

  // lui attribuer l'id diamond
  diamond.setAttribute('id', 'diamond')

  // générer aléatoirement une pos sur X et Y
  diamondPosX = Math.floor(Math.random() * window.innerWidth / 10) * 10
  diamondPosY = Math.floor(Math.random() * window.innerHeight / 10) * 10

  // générer aléatoirement un nombre pour diamondpenality
  diamondPenality = Math.floor(Math.random() * 20) + 1

  // Lui assigner cette position sur X et sur Y
  diamond.style.top = diamondPosY + "px"
  diamond.style.left = diamondPosX + "px"
  // afficher dans le dom la balise diamond.
  document.querySelector('body').appendChild(diamond)
}
function displaySnake(){
  snake.style.top = posY + "px"
  snake.style.left = posX + "px"
}