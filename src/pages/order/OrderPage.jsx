import './OrderPage.scss';
import {useEffect, useRef, useState} from "react";
import {
    PaymentWidgetInstance,
    loadPaymentWidget,
    ANONYMOUS,
} from "@tosspayments/payment-widget-sdk";

import "../../App.css";
import {BASE_DOMAIN} from "@/api/constant";
import {useNavigate, useParams} from "react-router-dom";
import {useRecoilState} from "recoil";
import {LoginState} from "@/states";
import {apiClient} from "@/api/ApiClient";

const selector = "#payment-widget";
const clientKey = process.env.REACT_APP_TOSS_CLIENT_KEY;

export const OrderPage = () => {
    const paymentWidgetRef = useRef(null);
    const paymentMethodsWidgetRef = useRef(null);
    const {id} = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState({});
    const [loginState, setLoginState] = useRecoilState(LoginState);

    useEffect(() => {
        apiClient.get(BASE_DOMAIN + "/orders/" + id).then(response => {
            setOrder(response.data);
            (async () => {
                const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS); // 비회원 결제
                const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
                    selector,
                    {value: response.data.totalPrice}
                );

                paymentWidget.renderAgreement("#agreement");

                paymentWidgetRef.current = paymentWidget;
                paymentMethodsWidgetRef.current = paymentMethodsWidget;
            })();
        })
    }, []);

    return (
        <div className={"order-container"}>
            <h1>주문서</h1>
            <span>{`${order.totalPrice}원`}</span>
            <div id="payment-widget"/>
            <div id="agreement"/>
            <button
                onClick={async () => {
                    const paymentWidget = paymentWidgetRef.current;
                        paymentWidget?.requestPayment({
                            orderId: order.uuid,
                            orderName: `${id}번 주문에 대한 결제`,
                            customerName: loginState.name,
                            customerEmail: loginState.email,
                        }).then(response => {
                            apiClient.post(BASE_DOMAIN + "/orders", {
                                orderId: id,
                                paymentKey: response.paymentKey
                            }).then(response => {
                                alert("결제 완료되었습니다.")
                                navigate("/history");
                            }).catch(response => {
                                alert(response.response.data.message);
                                navigate("/");
                            });
                        }).catch(e => {
                            console.log(e);
                        });
                }}
            >
                결제하기
            </button>
        </div>
    );
};