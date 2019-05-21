import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import serious from '../../images/serious.jpg'
import fun from '../../images/fun.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Home extends Component {

    render() {
        return (
            <div id="home" className="home">
                <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false} useKeyboardArrows={true}>
                    <div>
                        <img src={serious} alt="Group 1" />
                    </div>
                    <div>
                        <img src={fun} alt="Group 2" />
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Home