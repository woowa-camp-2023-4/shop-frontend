import "./JoinPage.scss";
import {ColorButton} from "@components/buttons";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_DOMAIN} from "@/api/constant";
import {apiClient} from "@/api/ApiClient";

export const JoinPage = () => {
    const {pathname} = useLocation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const onEmailChange = e => {
        setEmail(e.target.value);
    }

    const onPasswordChange = e => {
        setPassword(e.target.value);
    }

    const onNameChange = e => {
        setName(e.target.value);
    }

    const onJoinButtonClicked = () => {
        apiClient.post(BASE_DOMAIN + "/auth/signup", {
            email: email,
            password: password,
            name: name
        }).then(response => {
            navigate("/");
        });
    };

    return (
        <div className={"join-container"}>
            <h1>회원 가입</h1>

            <p className={"join-message"}>
                (*) 항목은 필수입니다.
            </p>

            <div className={"input-group"}>
                <p>이메일<span>*</span></p>
                <input className={"email-input"} value={email} onChange={onEmailChange}/>
            </div>
            <div className={"input-group"}>
                <p>비밀번호<span>*</span></p>
                <input type={"password"} className={"password-input"} value={password} onChange={onPasswordChange}/>
            </div>
            <div className={"input-group"}>
                <p>닉네임<span>*</span></p>
                <input className={"name-input"} value={name} onChange={onNameChange}/>
            </div>

            <ColorButton onClick={onJoinButtonClicked}>가입하기</ColorButton>
        </div>
    )
};