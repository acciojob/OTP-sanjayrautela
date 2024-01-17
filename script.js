 function focusNext(currentInput, nextIndex) {
            if (currentInput.value.length === 1) {
                // Move to the next input field
                const nextInput = document.getElementsByClassName('code')[nextIndex];
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }