// Unique string ID generator 7 characters long
export function generateUniqueStringId(): string {
  return Math.random().toString(36).substring(2, 9);
}
