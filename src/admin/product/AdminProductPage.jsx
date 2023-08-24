import './AdminProductPage.scss';
import {apiClient} from "@/api/ApiClient";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_DOMAIN} from "@/api/constant";
import ItemCard from "@components/ProductItem";
import {CartItemCard} from "@pages/cart/components/CartItemCard";
import {ProductCard} from "@/admin/components/ProductCard";
import {BorderButton, ColorButton} from "@components/buttons";
import {useNavigate} from "react-router-dom";

export const AdminProductPage = () => {
    const [products, setProducts] = useState([]);
    const [us, updateState] = useState(false);
    const navigate = useNavigate();

    const update = () => {
        updateState(prev => !prev);
    }

    useEffect(() => {
        axios({
            method: "get",
            url: BASE_DOMAIN + "/products",
            params: {
                pageSize: 10,
            }
        }).then(response => {
            console.log(response.data);
            setProducts(response.data);
        });
    }, [us]);

    const onAddButtonClicked = () => {
        navigate("/admin/product/add");
    }

    return (
        <div className={"product-admin-container"}>
            <h1>상품 관리</h1>
            <ColorButton onClick={onAddButtonClicked}>상품 추가</ColorButton>
            {
                products.map(product => (
                    <ProductCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        image={product.imageUrl}
                        status={product.status}
                        update={update}
                    />
                ))
            }
            <BorderButton onClick={update}>새로 고침</BorderButton>
        </div>
    );
};