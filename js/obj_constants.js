/**
 * These are the object constants file and the global variables
 */


// using var as we are sharinf consts and lets inits in the variables here
var DOM = {
  TERMINAL_CONTENT: document.querySelector("#terminal-content"),
  TERMINAL_CONTENT_HISTORY: document.querySelector(".content-history"),
  TERMINAL_INFO: document.querySelector(".terminal-content__info"),
  TERMINAL_CONTENT_USER_FEEDBACK: document.querySelector(".terminal-content__user-interaction"),
  TERMINAL_FORM: document.querySelector("#terminal-content__form"),
  TERMINAL_FORM_INPUT: document.querySelector(".terminal--input"),
}

const HTML_TEMPLATE = {
  ABOUT: `<div class="about-image-wrapper"><img src="./images/torean.jpg"></div><br/><span>Name:</span> Torean Joel - <a href="${LINKEDIN_LINK}" target="_blank">${LINKEDIN}</a><br/><span>Profession: Software Developer - <a href="${TRIXTA_LINK}" target="_blank">${TRIXTA}</a><br/><br/><u>Who am I:</u><br/><br/>I\'m ${DEVELOPER}, a Software Developer. Initially a Front-End developer that quickly transistioned my career into a Fullstack development path.<br/><br/>I worked on numerous projects personal and commercial and comfortably find myself working in the cryptocurrency world.<br/><br/>Constantly learning and upskilling myself to help make a career one I can not only look back on feeling proud, but seeing an open-source world using the tools we are building to help see organisations in a decentralised space finding success in an open-source world for everyone to better and collaborate on.<br/><br/>I also spend free time, hanging out with friends (Online friends are also friends). Gaming. Brazilian Jiu Jitsu. Solving personal technical problems and trying to catch sunshine while looking for a reason to drink less coffee (I\'m probably drinking coffee while you\'re reading this).<br/><br/><u>What I do:</u><br/><br/>Working in the blockchain space building tools to help users transition to a decentralized world using visual programming tools.`,
  HELP: 'Currently supported commands: <br/><br/> - about <br/> - contact<br/> - feed<br/> - bitbucket<br/> - clear<br/><br/>To get more informaion about the above commands, type \'ONE_OF_THE_ABOVE_COMMANDS help\' <br/> example: about help',
  NEED_PARAMETERS: 'The \'contact\' command expects parameters, check the \'help\' parameter to get help information',
}

//default dom Terminal info
const DEFAULT = {
  TERMINAL_INFO: `<span class="teminal-info-green">${AGENT}</span> <span class="teminal-info-yellow"> (${USER})</span> <span class="teminal-info-red">#</span>`,
}

// email responses
const EMAIL_MSG = {
  validationErr: {
    email: 'Invalid email format. View the command help for more info',
    msg: 'Invalid email message, make sure to add \'QUOTES\' around your message and don\'t leave blank. View command help for more info',
  },
  sending: 'sending mail...',
  success: function(user) {
    return `Thank you ${user}, you mail was successfully sent`
  },
  error: function(user, errors) {
    return `Sorry ${user}, something went wrong. <br/> ${errors}`
  }
}