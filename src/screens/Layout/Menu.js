import React, { Component } from 'react';
import * as API from '../../services/Api'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    //cach 1
    this.getCategory()
  }

  // cach 1
  async getCategory() {
    try {
      const categoryPr = await API.getCategory({ limit: 9 })
      this.setState({ data: categoryPr.data.data })
    } catch (err) {
      throw err
    }
  }
  render() {
    const { data } = this.state
    console.log(data)
    return (
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <nav>
            <div id="menu" class="collapse navbar-collapse">
              <ul>
              {data && data.map((e, i) =>
                <li class="menu-item"><a href="#"> {data[i].name} </a></li>
              )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Footer;
