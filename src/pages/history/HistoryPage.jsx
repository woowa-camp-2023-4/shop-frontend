import './HistoryPage.scss';
import {useEffect, useState} from "react";
import {apiClient} from "@/api/ApiClient";

export const HistoryPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        apiClient.get("/orders").then(response => {
            console.log(response);
            setOrders(response.data);
        });
    }, []);

    return (
        <div className={"history-container"}>
            <h1>주문 내역</h1>

            {
                orders.map(order => (
                    <div>

                    </div>
                ))
            }

        </div>
    );
}