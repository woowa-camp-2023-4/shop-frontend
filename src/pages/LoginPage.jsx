import "./LoginPage.scss";
import ColorButton from "../components/ColorButton";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const LoginPage = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={"login-container"}>
            <h1>로그인</h1>

            <div className={"input-group"}>
                <p>이메일</p>
                <input className={"email-input"}/>
            </div>
            <div className={"input-group"}>
                <p>비밀번호</p>
                <input className={"password-input"}/>
            </div>

            <ColorButton>로그인</ColorButton>
        </div>
    )
};

export default LoginPage;