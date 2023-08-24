import './HistoryPage.scss';
import {useEffect, useState} from "react";
import {apiClient} from "@/api/ApiClient";
import {OrderHistory} from "@pages/history/components/OrderHistory";
import {useRecoilState} from "recoil";
import {LoginState} from "@/states";

export const HistoryPage = () => {
    const [orders, setOrders] = useState([]);
    const [loginState, setLoginState] = useRecoilState(LoginState);

    useEffect(() => {
        if (!loginState.loggedIn) return;

        apiClient.get("/orders").then(response => {
            setOrders(response.data);
        });
    }, []);

    return (
        <div className={"history-container"}>
            <h1>주문 내역</h1>

            {
                orders.map(order => (
                    <OrderHistory
                        order={order}
                    />
                ))
            }

        </div>
    );
}