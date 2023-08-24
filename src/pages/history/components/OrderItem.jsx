import './OrderItem.scss';

export const OrderItem = props => {
    return (
        <div className={"order-item-container"}>
            <hr/>
            <div className={"order-item-body"}>
                <div className={"order-item-left"}>
                    <img className={"item-image"} src={props.item.image} alt={"사진"}/>
                </div>
                <div className={"order-item-right"}>
                    <p className={"item-name"}>{props.item.name}</p>
                    <div style={{display: "flex", alignItems:"center", gap:10}}>
                        <p className={"item-price"}>개당 {props.item.price.toLocaleString()} 원</p>
                        <p className={"item-quantity"}>{props.item.quantity}개 구매</p>
                    </div>
                </div>
            </div>
        </div>
    );
};