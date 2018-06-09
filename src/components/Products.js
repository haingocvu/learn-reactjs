import React, { Component } from 'react';

class Products extends Component {
  render() {
    return (
      
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
              <img src="http://khangduymobile.com/wp-content/uploads/iphone_6_gold2-256x256.jpg" alt="iphone 6 plus" />
              <div className="caption">
                  <h3>I Phone 6 Plus</h3>
                  <p>
                      19.000.000 VND
                  </p>
                  <p>
                      <a className="btn btn-primary">Mua Hang</a>
                  </p>
              </div>
          </div>
      </div>
      
    );
  }
}

export default Products;
