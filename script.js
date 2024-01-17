//your JS code here. If required.
  function focusNext(currentInput) {
            if (currentInput.value.length === 1) {
                // Move to the next input field
                const nextInput = currentInput.nextElementSibling;
                if (nextInput) {
                    nextInput.focus();
                }
            } else if (currentInput.value.length === 0) {
                // Move to the previous input field on backspace
                const prevInput = currentInput.previousElementSibling;
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }
