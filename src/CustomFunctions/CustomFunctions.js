//Regex
// eslint-disable-next-line
const EmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PasswordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$";

//Name Validation
const isNameValid = (Name) => (!Name) ? false: true;

//Email Validation
const isEmailEmpty = (Email) => (!Email) ? true: false;
const isEmailValid = (Email) => Email.match(EmailRegex)

//Password Validation
const isAllPresent = (str) => {
var pattern = new RegExp(PasswordRegex);
  return pattern.test(str) ? true : false;
}

const isPasswordValid = (Password) => (Password.length < 8 || !isAllPresent(Password)) ? false: true;
const isPasswordEmpty = (Password) => (Password.length === 0) ? true : false;
const displayPasswordSpecifications = <p className="w-90 ba br2 pa3 ma2 red bg-washed-green">Password Must contain: <br />-at least 8 characters<br />-at least one uppercase letter<br />-at least one lowercase letter<br />-at least one numeric value<br />-at least one special character</p>;
const displayPasswordSpecificationsC = <p className="w-100 ba br2 pa3 ma2 red bg-washed-green">Password Must contain: <br />-at least 8 characters<br />-at least one uppercase letter<br />-at least one lowercase letter<br />-at least one numeric value<br />-at least one special character</p>;

const CustomFunctions = { displayPasswordSpecificationsC, isNameValid, isEmailValid, isPasswordValid, isAllPresent, isPasswordEmpty, isEmailEmpty, displayPasswordSpecifications };
export default CustomFunctions;


