import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Content from './components/Content';
import Footer from './components/Footer';
import data from './data';

export default class App extends Component{
  static defaultProps = data

  render() {
    return (
      <div className="App">
        <Navbar />
        <Herosection />
        <Content about={this.props.about} services={this.props.services} testimonials={this.props.testimonials} news={this.props.news}/>
        <Footer />
      </div>
    );
  }
}

