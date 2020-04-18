import React, { Component } from 'react';
import About from './About';
import TestimonialsSection from './TestimonialsSection';
import ServicesSection from './ServicesSection';
import NewsSection from './NewsSection';
import SubscribeSection from './SubscribeSection';
import BottomSection from './BottomSection';

export default class Content extends Component {
  render() {
    return (
      <section className="content-section">
        <About about={this.props.about}/>
        <TestimonialsSection testimonials={this.props.testimonials}/>
        <ServicesSection services={this.props.services}/>
        <NewsSection news={this.props.news}/>
        <SubscribeSection />
        <BottomSection />
      </section>
    )
  }
}
