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
 * history object tool containing all items regarding app history
 */
let HISTORY = {
  list: [],
  create: function(historyItem) {
    console.info('setting history with', historyItem)
  },
  getPrev: function() {
    console.info('getting prev item in history')
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
        terminalCallbackMsg(EMAIL_MSG.validationErr.email, true);
    },
    isEmailMsgValid: function(emailMsg) {
      return emailMsg !== '' &&
        ((emailMsg.charAt(0) === "'" || emailMsg.charAt(0) === "\"") &&
        (emailMsg.charAt(emailMsg.length-1) === "'" || emailMsg.charAt(emailMsg.length-1) === "\"")) ||
        terminalCallbackMsg(EMAIL_MSG.validationErr.msg, true);
    }
  },
  send: function(details) {
    if(details) {      
      const email = details[0];
      // const msg = details.splice(1,).join(' ').replace(/["']/g, "");
      const msg = details.splice(1,).join(' ');
      // here we replace the first and last character of the message - the quotes
      
      if(EMAIL.validation.isEmailvalid(email) &&
      EMAIL.validation.isEmailMsgValid(msg)) {
        const removedQuotes = msg.slice(1,-1);
        // sending mail message...
        terminalCallbackMsg(EMAIL_MSG.sending, false);
        // This needs to change to use leaf node
        console.log("Add API call to use leafnode for this")
        return "Please visit 'about' page command to find links to contact me"
      }
    }
  }
}

// TODO: Need to look into making this more abstract and grouped, they dont need to be separate

/**
 * list of methods for git
 */
const GIT = {
  show_repos: function() {
    window.open(GITHUB_LINK, '_blank');
    terminalCallbackMsg('Opened GitHub');
  },
}

/**
 * list of methods for SOCIAL
 */
const SOCIAL = {
  linked_in: function() {
    window.open(LINKEDIN_LINK, '_blank');
    terminalCallbackMsg('Opened LinkedIn');
  },
}