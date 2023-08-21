export function isValidateLogin(username, password) {
  
  if(!isValidateUsername(username)) {
    alert('인재번호 8자리를 입력해주세요!');
    return false;
  }
  if(!isValidatePassword(password)) {
    alert('비밀번호는 4~20자를 입력해주세요.');
    return false;
  }
  return true;
}

function isValidateUsername(username) {
  const validateLength = username.length === 8;
  const isUsernameNumber = /^\d+$/.test(username);

  if(validateLength && isUsernameNumber) {
    return true;
  }
  return false;

}
function isValidatePassword(password) {
  const validatePasswordLength = password.length > 3 && password.length < 20;

  if(validatePasswordLength) {
    return true;
  }
  return false;
  
}
