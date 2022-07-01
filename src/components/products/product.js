import React, {useEffect, useState} from 'react';
import "./products.scss"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {ProductAction} from "../../redux/action/ProductAction";
import {Link} from "react-router-dom";


function Product(props) {


    const dispatch = useDispatch();
    const store = useSelector(state => state);
    const [product, setProduct] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:3001/api/product/?limit=5000').then((res) => {
        dispatch(ProductAction(res.data.products));
        setProduct(res.data.products);
    }).catch(err=>{
        console.log(err)
    })
    }, []);



    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <h1 className="hammol">HAMMOL FRONT TEST</h1>
            <div className="for-search">
                <input onChange={event => {setSearchTerm(event.target.value)}} className="form-control" type="text" placeholder="type something..."/>
            </div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                All
                            </button>
                        </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">smartphones
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">laptops
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab1" data-bs-toggle="pill"
                            data-bs-target="#pills-contact1" type="button" role="tab" aria-controls="pills-contact1"
                            aria-selected="false">fragrances
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab2" data-bs-toggle="pill"
                        data-bs-target="#pills-contact2" type="button" role="tab" aria-controls="pills-contact2"
                        aria-selected="false">skincare
                </button>
            </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab3" data-bs-toggle="pill"
                            data-bs-target="#pills-contact3" type="button" role="tab" aria-controls="pills-contact3"
                            aria-selected="false">groceries
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab4" data-bs-toggle="pill"
                            data-bs-target="#pills-contact4" type="button" role="tab" aria-controls="pills-contact4"
                            aria-selected="false">home-decoration
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <div className="container-fluid">
                            <div className="row my-3">
                                    {product && product.filter((value => {if (searchTerm === ""){
                                        return value
                                    }else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return value
                                    }
                                    })).map((item, index)=>(
                                        <div className="col-md-3" key={index}>
                                            <div className="card1">
                                                <div className="black-fon">
                                                    <div className="more1">
                                                        <Link to={`/product/${item.id}`}>
                                                            <div className="more">
                                                                See more
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="for-image">
                                                    <img src={item.thumbnail} alt=""/>
                                                </div>
                                                <div className="forAllText">
                                                    <div className="forTitle">
                                                        {item.title}
                                                    </div>
                                                    <div className="forDescription">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                        </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                     tabIndex="0"><div className="container-fluid">
                    <div className="row my-3">
                        {product && product.filter((value => {if (searchTerm === ""){
                            return value
                        }else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return value
                        }
                        })).filter(myCategory=>myCategory.category==="smartphones").map((item, index)=>(
                            <div key={index} className="col-md-3">
                                <div className="card1">
                                    <div className="black-fon">
                                        <div className="more1">
                                            <Link to={`/product/${item.id}`}>
                                                <div className="more">
                                                    See more
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="for-image">
                                        <img src={item.thumbnail} alt=""/>
                                    </div>
                                    <div className="forAllText">
                                        <div className="forTitle">
                                            {item.title}
                                        </div>
                                        <div className="forDescription">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                     tabIndex="0"><div className="container-fluid">
                    <div className="row my-3">
                        {product && product.filter((value => {if (searchTerm === ""){
                            return value
                        }else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return value
                        }
                        })).filter(myCategory=>myCategory.category==="laptops").map((item, index)=>(
                            <div key={index} className="col-md-3">
                                <div className="card1">
                                    <div className="black-fon">
                                        <div className="more1">
                                            <Link to={`/product/${item.id}`}>
                                                <div className="more">
                                                    See more
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="for-image">
                                        <img src={item.thumbnail} alt=""/>
                                    </div>
                                    <div className="forAllText">
                                        <div className="forTitle">
                                            {item.title}
                                        </div>
                                        <div className="forDescription">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                </div>
                <div className="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact-tab1"
                     tabIndex="0"><div className="container-fluid">
                    <div className="row my-3">
                        {product && product.filter((value => {if (searchTerm === ""){
                            return value
                        }else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return value
                        }
                        })).filter(myCategory=>myCategory.category==="fragrances").map((item, index)=>(
                            <div key={index} className="col-md-3">
                                <div className="card1">
                                    <div className="black-fon">
                                        <div className="more1">
                                            <Link to={`/product/${item.id}`}>
                                                <div className="more">
                                                    See more
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="for-image">
                                        <img src={item.thumbnail} alt=""/>
                                    </div>
                                    <div className="forAllText">
                                        <div className="forTitle">
                                            {item.title}
                                        </div>
                                        <div className="forDescription">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                </div>
                <div className="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab2"
                     tabIndex="0"><div className="container-fluid">
                    <div className="row my-3">
                        {product && product.filter((value => {if (searchTerm === ""){
                            return value
                        }else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return value
                        }
                        })).filter(myCategory=>myCategory.category==="skincare").map((item, index)=>(
                            <div key={index} className="col-md-3">
                                <div className="card1">
                                    <div className="black-fon">
                                        <div className="more1">
                                            <Link to={`/product/${item.id}`}>
                                                <div className="more">
                                                    See more
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="for-image">
                                        <img src={item.thumbnail} alt=""/>
                                    </div>
                                    <div className="forAllText">
                                        <div className="forTitle">
                                            {item.title}
                                        </div>
                                        <div className="forDescription">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                </div>
                <div className="tab-pane fade" id="pills-contact3" role="tabpanel" aria-labelledby="pills-contact-tab3"
                     tabIndex="0"><div className="container-fluid">
                    <div className="row my-3">
                        {product && product.filter((value => {if (searchTerm === ""){
                            return value
                        }else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return value
                        }
                        })).filter(myCategory=>myCategory.category==="groceries").map((item, index)=>(
                            <div key={index} className="col-md-3">
                                <div className="card1">
                                    <div className="black-fon">
                                        <div className="more1">
                                            <Link to={`/product/${item.id}`}>
                                                <div className="more">
                                                    See more
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="for-image">
                                        <img src={item.thumbnail} alt=""/>
                                    </div>
                                    <div className="forAllText">
                                        <div className="forTitle">
                                            {item.title}
                                        </div>
                                        <div className="forDescription">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                </div>
                <div className="tab-pane fade" id="pills-contact4" role="tabpanel" aria-labelledby="pills-contact-tab4"
                     tabIndex="0"><div className="container-fluid">
                    <div className="row my-3">
                        {product && product.filter((value => {if (searchTerm === ""){
                            return value
                        }else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return value
                        }
                        })).filter(myCategory=>myCategory.category==="home-decoration").map((item, index)=>(
                            <div key={index} className="col-md-3">
                                <div className="card1">
                                    <div className="black-fon">
                                        <div className="more1">
                                            <Link to={`/product/${item.id}`}>
                                                <div className="more">
                                                    See more
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="for-image">
                                        <img src={item.thumbnail} alt=""/>
                                    </div>
                                    <div className="forAllText">
                                        <div className="forTitle">
                                            {item.title}
                                        </div>
                                        <div className="forDescription">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                </div>
            </div>
        </>
    );
}

export default Product;