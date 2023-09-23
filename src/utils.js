// Create an array to store the unique variable names
export const variableNames = [];

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Generate variable names like a-z
for (const letter of lowercaseLetters) {
  variableNames.push(letter);
}

// Generate variable names like A-Z
for (const letter of uppercaseLetters) {
  variableNames.push(letter);
}

// Generate variable names like a1-a9, aA1-aA9, b1-b9, bA1-bA9, and so on
for (let i = 1; i <= 9; i++) {
  for (const letter of lowercaseLetters) {
    variableNames.push(`${letter}${i}`);
    variableNames.push(`${letter.toUpperCase()}${i}`);
  }
}

// Now variableNames array contains the desired sequence of variable names
