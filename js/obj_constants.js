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
  ABOUT: `<div class="about-image-wrapper"><img src="./images/torean.jpg" /></div><br /><span>Name:</span> Torean Joel - <a href="${LINKEDIN_LINK}" target="_blank">${LINKEDIN}</a><br /><span>Profession: Software Developer - <a href="${TRIXTA_LINK}" target="_blank">${TRIXTA}</a><br /><br /><u>Who am I:</u><br /><br />I\'m ${DEVELOPER}, a Software Developer.<br /><br />I worked on numerous projects personal and commercial and comfortably find myself working in the visual programming world building out a plaform to help others get into development or not need to worry too much about the struggles and nuances that come with it. While making development fun for developers<br /><br />Other than that, I'm constantly learning and upskilling myself, Hiking, Fun Runs/Walks, Juijitsu and the main meat and potatoes - Chilling watching streaming services (thank the world for Twitch and Youtube)<br /><br />So i'm not much of a super hero but keep an eye on this space, I have some cool things that I will be showing as well as building out projects that hopfully will give others inspiration atleast to enjoy what they do regardless of the space and interest.<br /></span>`,
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
    return `Thank you ${user}, your mail was successfully sent`
  },
  error: function(user, errors) {
    return `Sorry ${user}, something went wrong. <br/> ${errors}`
  }
}