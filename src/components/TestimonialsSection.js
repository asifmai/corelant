import React, { Component } from 'react'
import TestimonialSlide from './TestimonialSlide'

export default class TestimonialsSection extends Component {
  render() {
    return (
      <section className="second-section equal-distance">
          <img src="/assets/img/Group824.png" alt=""/>
      <div className="container">
          <div className="row">
              <div className="col-md-2">
                  <div className="photos">
                      <div className="img-1">
                          <img src="/assets/img/Ellipse 2 copy 4.png" alt="" />
                      </div>
                      <div className="img-2">
                          <img src="/assets/img/Ellipse 2 copy 3.png" alt="" />
                      </div>
                      <div className="img-3">
                          <img src="/assets/img/Ellipse 2 copy 2.png" alt="" />
                      </div>
                  </div>
              </div>
              <div className="col-md-8 m-auto text-center">
                  <div className="middle">
                      <h3 className="section-section-heading mb-4">What people say about us</h3>
                      <p className="text">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                          Ipsum
                          has been
                      </p>
                      <p className="text">
                          the industry's standard dummy text ever since
                      </p>
                      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                          <ol className="carousel-indicators">
                              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                          </ol>
                          <div className="carousel-inner">
                            {this.props.testimonials.map((t, i) => (
                                <TestimonialSlide active={i === 0 ? 'active' : ''} name={t.name} title={t.title} image={t.image} body={t.body}/>
                            ))}
                          </div>
                          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                              data-slide="prev">
                              <span className="sr-only">Previous</span>
                          </a>
                          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                              data-slide="next">
                              <span className="sr-only">Next</span>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-md-2">
                  <div className="photos">
                      <div className="img-1">
                          <img src="/assets/img/Ellipse 2 copy 5.png" alt="" />
                      </div>
                      <div className="img-2">
                          <img src="/assets/img/Ellipse 2 copy 7.png" alt="" />
                      </div>
                      <div className="img-3">
                          <img src="/assets/img/Clip.png" alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
    )
  }
}
