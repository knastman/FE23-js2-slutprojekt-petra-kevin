// Note: This file is used to declare the types of files that are not recognized by typescript by default.
declare module "*.png" {
  const value: string;
  export default value;
}
