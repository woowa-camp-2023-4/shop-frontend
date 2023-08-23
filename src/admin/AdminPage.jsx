import {Route, Routes, useNavigate} from "react-router-dom";
import {AdminProductPage} from "@/admin/product/AdminProductPage";
import {ProductAddPage} from "@/admin/product/ProductAddPage";
import {AdminHeader} from "@/admin/AdminHeader";
import {StockAddPage} from "@/admin/product/StockAddPage";
import {useEffect} from "react";
import {useRecoilState} from "recoil";
import {LoginState} from "@/states";

export const AdminPage = () => {
    const [loginState, setLoginState] = useRecoilState(LoginState);
    const navigate = useNavigate();
    useEffect(() => {
        if (loginState.role !== "ADMIN") {
            alert("접근 권한이 없습니다.");
            navigate("/");
        }
    }, []);

    return (
        <>
            <AdminHeader/>
            <Routes>
                <Route path={"product"} element={<AdminProductPage/>}/>
                <Route path={"product/add"} element={<ProductAddPage/>}/>
                <Route path={"product/:id/stock"} element={<StockAddPage/>}/>
            </Routes>
        </>
    );
};