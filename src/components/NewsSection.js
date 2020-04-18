import React, { Component } from 'react'
import NewsSlide from './NewsSlide'

export default class NewsSection extends Component {
  render() {
    return (
      <section className="fourth-section equal-distance">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto text-center">
                        <h3 className="fourth-section-heading mb-4">Latest news from corelant</h3>
                        <p className="text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been
                        </p>
                        <p className="text">
                            the industry's standard dummy text ever since
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5">
                        <div className="owl-carousel owl-theme">
                            {this.props.news.map(n => (
                                <NewsSlide date={n.date} text={n.text} image={n.image}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
