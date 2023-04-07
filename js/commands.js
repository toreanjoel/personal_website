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
    res: HTML_TEMPLATE.NEED_PARAMETERS,
    method: EMAIL.send,
  },
  feed: {
    cmd: 'feed',
    res: 'This is currently not avail, will be available soon once content is ready',
  },
  github: {
    cmd: 'git',
    res: 'opening GitHub repository list...',
    method: GIT.show_repos,
  },
  help: {
    cmd: 'help',
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
    res: 'To use the contact command, use the following exmaple:<br/><br/><strong>contact your@email.domain \'Your message\'</strong><br/><br/><i>Note the quotation marks around the message</i>'
  },
  feed: {
    cmd: 'feed help',
    res: 'This is currently not avail, will be available soon once content is ready',
  },
  github: {
    cmd: 'github help',
    res: 'Github repo for anything being worked on, about to contact and activity and stack'
  },
  clear: {
    cmd: 'clear',
    res: 'This will clear the terminal window history on screen'
  },
}