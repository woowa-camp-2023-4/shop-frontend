import './ProductCard.scss';
import {IoTrash} from "react-icons/io5";
import {AiOutlinePlus} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {BiPlay, BiStop} from "react-icons/bi";
import {apiClient} from "@/api/ApiClient";

export const ProductCard = props => {

    const navigate = useNavigate();

    const onStockAddClicked = () => {
        navigate(`/admin/product/${props.id}/stock`);
    };

    const onStartClicked = () => {
        apiClient.patch(`/products/${props.id}/status`, {
            productStatus: "IN_STOCK",
        }).then(response => {
            props.update();
        }).catch(response => {
            alert(response.response.data?.message);
        });
    };

    const onStopClicked = () => {
        apiClient.patch(`/products/${props.id}/status`, {
            productStatus: "STOPPED",
        }).then(response => {
            props.update();
        }).catch(response => {
            alert(response.response.data?.message);
        });
    };

    return (
        <>
            <hr/>
            <div className={"product-card"}>
                <img src={"/assets/images/item-default.jpeg"} alt={"ss"}/>
                {/*<img src={props.image} alt={"ss"}/>*/}
                <div className={"card-body"}>
                    <p>
                        {props.name}
                    </p>
                </div>

                <p className={"item-price"}>
                    {props.price} 원
                </p>

                <div style={{display: "flex", alignItems: "center", gap: 10}}>
                    <p className={"item-price"}>
                        {props.quantity} 개
                    </p>

                    <div className={"icon-button"} onClick={onStockAddClicked}>
                        <AiOutlinePlus/>
                    </div>
                </div>

                <div style={{display: "flex", alignItems: "center", gap: 10}}>
                    <p className={"item-price"}>
                        {props.status}
                    </p>
                    {
                        (props.status === "IN_STOCK") ? (
                            <div className={"icon-button"} onClick={onStopClicked}>
                                <BiStop/>
                            </div>
                        ) : (
                            <div className={"icon-button"} onClick={onStartClicked}>
                                <BiPlay/>
                            </div>
                        )
                    }
                </div>

                <div className={"icon-button"}>
                    <IoTrash/>
                </div>
            </div>
        </>
    )
        ;
};