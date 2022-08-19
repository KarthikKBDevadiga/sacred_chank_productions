const phoneNumberValidator = (phoneNumber, setError) => {
  if (!phoneNumber) {
    setError("Phone Number Cant Be Empty");
    return false;
  }
  const phoneNumberRegex = /(6|7|8|9)\d{9}/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    setError("Phone Number Is Invalid");
    return false;
  }
  return true;
};
const emailValidator = (email, setError) => {
  if (!email) {
    if (setError) setError("Email Cant Be Empty");
    return false;
  }
  const emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  if (!emailRegex.test(email)) {
    if (setError) setError("Email Is Invalid");
    return false;
  }
  return true;
};
const genericValidator = (value, setError, name) => {
  if (!value) {
    setError(name + " Can't Be Empty");
    return false;
  }
  return true;
};

export { phoneNumberValidator, emailValidator, genericValidator };
