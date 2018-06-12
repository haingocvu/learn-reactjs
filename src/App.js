import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: 'iphone 5s',
                    price: 4500000,
                    image: 'https://www.laptopfactoryoutlet.com.sg/wp-content/uploads/2017/04/APPLE-iPhone-5S-16GB_IT1703191287_P1-1.JPG-128x128.jpg',
                    status: false
                },
                {
                    name: 'iphone 8',
                    price: 12000000,
                    image: 'https://www.viettablet.com//image/cache/data/0-hinh-moi/iphone-8-plus-lock-128x128.png',
                    status: true
                },
                {
                    name: 'iphone x',
                    price: 20000000,
                    image: 'http://www.qdossound.com/files/styles/swatch_large/public/user-files/variants/protection/images/10-17/OG_Glass_Vision_iPhone_X_Angled.jpg?itok=JSiLaVQi',
                    status: true
                }
            ],
            status: true
        }
    }
    
    addProduct = ()=>{
        let name = this.refs.name.value;
        let price = this.refs.price.value;
        let image = this.refs.image.value;
        if((name && name.trim().length) && (price && price.trim().length) && (image && image.trim().length)){
            let product = {
                name: name,
                price: price,
                image: image,
                status: true
            };
            let productsAfter = this.state.products.concat(product);
            this.setState({
                products: productsAfter
            })
        }else{
            alert('all fields required');
        }
    }
    showProductsList() {
        let productsList = this.state.products;
        console.log(productsList);
        return  productsList.map((product, index)=>{
                    if(product.status === true) return <Product key={ index } price={ product.price } image={ product.image }>{ product.name }</Product>;
                    else return "";
                })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <legend>Add Product</legend>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" ref="name" />
                        <label>Price</label>
                        <input type="text" className="form-control" ref="price" />
                        <label>Image</label>
                        <input type="text" className="form-control" ref="image" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={ this.addProduct }>Save</button>
                </div>
                <div className="row">
                    { this.showProductsList() }
                </div> 
            </div>
        );
    }
}

export default App;
