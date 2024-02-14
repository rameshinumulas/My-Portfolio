import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import antdIcon from '../icons/antd.png'
import awsS3Icon from '../icons/awss3.png'
import cssIcon from '../icons/css.png'
import htmlIcon from '../icons/html.png'
import javascriptIcon from '../icons/js.png'
import mongoIcon from '../icons/mongodb.png'
import muiIcon from '../icons/mui.png'
import nodeIcon from '../icons/node js.png'
import reactjsIcon from '../icons/reactjs.svg'
import reducIcon from '../icons/redux.png'
import typescriptIcon from '../icons/ts.png'


let techStackPics = [javascriptIcon, reactjsIcon, typescriptIcon,
  reducIcon, nodeIcon, htmlIcon, cssIcon, antdIcon, muiIcon, mongoIcon, awsS3Icon]

export default function About() {
  return (
    <div className='content-position'>
      <h2>About us</h2>
      <div>
        <p>I'm a proficient Front End Web Engineer with a solid background in React JS who focuses on building dynamic,
          user-friendly interfaces that enhance the user experience as a whole.
          I have a solid understanding of the foundations of web development,
          and I'm excited to use them in a professional setting to produce outstanding
          online experiences.
        </p>
        <p>
          I'm constantly studying and keeping up with the most recent trends and technology in web development.
          I am able to approach problems creatively and come up with original solutions because
          to my quick adaptation and capacity for learning new abilities. My aim is to produce websites
          that go above and beyond what users and clients anticipate. I appreciate sharing my views and
          working with knowledgeable others. I appreciate you looking at my portfolio.
          I'm eager to collaborate with you and realise your vision.
        </p>
      </div>
      <div className='hire-cv-div-buttons'>
        <button className='hire-cv-btn'>
          Hire me
        </button>
        <button className='hire-cv-btn'>
          Download CV
        </button>
      </div>
      <div>
        <h2>Tech Stack</h2>
        <CarouselProvider
          naturalSlideWidth={500}
          naturalSlideHeight={500}
          totalSlides={11}
          isPlaying
          interval={1000}
          visibleSlides={8}
        >
        <Slider>
          {techStackPics.map((eachStack, index) => (
            <Slide index={index}> 
            <div className='slider-images'>
              <img src={eachStack} alt='use-stack' className='carousel-image' />
            </div>
            </Slide>
          ))}
        </Slider>
        </CarouselProvider>
      </div>
    </div>
  )
}
