import { useState } from 'react';
import Style from './LoginForm.style';
import { isValidateLogin } from '../../utils/validation/loginValidation';
import { fetchPOSTLogin } from '../../api/user/LoginAPI';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { fetchGETUserInfo } from '../../api/user/userInfo';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../store/userInfoSlice';
import { navigateUrl } from '../../constant/navigateUrl';
const LoginForm = () => {
    const [ loginForm, setLoginForm ] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const userRole =  useSelector(state => state.userInfo);

    function loginFormHandler(event) {
        const value = event.target.value;
        const name = event.target.name;
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }
    async function submitLogin() {
        if(!isValidateLogin(loginForm.username, loginForm.password)) return;

        const response = await fetchPOSTLogin(loginForm);

        if(response.status !== 200) return;

        if(location.state && location.state.returnPath) {
            navigate(location.state.returnPath);
            return;
        }

        if(!location.state || location.state.returnPath === '/') {
            const response = await fetchGETUserInfo();
            dispatch(updateUserInfo(response.data));

            if(userRole.role === 'ADMIN') {
                navigate(navigateUrl.adminBookList);
                return;
            }

            navigate(navigateUrl.main);
            return;
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
