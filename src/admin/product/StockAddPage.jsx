import './StockAddPage.scss';
import {useState} from "react";
import {ColorButton} from "@components/buttons";
import {apiClient} from "@/api/ApiClient";
import {Form, useNavigate, useParams} from "react-router-dom";

export const StockAddPage = () => {
    const [expiry, setExpiry] = useState();
    const [quantity, setQuantity] = useState();
    const navigate = useNavigate();
    const {id} = useParams();

    const onExpiryChange = e => {
        setExpiry(e.target.value);
    };

    const onQuantityChange = e => {
        setQuantity(e.target.value);
    };

    const onButtonClicked = () => {
        apiClient.post(`/products/${id}/stocks`, {
            expiryDate: expiry,
            quantity: quantity
        }).then(response => {
            navigate("/admin/product");
        }).catch(response => {
            alert(response.response.data?.message);
        });
    }

    return (
        <div className={"stock-add-container"}>
            <h1>재고 추가</h1>
            <div className={"input-group"}>
                <p>유통기한</p>
                <input value={expiry} onChange={onExpiryChange}/>
            </div>
            <div className={"input-group"}>
                <p>재고 수량</p>
                <input value={quantity} onChange={onQuantityChange}/>
            </div>
            <ColorButton onClick={onButtonClicked}>재고 추가</ColorButton>
        </div>
    )
}