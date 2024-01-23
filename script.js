 document.addEventListener('DOMContentLoaded', function () {
      const codeInputs = document.querySelectorAll('.code');

      codeInputs.forEach((input, index) => {
        input.addEventListener('input', function () {
          if (input.value.length === 1 && index < codeInputs.length - 1) {
            codeInputs[index + 1].focus();
          }
        });

        input.addEventListener('keydown', function (event) {
          if (event.key === 'Backspace' && index > 0) {
            codeInputs[index].value = ''; // Clear the current input
            codeInputs[index - 1].focus();
          }
        });
      });
    });