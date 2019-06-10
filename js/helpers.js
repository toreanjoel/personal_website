/**
 * These are the helper methods
 */

function launchCommand(command) {
  DOM.TERMINAL_CONTENT_HISTORY.innerHTML +=
    '<div>' + DEFAULT.TERMINAL_INFO + ' ' + command.cmd + '<p>' + command.res + '</p></div>';
}