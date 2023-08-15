import './QuantityInput.scss';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

export const QuantityInput = props => {
    const {setQuantity} = props;
    const onQuantityIncrease = () => {
        setQuantity(prev => prev + 1);
    }

    const onQuantityDecrease = () => {
        setQuantity(prev => prev - 1);
    }

    return (
        <div className={"quantity-input"}>
            <button onClick={onQuantityDecrease}><AiOutlineMinus/></button>
            <input readOnly={true} value={props.quantity}/>
            <button onClick={onQuantityIncrease}><AiOutlinePlus/></button>
        </div>
    );
};