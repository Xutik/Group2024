// *to add to main JS:*

// import { createTeamSection } from './js/team.js';

// document.addEventListener('DOMContentLoaded', () => {
//   const main = document.querySelector('main') || document.body;
//   const team = createTeamSection();
//   main.appendChild(teamSection);
// });



function teamMember(name, email, github) {
  return {
    name,
    email,
    github,
    photo
  };
}

export const team = [
    teamMember('Kevin Garcia Martin', 'kevin.garcia@hyperisland.se', 'https://github.com/kevingarciamartin',"photo-path"),
    teamMember('Kiattisak Jod Wongphayak', 'kiattisak.wongphayak@hyperisland.se', 'https://github.com/MaybeJod',"photo-path"),
    teamMember('Klejda Mamaj', 'klejda.mamaj@hyperisland.se', 'https://github.com/klejda59',"photo-path"),
    teamMember('Kseniia Prakhova', 'kseniia.prakhova@hyperisland.se', 'https://github.com/Xutik',"photo-path")
]

export function createTeamSection() {
  const teamSection = document.createElement('section');
  teamSection.classList.add("Forkkkk", "FED", "team");
  const descriptionContaine = document.createElement('div')
  const title = document.createElement('h1');
  title.textContent = "We're a team of 4Ks from FED2026 HYper Island. We have experience in creating Odin Projects using our knowledge in HTML, CSS and Javascript.";

  descriptionContaine.appendChild(title);
  teamSection.appendChild(descriptionContaine);

  const teamMembersContainer = document.createElement('div');
  teamMembersContainer.classList.add('team-members');
  teamSection.appendChild(teamMembersContainer);

  renderTeamMembers(teamMembersContainer);

  return teamSection;
}

function createTeamMemberCard(member) {
  return `
    <div class="team-member-card">
      <img src="${member.photo}" alt="${member.name}" class="team-member-photo">
      <h3>${member.name}</h3>
      <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
      <p>GitHub: <a href="${member.github}" target="_blank">${member.github}</a></p>
    </div>
  `;
}

function renderTeamMembers(container) {
  container.innerHTML = team.map(createTeamMemberCard).join('');
}
