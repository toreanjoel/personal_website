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
    /**
     * https://www.smtpjs.com/
     */
    cmd: 'contact',
    res: HTML_TEMPLATE.NEED_PARAMETERS,
    method: EMAIL.send,
  },
  feed: {
    cmd: 'feed',
    res: 'This is currently not avail, will be available soon once content is ready',
  },
  bitbucket: {
    cmd: 'bitbucket',
    res: 'opening BitBucket repository list...',
    method: BIT_BUCKET.show_repos,
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
    res: 'To use the contact command, use the following exmaple:<br/><br/><strong>contact your@email.domain \'Your message comes here\'</strong><br/><br/><i>Note the quotation marks around the message</i>'
  },
  feed: {
    cmd: 'feed help',
    res: 'Feed command will invoke the method that will show you you the list of content Torean is talking about. Essentially his blog or space to get things off his mind'
  },
  bitbucket: {
    cmd: 'bitbucket help',
    res: 'This will list the private and things he has worked on in the past and commited to BitBucket'
  },
  clear: {
    cmd: 'clear',
    res: 'This will clear the terminal window history on screen'
  },
}