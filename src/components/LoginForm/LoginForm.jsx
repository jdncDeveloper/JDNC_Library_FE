import { useState } from 'react';
import Style from './LoginForm.style';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const [ loginForm, setLoginForm ] = useState({
        id: '',
        pw: '',
    });
    const navigate = useNavigate();

    function loginFormHandler(e) {
        const value = e.target.value;
        const name = e.target.name;
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }
    function submitLogin(e) {
        // 유효성 검사
        // fetch login 함수
        navigate('/main');
    }
    return(
        <Style.LoginContainer>
            <h1>더큰내일도서관</h1>
            <input type="text" name='id' placeholder='아이디' value={loginForm.id} onChange={loginFormHandler}/>
            <input type="password" name='pw' placeholder='비밀번호' value={loginForm.pw} onChange={loginFormHandler}/>
            <button onClick={submitLogin}>Login</button>
        </Style.LoginContainer>
    )
}

export default LoginForm;
