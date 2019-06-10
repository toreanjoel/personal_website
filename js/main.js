/**
 * The main file that handles the maon logic
 */

//init sectino
if (DOM.TERMINAL_INFO.children.length === 0) {
  DOM.TERMINAL_INFO.innerHTML = DEFAULT.TERMINAL_INFO;
}

DOM.TERMINAL_FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    if(DOM.TERMINAL_FORM_INPUT.value.trim() !== '') {
      launchCommand(COMMANDS[DOM.TERMINAL_FORM_INPUT.value]);
    }
  } catch(error) {
    launchCommand({
      cmd: DOM.TERMINAL_FORM_INPUT.value,
      res: '<div><p>' + DOM.TERMINAL_FORM_INPUT.value + ': command not found</p></div>'
    });
    if(DOM.TERMINAL_FORM_INPUT.value === 'clear') {
      DOM.TERMINAL_CONTENT_HISTORY.innerHTML = '';
    }
  }
  // clear the input
  DOM.TERMINAL_FORM_INPUT.value = '';

  // scroll to bottom when adding a new item to the console
  DOM.TERMINAL_CONTENT.scrollTop = DOM.TERMINAL_CONTENT.scrollHeight;
});