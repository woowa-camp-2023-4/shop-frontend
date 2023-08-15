import "./JoinPage.scss";
import ColorButton from "../components/ColorButton";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const JoinPage = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={"join-container"}>
            <h1>회원 가입</h1>

            <p className={"join-message"}>
                (*) 항목은 필수입니다.
            </p>

            <div className={"input-group"}>
                <p>이메일<span>*</span></p>
                <input className={"email-input"}/>
            </div>
            <div className={"input-group"}>
                <p>비밀번호<span>*</span></p>
                <input className={"password-input"}/>
            </div>
            <div className={"input-group"}>
                <p>닉네임<span>*</span></p>
                <input className={"name-input"}/>
            </div>

            <ColorButton>가입하기</ColorButton>
        </div>
    )
};

export default JoinPage;