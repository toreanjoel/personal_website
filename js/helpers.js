/**
 * These are the helper methods
 */

 /**
  * 
  * @param {string} command the command string to check gainst
  * @param {array} commandParams the full string of what the user typed
  */
function launchCommand(command, commandParams) {
  if(command) {
    if(!commandParams) {
      DOM.TERMINAL_CONTENT_HISTORY.innerHTML +=
      '<div>' + DEFAULT.TERMINAL_INFO + ' ' + command.cmd + '<p>' + command.res + '</p></div>';
      // check if there is a method
      if(command.method) {
        command.method();
      }
    } else {
      command.method(commandParams);
    }
  } else {
    terminalCallbackMsg(': command not found', true);
  }
}

/**
 * 
 * @param {string} string string of what you want outputted on the terminal
 * @param {bool} isResponse if this is true, we want this to be the response with no teminal info
 */
function terminalCallbackMsg(string, isResponse = false) {
  if(!isResponse) {
    DOM.TERMINAL_CONTENT_HISTORY.innerHTML +=
    '<p>' + DEFAULT.TERMINAL_INFO + ' ' + string + '</p>';
  } else {
    DOM.TERMINAL_CONTENT_HISTORY.innerHTML +=
      '<div>' + DEFAULT.TERMINAL_INFO + '<p>' + DOM.TERMINAL_FORM_INPUT.value + ' ' + string + '</p></div>'
  }
}

/**
 * list of methods for email
 */
let EMAIL = {
  validation: {
    isEmailvalid: function(email) {
      const regexTest = /\S+@\S+\.\S+/;
      return regexTest.test(email) ||
        terminalCallbackMsg(emailMessage.validationErr.email, true);
    },
    isEmailMsgValid: function(emailMsg) {
      return emailMsg !== '' ||
        terminalCallbackMsg(emailMessage.validationErr.msg, true);
    }
  },
  send: function(details) {
    if(details) {      
      const email = details[0];
      const msg = details[1];

      if(EMAIL.validation.isEmailvalid(email) &&
        EMAIL.validation.isEmailMsgValid(msg)) {
        console.info('send mail to', email, 'with mail message', msg)
      }
    }
  }
}

/**
 * list of methods for bitbucket
 */
const BIT_BUCKET = {
  show_repos: function() {
    window.open(BITBUCKET, '_blank');
    terminalCallbackMsg('Opened Bitbucket');
  },
}