import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ProductProfile from "./product-profile";

export default class ProductContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to our shop",
            isLoading: false,
            data: [],
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter((item) => {
                return item.type === filter;
            }),
        });
    }

    getProductDetails() {
        axios
            .get("  URL to DB here ")
            .then((response) => {
                console.log("response data", response);
                this.setState({
                    data: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    productDetails() {
        return this.state.data.map((item) => {
            console.log(item);
            return <ProductDetails key={item.id} item={item} />;
        });
    }

    componentDidMount() {
        this.getProductDetails();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="productDetails-page-wrapper">
                <div className="button-wrapper">

                    <button className="btn1" onClick={() => this.handleFilter("raised")}>
                        Raised
                    </button>

                    <button className="btn2" onClick={() => this.handleFilter("cake")}>
                        Cake
                    </button>

                    <button className="btn3" onClick={() => this.handleFilter("long-johns")}>
                        Long Johns
                    </button>

                    <button className="btn4" onClick={() => this.handleFilter("donut-holes")}>
                        Donut Holes
                    </button>

                    <button className="btn5" onClick={() => this.handleFilter("donut-of-the-day")}>
                        Donut of the Day
                    </button>

                </div>
                <div className="productProfile-wrapper">

                      {this.userProfiles()}
                </div>
                
                <div className='footer'>
                    <div className='footer-logo'>
                        <img src={Logo} />
                    </div>

                <div className="links-wrapper">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>




                        
                    </div>
                    <div className='copyright'>
                        <h3>Copyright message</h3>
                    </div>

                </div>
            </div>
        );
    }
}


