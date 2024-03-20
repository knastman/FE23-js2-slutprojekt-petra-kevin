//Kevin's code
export function isEmailValid(email: string): boolean {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

//Kevin's code
export function isInputEmpty(input: string): boolean {
  return input === "";
}

//Kevin's code
export function isPasswordValid(password: string): boolean {
  return password.length >= 6;
}
