export function isValidateLogin(username, password) {
  
  if(!isValidateUsername(username)) {
    alert('아이디를 확인해주세요!');
    return false;
  }
  if(!isValidatePassword(password)) {
    alert('비밀번호는 4~20자를 입력해주세요.');
    return false;
  }
  return true;
}

function isValidateUsername(username) {
  const validateLength = username.length > 4 && username.length < 9;

  if(validateLength) {
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
