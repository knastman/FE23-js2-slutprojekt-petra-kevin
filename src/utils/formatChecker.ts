import { getUserData } from "../services/servicesv2/userService2";
import { UserType2 } from "../types/userType";

// Kevin's code
/**
 * @property {Function} isInputEmpty - Checks if input is empty
 * @property {Function} isUserNameValid - Checks if username is valid
 * @property {Function} isPasswordValid - Checks if password is valid
 * @property {Function} isPasswordMatch - Checks if password and confirm password match
 * @property {Function} isUserNameTaken - Checks if username is taken
 */
export const formatChecker = {
  isInputEmpty(input: string): boolean {
    return !input.trim();
  },
  isUserNameValid(userName: string): boolean {
    const validUserNameRegex = /^[A-Za-z0-9_]+$/;
    return validUserNameRegex.test(userName);
  },
  isPasswordValid(password: string): boolean {
    return password.length >= 6;
  },
  isPasswordMatch(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }, 
  async isUserNameTaken(userName: string): Promise<boolean> {
    const userData: UserType2[] = await getUserData();
    const user = userData.find((user) => user.name === userName);
    return user ? true : false;
  }
};


