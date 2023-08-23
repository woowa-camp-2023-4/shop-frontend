import './CartItemCard.scss';
import {QuantityInput} from "@pages/itemdetail/components/QuantityInput";
import {IoTrash} from "react-icons/io5";

export const CartItemCard = props => {
    return (
        <>
            <hr/>
            <div className={"cart-item-card"}>
                <input className={"item-check"} type={"checkbox"}/>
                <img src={props.image} alt={"ss"}/>
                <div className={"card-body"}>
                    <p>
                        {props.name}
                    </p>
                    <QuantityInput quantity={props.quantity}/>
                </div>

                <p className={"item-price"}>
                    {(props.price * props.quantity)} 원
                </p>

                <div className={"remove-button"}>
                    <IoTrash/>
                </div>
            </div>
        </>
    );
};