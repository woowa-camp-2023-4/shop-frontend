import "./ProductItem.scss";
import {useNavigate} from "react-router-dom";

const ItemCard = props => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/product/${props.id}`);
    };

    return (
        <div className={"item-card"} onClick={onClick}>
            <img src={"assets/images/item-default.jpeg"} alt={"상품 이미지가 존재하지 않습니다."}/>
            <p>{props.name}</p>
            <h3>{props.price.toLocaleString()}원</h3>
        </div>
    );
}

export default ItemCard;
