/**
 * Commands file
 * 
 * You can add markup as responses and invoke methods when the user runs certain commands
 */

const COMMANDS = {
  about: {
    cmd: 'about',
    res: HTML_TEMPLATE.ABOUT,
  },
  contact: {
    cmd: 'contact',
    res: `This is disabled for now but feel free to contact through <a href="${LINKEDIN_LINK}" target="_blank">${LINKEDIN}</a> or <a href="${GITHUB_LINK}" target="_blank">${GITHUB}</a>`,
    // method: EMAIL.send,
  },
  // blog: {
  //   cmd: 'blog',
  //   res: 'opening blog...',
  //   method: BLOG.root,
  // },
  linkedin: {
    cmd: 'linkedIn',
    res: 'opening LinkedIn...',
    method: SOCIAL.linked_in,
  },
  github: {
    cmd: 'git',
    res: 'opening GitHub repository list...',
    method: GIT.show_repos,
  },
  git: {
    cmd: 'git',
    res: 'opening GitHub repository list...',
    method: GIT.show_repos,
  },
  help: {
    cmd: 'help',
    res: HTML_TEMPLATE.HELP,
  },
  ls: {
    cmd: 'ls',
    res: HTML_TEMPLATE.HELP,
  },
}

/**
 * These below need to use the constants
 */
const COMMAND_HELP = {
  about: {
    cmd: 'about help',
    res: 'The about command is displays a small summary about Torean and what he does, where he works ect.'
  },
  contact: {
    cmd: 'contact help',
    res: 'This is disabled but feel free to contact through <a href="${LINKEDIN_LINK}" target="_blank">${LINKEDIN}</a> or <a href="${GITHUB_LINK}" target="_blank">${GITHUB}</a>'
  },
  linkedIn: {
    cmd: 'linkedIn help',
    res: 'LinkedIn profile and current work and professional history'
  },
  github: {
    cmd: 'github help',
    res: 'Github repo for anything being worked on.'
  },
  git: {
    cmd: 'git help',
    res: 'Github repo for anything being worked on.'
  },
  clear: {
    cmd: 'clear',
    res: 'This will clear the terminal window history on screen.'
  },
}