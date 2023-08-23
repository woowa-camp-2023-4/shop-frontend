import ItemCard from "@components/ProductItem";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {MainPromotion} from "./components";
import axios from "axios";
import {BASE_DOMAIN} from "@/api/constant";

export const MainPage = () => {
    const {pathname} = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        axios({
            method: "get",
            url: BASE_DOMAIN + "/products",
            params: {
                pageSize: 16,
            }
        }).then(response => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div className={"container"}>
            <MainPromotion/>
            <div style={{
                marginTop: 80,
                height: 1000,
                width: "1024px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "50px"
            }}>
                <h1>오늘의 추천 상품</h1>
                <div
                    style={{display: "flex", justifyContent: "start", flexWrap: "wrap", gap: 38, width: "fit-content"}}>
                    {
                        products.map(product => (
                            <ItemCard
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                imageUrl={product.imageUrl}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};