import "./Header.scss";
import {BsCardList, BsCart2, BsJournalText, BsTicketPerforated} from "react-icons/bs";
import {IoCartOutline, IoClipboardOutline, IoLocationOutline, IoTicketOutline} from "react-icons/io5";
import {AiOutlineHeart} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {LoginState} from "@/states";
import {CiViewList} from "react-icons/ci";
import {MdListAlt} from "react-icons/md";
import {RiCoupon3Line} from "react-icons/ri";

const Header = () => {
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
        <div className={"header"}>
            <div className={"header-container"}>
                <div className={"header-top"}>
                    {
                        loginState.loggedIn ? (
                            <ul className={"member-menu-list"}>
                                <li className={"member-menu-item"}>{loginState.name} 님</li>
                                <li className={"member-menu-item"}><Link to={"/"}>회원 정보</Link></li>
                                <li className={"member-menu-item"}><a onClick={onLogoutClicked}>로그아웃</a></li>
                            </ul>
                        ) : (
                            <ul className={"member-menu-list"}>
                                <li className={"member-menu-item"}><Link to={"/join"}>회원가입</Link></li>
                                <li className={"member-menu-item"}><Link to={"/login"}>로그인</Link></li>
                            </ul>
                        )
                    }
                </div>

                <div className={"header-body"}>
                    <div className={"logo-wrapper"}>
                        <h1><Link to={"/"}>든 든 킷</Link></h1>
                    </div>
                    <div className={"search-wrapper"}>
                        <input className={"search-input"} placeholder={"검색어를 입력해 주세요"}/>
                    </div>
                    <div className={"icon-menus"}>
                        <ul className={"menu-icon-list"}>
                            <li className={"menu-icon"}><Link to={"/admin"}><IoTicketOutline/></Link></li>
                            <li className={"menu-icon"}><Link to={"/history"}><IoClipboardOutline/></Link></li>
                            <li className={"menu-icon"}><Link to={"/cart"}><IoCartOutline/></Link></li>
                        </ul>
                    </div>
                </div>

                <div className={"header-footer"}>
                    <ul className={"category-menus"}>
                        <li><a href={"#"}>신상품</a></li>
                        <li><a href={"#"}>베스트</a></li>
                        <li><a href={"#"}>알뜰쇼핑</a></li>
                        <li><a href={"#"}>품절임박</a></li>
                        <li><a href={"#"}>특가/혜택</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;