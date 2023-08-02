export const isValidSignIn = (formData) => {
    const { id, password } = formData;
    if(id.length < 6 || id.length > 20) {
        return '아이디를 확인해주세요.';
    }
    if(password.length < 8 || password.length > 20) {
        return '비밀번호를 확인해주세요.';
    }
    return false;
}