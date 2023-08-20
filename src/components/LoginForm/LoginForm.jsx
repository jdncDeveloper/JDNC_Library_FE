import { useState } from 'react';
import Style from './LoginForm.style';
import { isValidateLogin } from '../../utils/validation/loginValidation';
import { fetchPOSTLogin } from '../../api/user/LoginAPI';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const [ loginForm, setLoginForm ] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    function loginFormHandler(event) {
        const value = event.target.value;
        const name = event.target.name;
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }
    async function submitLogin() {
        if(isValidateLogin(loginForm.username, loginForm.password)) {
            const response = await fetchPOSTLogin(loginForm);
            if(response.status === 200) {
                // 유저정보 전역상태관리 함수
                navigate('/');
            }
        }
    }
    return(
        <Style.LoginContainer>
            <h1>더큰내일도서관</h1>
            <input type="text" name='username' placeholder='아이디' value={loginForm.username} onChange={loginFormHandler}/>
            <input type="password" name='password' placeholder='비밀번호' value={loginForm.password} onChange={loginFormHandler}/>
            <button onClick={submitLogin}>Login</button>
        </Style.LoginContainer>
    )
}

export default LoginForm;
