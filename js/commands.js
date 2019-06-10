/**
 * Commands file
 */

const COMMANDS = {
  about: {
    cmd: 'about',
    res: 'About ȚŖÖĴÄŅ_M[0]ŖŚË comes here'
  },
  contact: {
    cmd: 'contact',
    res: 'Send me a message using the following format: <br />contact "youremail@address.here" "your message here"'
  },
  ping: {
    cmd: 'ping',
    res: 'pong'
  },
  whoami: {
    cmd: 'whoami',
    res: 'I am: ' + navigator.userAgent
  },
  help: {
    cmd: 'help',
    res: 'Below are a list of current supported commands: <br/> about - information about me <br/> contact - send me a mail<br/> ping - check that the terminal is working<br/> whoami - get your browser info'
  },
}