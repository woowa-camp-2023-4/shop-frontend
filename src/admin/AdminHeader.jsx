import './AdminHeader.scss';
import {Link, useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {LoginState} from "@/states";

export const AdminHeader = () => {
    const [loginState, setLoginState] = useRecoilState(LoginState);
    const navigate = useNavigate();

    const onLogoutClicked = () => {
        localStorage.removeItem("user");
        setLoginState({
            loggedIn: false,
            name: "",
            email: "",
            role: "",
        });
        navigate("/");
    };

    return (
        <div className={"admin-header"}>
            <h2>Admin</h2>
            <ul>
                <li><Link to={"/admin/product"}>상품 관리</Link></li>
                <li><Link to={"#"}>쿠폰 관리</Link></li>
                <li><a onClick={onLogoutClicked} style={{cursor:"pointer"}}>로그아웃</a></li>
            </ul>
        </div>
    );
};