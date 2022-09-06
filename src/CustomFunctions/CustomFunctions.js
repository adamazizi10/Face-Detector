//Regex
// eslint-disable-next-line
const EmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PasswordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$";

//Name Validation
const isNameValid = (Name) => {
  return (!Name) ? false: true;
}

//Email Validation
const isEmailValid = (Email) => {
  return Email.match(EmailRegex);
};

//Password Validation
const isAllPresent = (str) => {
  var pattern = new RegExp(PasswordRegex);
  return pattern.test(str) ? true : false;
}

const isPasswordValid = (Password) => { 
  return (Password.length < 8 || !isAllPresent(Password)) ? false: true;
}








const CustomFunctions = { isNameValid, isEmailValid, isPasswordValid, isAllPresent };
export default CustomFunctions;


// !str || str.length === 0)Ô