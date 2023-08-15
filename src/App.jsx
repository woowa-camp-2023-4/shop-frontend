import './App.css';
import Header from "./layouts/Header";
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import ItemDetailPage from "./pages/ItemDetailPage";

const App = () => {
    return (
        <div className={"container"}>
            <Header/>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/join"} element={<JoinPage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/product"} element={<ItemDetailPage />} />
            </Routes>
        </div>
    )
}

export default App;
