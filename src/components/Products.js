import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        const products = [
            {
                name: 'iPhone Xs Max',
                slug: 'iphone'
            },
            {
                name: 'Samsung S21 Ultra',
                slug: 'samsung'
            },
            {
                name: 'Asus ROG Phone 5',
                slug: 'asus'
            }
        ];
        console.log(this.props.location.state);
        var url = this.props.match.url;
        return (
            <div className="container">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row">
                        <ul className="list-group">
                            {this.showProducts(products, url)}
                        </ul>
                    </div>
                    <div className="row">
                        <Route
                            path={`${url}/:slug`}
                            component={Product}
                        ></Route>
                    </div>
                </div>
            </div>

        );
    }

    showProducts = (products, url) => {
        var result = null;
        result = products.map((product, index) => {
            return (
                <NavLink key={index} to={`${url}/${product.slug}`}>
                    <li className="list-group-item">{product.name}</li>
                </NavLink>
            );
        });
        return result;
    }
}

export default Products;