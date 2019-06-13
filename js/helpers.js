/**
 * These are the helper methods
 */

function launchCommand(command) {
  DOM.TERMINAL_CONTENT_HISTORY.innerHTML +=
    '<div>' + DEFAULT.TERMINAL_INFO + ' ' + command.cmd + '<p>' + command.res + '</p></div>';
}

// validation
const validation = {
  isEmailvalid: function(email) {
    // check if the email is valid
  },
  isEmpty: function(string) {
    return string === '' && true;
  }
}