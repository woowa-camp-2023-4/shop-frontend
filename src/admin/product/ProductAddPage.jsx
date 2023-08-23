import './ProductAddPage.scss';
import {useRef, useState} from "react";
import {ColorButton} from "@components/buttons";
import {apiClient} from "@/api/ApiClient";
import {Form, useNavigate} from "react-router-dom";

export const ProductAddPage = () => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [file, setFile] = useState();
    const navigate = useNavigate();

    const onNameChange = e => {
        setName(e.target.value);
    };

    const onPriceChange = e => {
        setPrice(e.target.value);
    };

    const onFileChange = e => {
        setFile(e.target.files[0]);
    }

    const onButtonClicked = () => {
        const formData = new FormData();
        formData.append('data', file);
        apiClient.post("/products/images", formData).then(response => {
            console.log(response);
        }).then(response => {
            apiClient.post("/products", {
                name: name,
                price: price,
                imageUrl: response.data,
            }).then(response2 => {
                navigate("/admin/product");
            }).catch(response2 => {
                alert(response2.response.data?.message);
            });
        });
    }

    return (
        <div className={"product-add-container"}>
            <h1>상품 추가</h1>
            <div className={"input-group"}>
                <p>상품 이름</p>
                <input value={name} onChange={onNameChange}/>
            </div>
            <div className={"input-group"}>
                <p>상품 가격</p>
                <input value={price} onChange={onPriceChange}/>
            </div>
            <div className={"input-group"}>
                <p>상품 이미지</p>
                <input type={"file"} onChange={onFileChange}/>
            </div>
            <ColorButton onClick={onButtonClicked}>상품 추가</ColorButton>
        </div>
    )
}