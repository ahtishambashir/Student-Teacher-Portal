import { Typography } from "@mui/material";
import { useState } from "react";
import { Avatar, useTheme } from "@material-ui/core";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderLogo1 } from "../../utils/images";
import { SliderLogo2 } from "../../utils/images";
import { SliderLogo3 } from "../../utils/images";
import { SliderLogo4 } from "../../utils/images";
import { SliderLogo5 } from "../../utils/images";

export default function SponsorSection() {
  var settings = {
    // dots: true,
    draggable: true,
    pauseOnHover: true,
    autoplay: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const theme = useTheme();
  return (
    <>
      <section>
        <div className="container">
          <div>
            <Typography style={theme.palette.primary.sponserTitle}>
              OUR SPONSORS
            </Typography>
          </div>
          <div style={theme.palette.primary.sliderMain}>
            <Slider {...settings}>
              <div>
                <img
                  src={SliderLogo1}
                  alt=""
                  style={theme.palette.primary.sliderLogos}
                />
              </div>
              <div>
                <img
                  src={SliderLogo2}
                  alt=""
                  style={theme.palette.primary.sliderLogos}
                />
              </div>
              <div>
                <img
                  src={SliderLogo3}
                  alt=""
                  style={theme.palette.primary.sliderLogos}
                />
              </div>
              <div>
                <img
                  src={SliderLogo4}
                  alt=""
                  style={theme.palette.primary.sliderLogos}
                />
              </div>
              <div>
                <img
                  src={SliderLogo5}
                  alt=""
                  style={theme.palette.primary.sliderLogos}
                />
              </div>
              <div>
                <img
                  src={SliderLogo1}
                  alt=""
                  style={theme.palette.primary.sliderLogos}
                />
              </div>
              <div>
                <img
                  src={SliderLogo2}
                  alt=""
                  style={theme.palette.primary.sliderLogos}
                />
              </div>
              <div>
                <img
                  src={SliderLogo3}
                  alt=""
                  style={theme.palette.primary.sliderLogos}
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
