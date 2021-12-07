import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card/Card";

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      initialSlide: Math.floor(Math.random() * 7 + 1),
      centerMode: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 1064,
          settings: {
            slidesToShow: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 768,
          settings: "unslick",
        },
      ],
    };
    return (
      <div className=" relative bg-gray-light flex items-center justify-center flex-col md:block">
        <div className="w-72 bg-gray-light pt-7 pb-5 text-white-primary text-xl font-semibold md:w-full md:bg-gray-dark md:pl-24">
          <h2>{this.props.category}</h2>
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.props.movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              subtitle={movie.subtitle}
              description={movie.description}
              color={movie.color}
            />
          ))}
        </Slider>

        <FontAwesomeIcon
          className="hidden absolute inset-y-1/2 left-4 text-6xl cursor-pointer md:block"
          icon={faChevronLeft}
          onClick={this.previous}
          inverse
        />
        <FontAwesomeIcon
          className="hidden absolute inset-y-1/2 right-4 text-6xl cursor-pointer md:block"
          icon={faChevronRight}
          onClick={this.next}
          inverse
        />
      </div>
    );
  }
}
