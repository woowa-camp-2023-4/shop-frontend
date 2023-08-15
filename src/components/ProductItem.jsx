import "./ProductItem.scss";
import {useNavigate} from "react-router-dom";

const ItemCard = props => {
    const navigate = useNavigate();
    const onClick = (e) => {
        navigate("/product");
    };

    return (
        <div className={"item-card"} onClick={onClick}>
            <img src={"assets/images/item-default.jpeg"} alt={"상품 이미지가 존재하지 않습니다."}/>
            <p>매운 소갈비찜 밀키트 600g (2인용)</p>
            <h3>10,000원</h3>
        </div>
    );
}

export default ItemCard;
