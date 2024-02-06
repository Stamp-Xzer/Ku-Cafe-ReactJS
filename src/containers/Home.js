// import logo from './logo.svg';
// import './Home.css';
import Monitor from '../components/monitor/Monitor';
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { productsFetch } from "../actions"
// import ProductItem from './components/product/ProductItem';


class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.productsFetch();
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.products && Array.isArray(this.props.products) &&
          <Monitor products={this.props.products} />}
        <Footer company="Stamp" email="Mathit.j@ku.th" />
      </div>
    );
  }
}



function mapSteteToProps({ products }) {
  return { products }
}

export default connect(mapSteteToProps, { productsFetch })(Home);
