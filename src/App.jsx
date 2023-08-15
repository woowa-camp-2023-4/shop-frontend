import './App.css';
import Header from "./layouts/Header";
import {Route, Routes} from "react-router-dom";
import {MainPage, JoinPage, LoginPage, ItemDetailPage} from "./pages"

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
