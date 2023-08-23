import "./CartPage.scss"
import {useEffect, useState} from "react";
import {ColorButton} from "@components/buttons";
import {apiClient} from "@/api/ApiClient";
import {CartItemCard} from "@pages/cart/components/CartItemCard";

export const CartPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        apiClient.get("/cart-items").then(response => {
            console.log(response);
            setItems(response.data);
        });
    }, []);

    return (
        <div className={"cart-container"}>
            <h1>장바구니</h1>

            <div style={{width: "100%"}}>
                <input type={"checkbox"} />
                <label>전체 선택</label>
            </div>
            {
                items.map(item => (
                    <CartItemCard
                        image={item.productImage}
                        name={item.productName}
                        price={item.productPrice}
                        quantity={item.quantity}
                    />
                ))
            }
            <ColorButton>선택 상품 주문하기</ColorButton>
        </div>
    );
};