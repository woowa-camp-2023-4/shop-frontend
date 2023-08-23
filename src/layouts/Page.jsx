import {Route, Routes} from "react-router-dom";
import {CartPage, HistoryPage, ItemDetailPage, JoinPage, LoginPage, MainPage, OrderPage} from "@/pages";
import {AdminProductDetailPage, AdminProductPage} from "@/admin";
import Header from "@/layouts/Header";

export const Page = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/join"} element={<JoinPage/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/product/:id"} element={<ItemDetailPage/>}/>
                <Route path={"/cart"} element={<CartPage/>}/>
                <Route path={"/order/:id"} element={<OrderPage/>}/>
                <Route path={"/history"} element={<HistoryPage/>}/>
            </Routes>
        </>
    );
};