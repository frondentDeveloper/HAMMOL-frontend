import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {ProductIdAction} from "../../redux/action/ProductIdAction";

function ProductDetail(props) {

    const dispatch = useDispatch();
    const {id} = useParams();
    const store = useSelector(state => state);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/product/${id}`).then((res) => {
            dispatch(ProductIdAction(res.data));
            setProductDeatil(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const [productDetail, setProductDeatil] = useState({});
    return (
        <>

            <div className="productDetail">
                <h1 className="hammol">HAMMOL PRODUCT DETAIL</h1>


                        <div className="for-image-detail">
                            <div className="right-image">
                                <div className="main-image">
                                    <img className="img-fluid" src={productDetail &&productDetail.thumbnail} alt=""/>
                                </div>
                                <div className="top-image">
                                    {
                                        productDetail && productDetail.images && productDetail.images.map((item, index)=>(
                                            <div key={index} className="top-image1">
                                                <img src={item} alt=""/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="left-title">
                                <div className="all-text"><p>Brand:</p>
                                    <div className="name-title">{productDetail &&productDetail.brand}</div>
                                </div>
                                <div className="all-text"><p>Title:</p>
                                    <div className="name-title">{productDetail &&productDetail.title}</div>
                                </div>
                                <div className="all-text"><p>Description:</p>
                                    <div className="name-title">{productDetail && productDetail.description}</div>
                                </div>
                                <div className="all-text"><p>Discount percentage:</p>
                                    <div className="name-title">{productDetail && productDetail.discountPercentage}</div>
                                </div>
                                <div className="all-text"><p>price:</p>
                                    <div className="name-title">{productDetail && productDetail.price}$</div>
                                </div>
                                <div className="all-text"><p>rating:</p>
                                    <div className="name-title">{productDetail && productDetail.rating}</div>
                                </div>
                                <div className="all-text"><p>stock:</p>
                                    <div className="name-title">{productDetail && productDetail.stock}</div>
                                </div>
                                <div className="all-text"><p>category:</p>
                                    <div className="name-title">{productDetail && productDetail.category}</div>
                                </div>
                            </div>
                        </div>

            </div>

        </>
    );
}

export default ProductDetail;