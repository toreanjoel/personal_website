/**
 * Commands file
 */

const COMMANDS = {
  presentation: {
    cmd: 'presentation',
    res: 'This will contain method to show content'
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
    res: 'Below are a list of current supported commands: <br/> presentation - Random data <br/> presentation<br/> test<br/> test<br/> test<br/> test'
  },
  visitors : { cmd: 'visitors', res: '<span class="blue">2626</span> visites'},
  hello: { cmd: 'hello', res: 'HI' },
  date: { cmd: 'date', res: 'current date'}
}