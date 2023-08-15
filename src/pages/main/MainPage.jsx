import ItemCard from "@components/ProductItem";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {MainPromotion} from "./components";

export const MainPage = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={"container"}>
            <MainPromotion />
            <div style={{marginTop: 80, height:1000, width: "1024px", display:"flex", flexDirection:"column", alignItems:"center", gap:"50px"}}>
                <h1>오늘의 추천 상품</h1>
                <div style={{display: "flex", justifyContent:"start", flexWrap: "wrap", gap:38, width:"fit-content"}}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map(() => <ItemCard/>)
                    }
                </div>
            </div>
        </div>
    )
};