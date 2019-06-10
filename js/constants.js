/**
 * These are the constants file and the global variables
 */

 // the default agent and user connecting
const USER = 'GUEST';
const AGENT = 'TrojanMorse.hq';

// using var as we are sharinf consts and lets inits in the variables here
var DOM = {
  TERMINAL_CONTENT: document.querySelector("#terminal-content"),
  TERMINAL_CONTENT_HISTORY: document.querySelector(".content-history"),
  TERMINAL_INFO: document.querySelector(".terminal-content__info"),
  TERMINAL_CONTENT_USER_FEEDBACK: document.querySelector(".terminal-content__user-interaction"),
  TERMINAL_FORM: document.querySelector("#terminal-content__form"),
  TERMINAL_FORM_INPUT: document.querySelector(".terminal--input"),
}

//default dom Terminal info
const DEFAULT = {
  TERMINAL_INFO:
    `${'<span class="green">' + AGENT + '</span> <span class="yellow"> (' + USER + ')</span> <span class="red">#</span>'}`,
}