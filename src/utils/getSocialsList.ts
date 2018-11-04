export default (
  linkedInLink: string,
  githubLink: string,
  vimeoLink: string,
  instagramLink: string,
  twitterLink: string,
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
    link: vimeoLink,
    name: 'vimeo',
  },

  {
    link: instagramLink,
    name: 'instagram',
  },

  {
    link: twitterLink,
    name: 'twitter',
  },

  {
    link: spotifyLink,
    name: 'spotify',
  },
]
