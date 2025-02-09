document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generator').addEventListener('click', function() {
        console.log('Button clicked!');
        const length = parseInt(document.getElementById('length').value);
        const includeUppercase = document.getElementById('uppercase').checked;
        const includeNumbers = document.getElementById('numbers').checked;
        const includesymbols = document.getElementById('symbols').checked;
        console.log('Length:', length);
        console.log('Include Uppercase:', includeUppercase);
        console.log('Include Numbers:', includeNumbers);
        console.log('Include Symbols:', includesymbols);

        if (length > 0) {
            const password = generatePassword(length, includeUppercase, includeNumbers, includesymbols);
            console.log('Generated Password:', password);
            document.getElementById('password').value = password;
        } else {
            console.error('Length must be greater than 0');
        }
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

        console.log('Allowed Characters:', allowedChars);

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
            console.log('Adding character:', allowedChars[randomIndex]);
        }
        return password;
    }
});