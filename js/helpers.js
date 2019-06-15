/**
 * These are the helper methods
 */

 /**
  * 
  * @param {string} command the command string to check gainst
  * @param {array} commandParams the full string of what the user typed
  */
function launchCommand(command, commandParams) {
  console.info(command, commandParams)
  if(command) {
    if(!commandParams) {
      DOM.TERMINAL_CONTENT_HISTORY.innerHTML +=
      '<div>' + DEFAULT.TERMINAL_INFO + ' ' + command.cmd + '<p>' + command.res + '</p></div>';
    } else {
      command.method(commandParams);
    }
  } else {
    DOM.TERMINAL_CONTENT_HISTORY.innerHTML += '<div>' + DEFAULT.TERMINAL_INFO + '<p>' + DOM.TERMINAL_FORM_INPUT.value + ': command not found</p></div>'
  }
}

/**
 * Helper object containing all the methods to run the email flow
 */
const EMAIL = {
  validation: {
    isEmailvalid: function(email) {
      const regexTest = /\S+@\S+\.\S+/;
      return regexTest.test(email)
    },
    isEmailMsgValid: function(emailMsg) {
      return emailMsg !== '' && true;
    }
  },
  send: function(details) {
    const email = details[0];
    const message = details[1];
    console.info('email address', email, 'messsage', message, 'passed details', details);
    DOM.TERMINAL_CONTENT_HISTORY.innerHTML +=
    '<p>' + DEFAULT.TERMINAL_INFO + ' Sending mail... (user: ' + email + ', message: ' + message + ')</p>';
    // if(this.validation.isEmailvalid(user) && this.validation.isEmailMsgValid(message)) {
    //   console.info('send mail to', user, 'with mail message', message)
    // } else {
    //   // here we tell the user what is wrong
    //   console.info('make sure the email address is valid and the there is a message to send');
    // }
  }
}