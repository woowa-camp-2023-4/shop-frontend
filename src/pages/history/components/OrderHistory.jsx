import './OrderHistory.scss';
import {OrderItem} from "@pages/history/components/OrderItem";

export const OrderHistory = props => {
    return (
        <div className={"order-history-container"}>
            <p className={"order-number"}>주문번호 {props.order.orderId} : {props.order.orderStatus}</p>
            <div>
                {props.order.orderItems.map(item => <OrderItem item={item}/>)}
            </div>
            <hr style={{border: "1px solid lightcyan"}}/>
            <h3>
                총 주문금액 {props.order.totalPrice.toLocaleString()} 원
            </h3>
        </div>
    );
};
