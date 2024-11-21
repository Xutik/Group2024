function teamMember(name, email, github) {
  return {
    name,
    email,
    github
  }
}

export const team = [
  teamMember(
    'Kevin Garcia Martin',
    'kevin.garcia@hyperisland.se',
    'https://github.com/kevingarciamartin'
  ),
  teamMember(
    'Kiattisak Jod Wongphayak',
    'kiattisak.wongphayak@hyperisland.se',
    'https://github.com/MaybeJod'
  ),
  teamMember(
    'Klejda Mamaj',
    'klejda.mamaj@hyperisland.se',
    'https://github.com/klejda59'
  ),
  teamMember(
    'Kseniia Prakhova',
    'kseniia.prakhova@hyperisland.se',
    'https://github.com/Xutik'
  )
]

export default function createTeamSection() {
  const teamSection = document.querySelector('#team')
  const descriptionContainer = document.createElement('div')
  const title = document.createElement('h2')
  const about = document.createElement('p')
  title.textContent = 'Team'
  about.textContent =
    "We're a team of 4Ks from FED2026 Hyper Island. We have experience in creating Odin Projects using our knowledge in HTML, CSS and Javascript."

  descriptionContainer.appendChild(title)
  descriptionContainer.appendChild(about)
  teamSection.appendChild(descriptionContainer)

  const teamMembersContainer = document.createElement('div')
  teamMembersContainer.classList.add('grid-container')
  teamMembersContainer.classList.add('grid-container-team')
  teamSection.appendChild(teamMembersContainer)

  renderTeamMembers(teamMembersContainer)
}

function createTeamMemberCard(member) {
  return `
    <div class="card">
    <div class="card-text">
        <div class="card-title">
          <h3>${member.name}</h3>
        </div>

        <p class="card-tech-stack">Email: <a href="mailto:${member.email}">${member.email}</a></p>
        <div class="card-link">
          <p class="card-author">GitHub: <a href="${member.github}" target="_blank">${member.github}</a></p>
        </div>
      </div>
    </div>
  `
}

function renderTeamMembers(container) {
  container.innerHTML = team.map(createTeamMemberCard).join('')
}
