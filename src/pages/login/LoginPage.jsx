import "./LoginPage.scss";
import {ColorButton} from "@components/buttons";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiClient} from "@/api/ApiClient";
import {useRecoilState} from "recoil";
import {LoginState} from "@/states";

export const LoginPage = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [error, setError] = useState("");
    const [loginState, setLoginState] = useRecoilState(LoginState);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const onEmailChange = e => {
        setEmail(e.target.value);
    }

    const onPasswordChange = e => {
        setPassword(e.target.value);
    }

    const onEnterKeyPress = e => {
        if (e.key === 'Enter') {
            login();
        }
    }

    const onLoginButtonClicked = () => {
        login();
    };

    const login = () => {
        apiClient.post("/auth/login", {
            email: email,
            password: password
        }).then(response => {
            const userInfo = {
                token: `Bearer ${response.data.accessToken}`,
                name: response.data.name,
                email: response.data.email,
                role: response.data.role,
                expire: new Date().getTime() + 3600*1000
            }
            localStorage.setItem("user", JSON.stringify(userInfo));
            setLoginState({
                loggedIn: true,
                name: response.data.name,
                email: response.data.email,
                role: response.data.role
            });
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;

            if (response.data.role === "ADMIN") {
                navigate("/admin");
                return;
            }

            navigate(-1);
        }).catch(response => {
            setError(response.response.data.message);
        });
    }

    return (
        <div className={"login-container"}>
            <h1>로그인</h1>

            <div className={"input-group"}>
                <p>이메일</p>
                <input
                    className={"email-input"}
                    onChange={onEmailChange}
                    value={email}
                    onKeyDown={onEnterKeyPress}
                />
            </div>
            <div className={"input-group"}>
                <p>비밀번호</p>
                <input
                    type={"password"}
                    className={"password-input"}
                    onChange={onPasswordChange}
                    value={password}
                    onKeyDown={onEnterKeyPress}
                />
            </div>

            {
                error !== "" ? (
                    <p className={"login-error"}>
                        {error}
                    </p>
                ) : null
            }

            <ColorButton onClick={onLoginButtonClicked}>로그인</ColorButton>
        </div>
    )
};