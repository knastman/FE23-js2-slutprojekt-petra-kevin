import { FirebaseError } from "firebase/app";

export function handleFirebaseError(error: FirebaseError): string {
  let message: string;

  switch (error.code) {
    case "auth/user-not-found":
      message = "User not found";
      break;
    case "auth/wrong-password":
      message = "Wrong password";
      break;
    case "auth/too-many-requests":
      message = "Too many requests";
      break;
    default:
      message = "An error occurred";
  }
  return message;
}
