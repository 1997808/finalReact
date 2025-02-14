import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="sidebar" class="col-lg-4 col-md-12 col-sm-12">
        <div id="banner">
          <div class="banner-item">
            <a href="#"><img class="img-fluid" src="/images/banner-1.png" /></a>
          </div>
          <div class="banner-item">
            <a href="#"><img class="img-fluid" src="/images/banner-2.png" /></a>
          </div>
          <div class="banner-item">
            <a href="#"><img class="img-fluid" src="/images/banner-3.png" /></a>
          </div>
          <div class="banner-item">
            <a href="#"><img class="img-fluid" src="/images/banner-4.png" /></a>
          </div>
          <div class="banner-item">
            <a href="#"><img class="img-fluid" src="/images/banner-5.png" /></a>
          </div>
          <div class="banner-item">
            <a href="#"><img class="img-fluid" src="/images/banner-6.png" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
