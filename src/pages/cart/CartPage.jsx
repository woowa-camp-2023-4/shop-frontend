import "./CartPage.scss"
import {useEffect, useState} from "react";
import {ColorButton} from "@components/buttons";
import {apiClient} from "@/api/ApiClient";
import {CartItemCard} from "@pages/cart/components/CartItemCard";
import {useNavigate} from "react-router-dom";

export const CartPage = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiClient.get("/cart-items").then(response => {
            setItems(response.data);
        });
    }, []);

    const onOrderButtonClicked = () => {
        apiClient.post("/orders/pre-cart-item",
            items.map(item => ({
                cartItemId: item.cartItemId
            }))
        ).then(response => {
            // TODO
            navigate("/order/" + response.data.id);
        }).catch(response => {
            alert(response.response.data.message);
        });
    }

    return (
        <div className={"cart-container"}>
            <h1>장바구니</h1>

            <div style={{width: "100%"}}>
                <input type={"checkbox"} checked={true}/>
                <label>전체 선택</label>
            </div>
            {
                items.map(item => (
                    <CartItemCard
                        image={item.productImage}
                        name={item.productName}
                        price={item.productPrice}
                        quantity={item.quantity}
                        checked={true}
                    />
                ))
            }
            <ColorButton onClick={onOrderButtonClicked}>선택 상품 주문하기</ColorButton>
        </div>
    );
};