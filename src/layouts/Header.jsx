import "./Header.scss";
import {BsCart2} from "react-icons/bs";
import {IoLocationOutline} from "react-icons/io5";
import {AiOutlineHeart} from "react-icons/ai";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"header-container"}>
                <div className={"header-top"}>
                    <ul className={"member-menu-list"}>
                        <li className={"member-menu-item"}><Link to={"/join"}>회원가입</Link></li>
                        <li className={"member-menu-item"}><Link to={"/login"}>로그인</Link></li>
                    </ul>
                </div>

                <div className={"header-body"}>
                    <div className={"logo-wrapper"}>
                        <h1><Link to={"/"}>WoowaKit</Link></h1>
                    </div>
                    <div className={"search-wrapper"}>
                        <input className={"search-input"} placeholder={"검색어를 입력해 주세요"}/>
                    </div>
                    <div className={"icon-menus"}>
                        <ul className={"menu-icon-list"}>
                            <li className={"menu-icon"}><Link to={"/"}><IoLocationOutline/></Link></li>
                            <li className={"menu-icon"}><Link to={"/"}><AiOutlineHeart/></Link></li>
                            <li className={"menu-icon"}><Link to={"/"}><BsCart2/></Link></li>
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