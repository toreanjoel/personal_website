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
  ABOUT: `<div class="about-image-wrapper">
    <img src="./images/torean.jpg" />
    </div><br />
    <span>Name:</span> Torean Joel - <a href="${LINKEDIN_LINK}" target="_blank">${LINKEDIN}</a><br />
    <span>Software Developer - <a href="${JOB_LINK}" target="_blank">${JOB}</a><br /><br />
      <u>Who am I:</u><br /><br />
      I\'m ${DEVELOPER}, a Senior Software Developer.<br /><br />
      <u>Main Quest:</u><br /><br />
      Currently building out tooling to help protect people from online fraud and identity theft <br /><br />
      <u>Side Quest:</u><br /><br />
      Constantly reading and upskilling on new technologies, working on projects that will help me progress and support others in their projects. See my <a href="${GITHUB_LINK}" target="_blank">${GITHUB}</a> repo for more.<br /><br />
      Chipping away at a side project: <a href="https://leafnode.app" target="_blank">leafnode.app</a> (this may or may not be up). <br /><br />
      <u>Personal Quest:</u><br /><br />
      Playing games (boardgames, online RTS and ARPG and MMOs), Supporting friends and their streams, Spending downtime with partnet. The rest is me spending time taking an interest in other tech.
    </span>`,
  HELP: 'Currently supported commands: <br/><br/> - about <br/> - contact <br/> - linkedIn <br/> - github<br/> - clear<br/><br/>To get more informaion about the above commands, type \'ONE_OF_THE_ABOVE_COMMANDS help\' <br/> example: about help'
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
    return `Thank you ${user}, your mail was successfully sent`
  },
  error: function(user, errors) {
    return `Sorry ${user}, something went wrong. <br/> ${errors} - Contact me through other platforms on the "about" page`
  }
}