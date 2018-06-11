import React, { Component } from 'react';

class Product extends Component {
    //must use arrow function
    showName = ()=>alert(this.props.children);
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <img src={ this.props.image } alt="" />
                    <div className="caption">
                        <h3> {this.props.children} </h3>
                        <p>
                            { this.props.price }
                        </p>
                        <p>
                            <a className="btn btn-primary" onClick={ this.showName }>Buy</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
