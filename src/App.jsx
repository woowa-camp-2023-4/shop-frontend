import './App.css';
import Header from "./layouts/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {LoginState} from "@/states";
import {useEffect} from "react";
import {apiClient} from "@/api/ApiClient";
import {Page} from "@/layouts/Page";
import {AdminProductPage} from "@/admin";
import {AdminPage} from "@/admin/AdminPage";

const App = () => {
    const navigate = useNavigate();
    const [loginState, setLoginState] = useRecoilState(LoginState);

    useEffect(() => {
        let stored = localStorage.getItem("user");
        if (stored !== null) {
            const user = JSON.parse(stored);

            if (user.expire < new Date().getTime()) {
                localStorage.removeItem("user");
                apiClient.defaults.headers.common['Authorization'] = null;
                setLoginState({
                    loggedIn: false,
                    name: "",
                    email: "",
                    role: ""
                });
                return;
            }

            apiClient.defaults.headers.common['Authorization'] = user.token;
            setLoginState({
                loggedIn: true,
                name: user.name,
                email: user.email,
                role: user.role
            });
            navigate("/");
        }
    }, []);

    return (
        <div className={"container"}>
            <Routes>
                <Route path={"/*"} element={<Page/>}/>
                <Route path={"/admin/*"} element={<AdminPage/>} />
            </Routes>
        </div>
    )
}

export default App;
