document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generator').addEventListener('click', function() {
        const length = parseInt(document.getElementById('length').value);
        const includeUppercase = document.getElementById('uppercase').checked;
        const includeNumbers = document.getElementById('numbers').checked;
        const includesymbols = document.getElementById('symbols').checked;

        if (length > 0) {
            const password = generatePassword(length, includeUppercase, includeNumbers, includesymbols);
            document.getElementById('password').value = password;
        } else {
            console.error('Length must be greater than 0');
        }
    });

    document.getElementById('copy').addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        passwordInput.select(); // Select the password input
        document.execCommand('copy'); // Copy the selected text to clipboard
        alert('Password copied to clipboard!'); // Feedback for the user
    });

    function generatePassword(length, includeUppercase, includeNumbers, includesymbols) {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolsChars = '!@#$%^&*()_+{}[]:;<>,.?/~`';

        let allowedChars = lowercaseChars; // Start with lowercase chars
        if (includeUppercase) allowedChars += uppercaseChars;
        if (includeNumbers) allowedChars += numberChars;
        if (includesymbols) allowedChars += symbolsChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        return password;
    }
});