/**
 * Commands file
 * 
 * You can add markup as responses and invoke methods when the user runs certain commands
 */

const COMMANDS = {
  about: {
    cmd: 'about',
    res: 'RETURN ABOUT RESPONSE - Some nice ASCII would be cool here - maybe trixta icon?'
  },
  contact: {
    /**
     * https://www.smtpjs.com/
     */
    cmd: 'contact',
    // here we need to do the validation checks and responses
    res: 'RUN METHOD THAT WILL SEND MAIL'
  },
  feed: {
    cmd: 'feed',
    res: 'show the BLOG items or invoke a method that will show the list'
  },
  bitbucket: {
    cmd: 'bitbucket',
    res: 'show the BITBUCKET items or invoke a method that will show the list'
  },
  help: {
    cmd: 'help',
    res: 'Below are a list of current supported commands: <br/><br/> - about <br/> - contact<br/> - feed<br/> - bitbucket<br/> - clear<br/><br/>To get more informaion about the above commands, type \'ONE_OF_THE_ABOVE_COMMANDS help\' to get more information regarding the command'
  },
}

const COMMAND_HELP = {
  about: {
    cmd: 'about help',
    res: 'The about page is displays a small summary about Torean and what he does, where he works ect.'
  },
  contact: {
    cmd: 'contact help',
    // here we need to do the validation checks and responses
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