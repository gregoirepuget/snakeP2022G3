let snake, posX, posY, dir, tail, tailTab, diamond, diamondPosX, diamondPosY, diamondPenality, penality, score, scoreValue

init()
function init(){

  //initialiser penality
  penality = 20
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
  game()

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

function game(){
  let gamePlay = setInterval(function(){

  let oldPosX = posX
  let oldPosY = posY
    // deplacer le snake en fonction de la direction
    if (dir==0){
      posY -= 10
    }
    else if (dir==1){
      posX += 10
    }
    else if (dir==2){
      posY += 10
    }
    else {
      posX -= 10
    }
    displaySnake()

    // gérer la queue du snake
    manageTail(oldPosX, oldPosY)

    // gérer la position de la tete du snake par rapport au diamant.
    manageDiamond()

  },40);
}

window.addEventListener(
  'keypress',
  function(e){
    if (e.keyCode==122){
      dir=0
    }
    else if (e.keyCode==100){
      dir=1
    }
    else if (e.keyCode==115){
      dir=2
    }
    else if (e.keyCode==113){
      dir=3
    }
  }
)


function manageTail(oldPosX, oldPosY){
  // creer un nouvelle div et la stocker dans une nouvelle variable
  let tailElement = document.createElement('div')
  // récupérer l'ancienne posX et posY de la tete et l'assigner à cette div.
  tailElement.style.top = oldPosY + 'px'
  tailElement.style.left = oldPosX + 'px'
  // afficher cette div dans tail
  tail.appendChild(tailElement)

  // ajouter la nouvelle position à la fin du tableau JS tabTail
  tailTab.push(new Array(oldPosX, oldPosY))

  // si penality est supérieur à 0
  if (penality > 0) {
    penality--
  }
  else{
    tail.removeChild(document.querySelector('#tail div:first-child'))
    tailTab.shift();
  }
    // on enleve 1 à penality
  // sinon
    // on enleve la premiere div dans tail

    // on enleve le premier élement dans le tableau tabTail avec .shift()
}

function manageDiamond(){
  // si la tete du snake est sur le diamant
  if (posX == diamondPosX && posY == diamondPosY){
    // supprimer le diamant
    document.querySelector("body").removeChild(diamond)
    // augmenter penality de la valeur du diamant.
    penality += diamondPenality
    scoreValue += diamondPenality
    score.innerHTML = scoreValue
    // générer un nouveau diamant
    generateDiamond()
  }
}
