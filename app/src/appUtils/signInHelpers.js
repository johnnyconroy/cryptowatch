// @flow
const isValidPassword = (password: string) => {
  // Length must be at leat 7 characters
  if (password.length < 7) return false;
  // Use at least one lowercase
  if (password.toUpperCase() === password) return false;
  // Use at least one numeral
  if (!/\d/.test(password)) return false;
  return true;
};

export default isValidPassword;
