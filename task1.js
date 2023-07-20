const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('The string must be between 1 and 10 characters long.');
  }

  return string.length;
};

module.exports = stringLength;
