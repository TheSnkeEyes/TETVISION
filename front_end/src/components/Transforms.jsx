import React from 'react';
import '../components/Transforms.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { logoImages } from '../helper/images';




function Transforms() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (

    <div className='transforms_container'>
        <div className="trasform_description">
            <h1>BE KONG Предизвикатество</h1>
            <p>
                ПРЕДИЗВИКАЙТЕ ПРОМЯНАТА!
            </p>
            <button>КЛИКНИ ТУК</button>
        </div>
        <div className="transform_slider">
          <Carousel responsive={responsive}>
            <div className='slider_card'>
                <img src={logoImages.bodyTransforme.body1} alt="" srcset="" />
            </div>
            <div className='slider_card'>
                <img src={logoImages.bodyTransforme.body2} alt="" />

            </div>
            <div className='slider_card'>
                <img src={logoImages.bodyTransforme.body3} alt="" />

            </div>
            
            
          </Carousel>
        </div>    
    </div>
  )
}

export default Transforms
