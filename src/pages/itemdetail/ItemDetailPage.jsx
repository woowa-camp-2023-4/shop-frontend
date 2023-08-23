import "./ItemDetailPage.scss";
import {ColorButton} from "@components/buttons/ColorButton";
import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {ProductItemDetail} from "@pages/itemdetail/components/ProductItemDetail";
import {QuantityInput} from "@pages/itemdetail/components/QuantityInput";
import {BorderButton} from "@components/buttons";
import {BASE_DOMAIN} from "@/api/constant";
import {apiClient} from "@/api/ApiClient";

export const ItemDetailPage = props => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        apiClient.get(BASE_DOMAIN + `/products/${id}`).then(response => {
            setProduct(response.data);
        });
    }, []);

    const detailData = [
        {label: "판매자", value: "우아한 형제들"},
        {label: "중량/용량", value: "600g"},
        {label: "알레르기 정보", value: "밀, 오징어, 대두, 우유, 쇠고기, 고등어, 돼지고기 함유"},
        {label: "유통기한", value: "수령일 포함 최소 30일 이상 남은 제품을 배송해 드립니다"},
        {label: "배송", value: "오늘 저녁 도착 보장"},
    ];

    const onBuyClicked = () => {
        apiClient.post("/orders/pre", {
            productId: id,
            quantity: quantity
        }).then(response => {
            // TODO
            navigate("/order/" + response.data.id);
        });
    }

    const onCartClicked = () => {
        apiClient.post("/cart-items", {
            productId: id,
            quantity: quantity
        }).then(response => {
            alert("장바구니에 담았습니다.");
            navigate("/cart");
        });
    }

    return (
        <div className={"container"}>
            <div className={"product-detail-head"}>
                <div className={"product-detail-head-left"}>
                    <img src={"/assets/images/sogalbi.jpeg"} alt={"product"}/>
                </div>
                <div className={"product-detail-head-right"}>
                    <p className={"delivery-type"}>냉장 배송</p>
                    <h2>{product.name}</h2>
                    <h3>{product.price?.toLocaleString()} 원</h3>
                    <div className={"item-detail-container"}>
                        {
                            detailData.map((detail, index) => (
                                <ProductItemDetail
                                    id={id}
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
                        <div className={"button-group"}>
                            <ColorButton disabled={quantity <= 0} onClick={onBuyClicked}>구매하기</ColorButton>
                            <BorderButton disabled={quantity <= 0} onClick={onCartClicked}>장바구니</BorderButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};