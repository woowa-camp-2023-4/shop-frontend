import "./ItemDetailPage.scss";
import ColorButton from "../components/ColorButton";
import {useEffect, useState} from "react";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useLocation} from "react-router-dom";

const ItemDetailPage = () => {
    const [quantity, setQuantity] = useState(0);

    const onQuantityIncrease = () => {
        setQuantity(prev => prev + 1);
    }

    const onQuantityDecrease = () => {
        setQuantity(prev => prev - 1);
    }

    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={"container"}>
            <div className={"product-detail-head"}>
                <div className={"product-detail-head-left"}>
                    <img src={"/assets/images/sogalbi.jpeg"} />
                </div>
                <div className={"product-detail-head-right"}>
                    <p className={"delivery-type"}>냉장 배송</p>
                    <h2>뼛속까지 든든한 매운 소갈비찜 밀키트 600g(2인분)</h2>
                    <h3>10,000 원</h3>
                    <div className={"item-detail-container"}>
                        <hr/>
                        <div className={"product-item-detail"}>
                            <p className={"detail-label"}>판매자</p>
                            <p className={"detail-value"}>우아한 형제들</p>
                        </div>
                        <hr/>
                        <div className={"product-item-detail"}>
                            <p className={"detail-label"}>중량/용량</p>
                            <p className={"detail-value"}>600g</p>
                        </div>
                        <hr/>
                        <div className={"product-item-detail"}>
                            <p className={"detail-label"}>알레르기 정보</p>
                            <p className={"detail-value"}>밀, 오징어, 대두, 우유, 쇠고기, 고등어, 돼지고기 함유</p>
                        </div>
                        <hr/>
                        <div className={"product-item-detail"}>
                            <p className={"detail-label"}>유통기한</p>
                            <p className={"detail-value"}>수령일 포함 최소 30일 이상 남은 제품을 배송해 드립니다.</p>
                        </div>
                        <hr/>
                        <div className={"product-item-detail"}>
                            <p className={"detail-label"}>배송</p>
                            <p className={"detail-value"}>오늘 저녁 도착 보장</p>
                        </div>
                        <hr/>
                        <div className={"product-item-detail"}>
                            <p className={"detail-label"}>수량</p>
                            <div className={"quantity-input"}>
                                <button onClick={onQuantityDecrease}><AiOutlineMinus/></button>
                                <input readOnly={true} value={quantity}/>
                                <button onClick={onQuantityIncrease}><AiOutlinePlus/></button>
                            </div>
                        </div>

                        <ColorButton>구매하기</ColorButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailPage;