export default (
  linkedInLink: string,
  githubLink: string,
  spotifyLink: string,
  mail: string
) => [
  {
    link: `mailto:${mail}`,
    name: 'mail',
    icon: 'envelope',
    target: '_self',
  },

  {
    link: linkedInLink,
    name: 'linkedin',
  },

  {
    link: githubLink,
    name: 'github',
  },

  {
    link: spotifyLink,
    name: 'spotify',
  },
]
