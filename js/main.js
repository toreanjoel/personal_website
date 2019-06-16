/**
 * The main file that handles the maon logic
 */

//init sectino
if (DOM.TERMINAL_INFO.children.length === 0) {
  DOM.TERMINAL_INFO.innerHTML = DEFAULT.TERMINAL_INFO;
}

DOM.TERMINAL_FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  if(DOM.TERMINAL_FORM_INPUT.value.trim() !== '') {
    // here we need to check if they are looking for help or invoking
    const commandTyped = DOM.TERMINAL_FORM_INPUT.value.toLowerCase();
    const commandArray = commandTyped.split(" ");
    if(commandArray.length > 1) {
      if(commandArray[1] === 'help') {
        // this get the help content for the help sections
        launchCommand(COMMAND_HELP[commandArray[0]]);
      } else {
        // check if its one of the other commands that has paramaters
        launchCommand(COMMANDS[commandArray[0]], commandArray.splice(1,));
      }
    } else {
      launchCommand(COMMANDS[commandTyped]);
    }
  }
  

  if(DOM.TERMINAL_FORM_INPUT.value === 'clear') {
    DOM.TERMINAL_CONTENT_HISTORY.innerHTML = '';
  }

  // clear the input
  DOM.TERMINAL_FORM_INPUT.value = '';

  // scroll to bottom when adding a new item to the console
  DOM.TERMINAL_CONTENT.scrollTop = DOM.TERMINAL_CONTENT.scrollHeight;
});