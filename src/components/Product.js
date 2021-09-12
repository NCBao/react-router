import React,{Component} from 'react';

class Product extends Component{
    render(){
        var {match} = this.props;
        console.log(match);
        return (
            <h3>Đây là trang chi tiết sản phẩm: { match.params.slug }</h3>
        );
    }
}

export default Product;