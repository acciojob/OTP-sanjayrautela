function focusNext(currentInput) {
    const maxLength = parseInt(currentInput.getAttribute('maxlength'));
    const nextInputId = 'digit' + (parseInt(currentInput.id.substring(5)) + 1);

    if (currentInput.value.length === maxLength) {
        document.getElementById(nextInputId).focus();
    }
}

function focusPrev(currentInput) {
    if (currentInput.value.length === 0 && event.key === 'Backspace') {
        const prevInputId = 'digit' + (parseInt(currentInput.id.substring(5)) - 1);

        if (prevInputId !== 'digit0') {
            document.getElementById(prevInputId).focus();
        }
    }
}
