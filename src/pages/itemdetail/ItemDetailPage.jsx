import "./ItemDetailPage.scss";
import {ColorButton} from "@components/buttons/ColorButton";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {ProductItemDetail} from "@pages/itemdetail/components/ProductItemDetail";
import {QuantityInput} from "@pages/itemdetail/components/QuantityInput";

export const ItemDetailPage = () => {
    const [quantity, setQuantity] = useState(0);

    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const detailData = [
        {label: "판매자", value: "우아한 형제들"},
        {label: "중량/용량", value: "600g"},
        {label: "알레르기 정보", value: "밀, 오징어, 대두, 우유, 쇠고기, 고등어, 돼지고기 함유"},
        {label: "유통기한", value: "수령일 포함 최소 30일 이상 남은 제품을 배송해 드립니다"},
        {label: "배송", value: "오늘 저녁 도착 보장"},
    ];

    return (
        <div className={"container"}>
            <div className={"product-detail-head"}>
                <div className={"product-detail-head-left"}>
                    <img src={"/assets/images/sogalbi.jpeg"} alt={"product"}/>
                </div>
                <div className={"product-detail-head-right"}>
                    <p className={"delivery-type"}>냉장 배송</p>
                    <h2>뼛속까지 든든한 매운 소갈비찜 밀키트 600g(2인분)</h2>
                    <h3>10,000 원</h3>
                    <div className={"item-detail-container"}>
                        {
                            detailData.map((detail, index) => (
                                <ProductItemDetail
                                    label={detail.label}
                                    index={index}
                                >
                                    {detail.value}
                                </ProductItemDetail>
                            ))
                        }
                        <ProductItemDetail
                            label={"수량"}
                        >
                            <QuantityInput quantity={quantity} setQuantity={setQuantity}/>
                        </ProductItemDetail>
                        <ColorButton>구매하기</ColorButton>
                    </div>
                </div>
            </div>
        </div>
    );
};