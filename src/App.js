import React, { Component } from 'react';
import Header from './components/Header';
import Products from './components/Products';

class App extends Component {
    showProdctInfo(product) {
        return  <div>
                    <p>id: {product.id}</p>
                    <p>name: {product.name}</p>
                </div>
    }
    render() {
        let hello = 'hello';
        let product = {
            id: '1',
            name: 'ipod'
        }
        let products = [
            {
                id: '1',
                name: 'iphone 5s'
            },
            {
                id: '2',
                name: 'iphone 6'
            }
        ];
        let elements = products.map((product, index)=>{
            return <div key={ product.id }>
                        <p>id: { product.id }</p>
                        <p>name: { product.name }</p>
                    </div>
        });
        return (
            <div>
                <Header></Header>

                <div className="row">

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Products></Products>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Products></Products>
                    </div>

                </div>
                { this.showProdctInfo(product) }
                <div>{ hello }</div>
                <div>
                    { elements }
                </div>

            </div>
        );
    }
}

export default App;
