import kevin from '../assets/svg/kevin.svg'
import jod from '../assets/svg/jod.svg'
import klejda from '../assets/svg/klejda.svg'
import kseniia from '../assets/svg/kseniia.svg'

function teamMember(name, description, email, github, avatar) {
  return {
    name,
    description,
    email,
    github,
    avatar
  }
}

export const team = [
  teamMember(
    'Kevin Garcia Martin',
    'Beerio Kart champ',
    'kevin.garcia@hyperisland.se',
    'https://github.com/kevingarciamartin',
    kevin
  ),
  teamMember(
    'Kiattisak Jod Wongphayak',
    '3rd fastest racist',
    'kiattisak.wongphayak@hyperisland.se',
    'https://github.com/MaybeJod',
    jod
  ),
  teamMember(
    'Klejda Mamaj',
    'Footer guru',
    'klejda.mamaj@hyperisland.se',
    'https://github.com/klejda59',
    klejda
  ),
  teamMember(
    'Kseniia Prakhova',
    'Team player',
    'kseniia.prakhova@hyperisland.se',
    'https://github.com/Xutik',
    kseniia
  )
]

export default function createTeamSection() {
  const teamSection = document.querySelector('#team')
  const descriptionContainer = document.createElement('div')
  const title = document.createElement('h2')
  const about = document.createElement('p')
  title.textContent = 'Team'
  // about.textContent =
  //   "We're a team of 4Ks from FED2026 Hyper Island. We have experience in creating Odin Projects using our knowledge in HTML, CSS and Javascript."

  descriptionContainer.appendChild(title)
  descriptionContainer.appendChild(about)
  teamSection.appendChild(descriptionContainer)

  const teamMembersContainer = document.createElement('div')
  teamMembersContainer.classList.add('grid-container')
  teamMembersContainer.classList.add('grid-container-team')
  teamSection.appendChild(teamMembersContainer)
  about.classList.add('about')

  renderTeamMembers(teamMembersContainer)
}

function createTeamMemberCard(member) {
  return `
    <div class="card">
      <div class="card-text">
        <div class="card-title">
          <h3>${member.name}</h3>
        </div>
        <p class="card-tech-stack">${member.description}</p>
        <div class="card-link">
          <p class="card-author">
            <a href="mailto:${member.email}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>
            </a>
          </p>
          <p class="card-author">
            <a href="${member.github}" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
            </a>
          </p>
        </div>
      </div>
      <img src="${member.avatar}" alt="avatar">
    </div>
  `
}

function renderTeamMembers(container) {
  container.innerHTML = team.map(createTeamMemberCard).join('')
}
