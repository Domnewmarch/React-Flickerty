import React, { Component } from 'react';
import Image1 from '../assets/images/image1.jpg'
import Image2 from '../assets/images/image2.jpg';
import Slider from '../components/Slider';

const images = [Image1, Image2];

export default class Home extends Component {
  render() {
    return (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }} />
          <Slider
            options={{
              autoPlay: 4000,
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              fullscreen: true,
              adaptiveHeight: true,
            }}
          >
            {images.map((image, index) => (
              <div style={{ width: '100%', height: '700px', margin: '0 0.5em' }} key={index}>
                <img src={image} alt="" />
              </div>
            ))}
          </Slider>
        </div>
    );
  }
}