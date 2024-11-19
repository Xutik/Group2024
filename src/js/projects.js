import calculatorKGM from '../assets/img/calculator-kgm.PNG'
import calculatorKJW from '../assets/img/calculator-kjw.png'
import calculatorXutik from '../assets/img/calculator-xutik.jpg'
import etchASketchKJW from '../assets/img/etch-a-sketch-kjw.png'
import restaurantKGM from '../assets/img/restaurant-kgm.PNG'
import restaurantKlejda from '../assets/img/restaurant-klej.png'
import tictactoeKlejda from '../assets/img/tictactoe-klej.png'
import tictactoeXutik from '../assets/img/tictactoe-xutik.jpg'

const project = (title, techStack, author, image, link) => {
  return {
    title,
    techStack,
    author,
    image,
    link
  }
}

const projects = [
  project(
    'Calculator',
    ['JavaScript', 'CSS', 'HTML'],
    'Kevin Garcia Martin',
    calculatorKGM,
    'https://kevingarciamartin.github.io/calculator/'
  ),
  project(
    'Restaurant',
    ['Webpack', 'JavaScript', 'CSS', 'HTML'],
    'Kevin Garcia Martin',
    restaurantKGM,
    'https://kevingarciamartin.github.io/restaurant-page/'
  ),
  project(
    'Etch-A-Sketch',
    ['JavaScript', 'CSS', 'HTML'],
    'Kiattisak Jod Wongphayak',
    etchASketchKJW,
    'https://maybejod.github.io/ODIN-etch-a-sketch/'
  ),
  project(
    'Calculator',
    ['JavaScript', 'CSS', 'HTML'],
    'Kiattisak Jod Wongphayak',
    calculatorKJW,
    'https://maybejod.github.io/ODIN-calculator/'
  ),
  project(
    'Tic-Tac-Toe',
    ['JavaScript', 'CSS', 'HTML'],
    'Klejda Mamaj',
    tictactoeKlejda,
    'https://github.com/klejda59/tictactoe.git'
  ),
  project(
    'Restaurant',
    ['Webpack', 'JavaScript', 'CSS', 'HTML'],
    'Klejda Mamaj',
    restaurantKlejda,
    'https://github.com/klejda59/restaurant-page.git'
  ),
  project(
    'Calculator',
    ['JavaScript', 'CSS', 'HTML'],
    'Kseniia Prakhova',
    calculatorXutik,
    'https://xutik.github.io/calculator/'
  ),
  project(
    'Tic-Tac-Toe',
    ['JavaScript', 'CSS', 'HTML'],
    'Kseniia Prakhova',
    tictactoeXutik,
    'https://xutik.github.io/TicTacToe/'
  )
]

export default function renderProjects() {
  const projectsSection = document.querySelector('#projects')
  const projectsSectionTitle = document.createElement('h2')
  const gridContainer = document.createElement('div')

  gridContainer.classList.add('grid-container')

  projectsSectionTitle.textcontent = 'Projects'

  projectsSection.appendChild(projectsSectionTitle)
  projectsSection.appendChild(gridContainer)

  projects.forEach((project) => {
    const card = document.createElement('article')

    card.classList.add('card')

    card.innerHTML = `
      <img class="card-img" src="${project.image}" alt="project image">
      <div class="card-text">
        <div class="card-title">
          <h3>${project.title}</h3>
          <div class="card-link">
            <a href="${project.link}" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            </a>
          </div>
        </div>
        <p class="card-author">${project.author}</p>
        <p class="card-tech-stack">${project.techStack.join(', ')}</p>
      </div>
    `

    gridContainer.appendChild(card)
  })
}
