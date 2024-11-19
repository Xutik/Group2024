const project = (title, techStack, author, image, link) => {
  return {
    title,
    techStack,
    author,
    image,
    link,
  }
}

export const projects = [
  project(
    'Calculator',
    ['JavaScript', 'CSS', 'HTML'],
    'Kevin Garcia Martin',
    'image link',
    'https://kevingarciamartin.github.io/calculator/',
  ),
  project('title2', ['lang3', 'lang4', 'lang5'])
]
