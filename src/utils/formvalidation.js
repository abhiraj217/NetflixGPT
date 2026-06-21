export const formvalidation = (email, password, name) => {
  const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const passwordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const nameValidation =
    /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);

  if (!emailValidation) return "Email address not valid";
  if (!passwordValidation) return "Password not valid";
  if (!nameValidation) return "Please enter Valid Name";

  return null;
};