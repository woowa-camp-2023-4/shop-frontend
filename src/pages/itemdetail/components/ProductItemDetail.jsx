import './ProductItemDetail.scss';

export const ProductItemDetail = props => {
    return (
        <div className={"product-item-detail"}>
            <hr />
            <p className={"detail-label"}>{props.label}</p>
            <p className={"detail-value"}>{props.children}</p>
        </div>
    );
};