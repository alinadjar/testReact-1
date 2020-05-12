
import React, { Component } from 'react';
import $ from 'jquery';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

import './flickSlider.css';

class FlickSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        $(".carousel").css("background-color", "#FFA");
        $(".cell1").click(() => {
            alert('Clicked')
        });

        // var $carousel = $('.carousel').flickity()
        // var k = new Flickity('.carousel2');
        var flky = new Flickity('.carousel', {
            // options, defaults listed

            accessibility: true,
            // enable keyboard navigation, pressing left & right keys

            adaptiveHeight: false,
            // set carousel height to the selected slide

            autoPlay: false,
            // advances to the next cell
            // if true, default is 3 seconds
            // or set time between advances in milliseconds
            // i.e. `autoPlay: 1000` will advance every 1 second

            cellAlign: 'center',
            // alignment of cells, 'center', 'left', or 'right'
            // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

            cellSelector: undefined,
            // specify selector for cell elements

            contain: true,
            // will contain cells to container
            // so no excess scroll at beginning or end
            // has no effect if wrapAround is enabled

            draggable: '>1',
            // enables dragging & flicking
            // if at least 2 cells

            dragThreshold: 3,
            // number of pixels a user must scroll horizontally to start dragging
            // increase to allow more room for vertical scroll for touch devices

            freeScroll: true,
            // enables content to be freely scrolled and flicked
            // without aligning cells

            friction: 0.2,
            // smaller number = easier to flick farther

            groupCells: false,
            // group cells together in slides

            initialIndex: 0,
            // zero-based index of the initial selected cell

            lazyLoad: true,
            // enable lazy-loading images
            // set img data-flickity-lazyload="src.jpg"
            // set to number to load images adjacent cells

            percentPosition: true,
            // sets positioning in percent values, rather than pixels
            // Enable if items have percent widths
            // Disable if items have pixel widths, like images

            prevNextButtons: true,
            // creates and enables buttons to click to previous & next cells

            pageDots: true,
            // create and enable page dots

            resize: true,
            // listens to window resize events to adjust size & positions

            rightToLeft: false,
            // enables right-to-left layout

            setGallerySize: true,
            // sets the height of gallery
            // disable if gallery already has height set with CSS

            watchCSS: false,
            // watches the content of :after of the element
            // activates if #element:after { content: 'flickity' }

            wrapAround: true,
            // at end of cells, wraps-around to first for infinite scrolling

            pageDots: false
            // enable page dots

        });
    }// end componentDidMount


    render() {
        return (

            <div>
                {/*  you can also initialize flickity with HTML
                <div class="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true }'></div> */}
                <div className="carousel">
                    <div className="carousel-cell cell1 ttt">
                        <img src={require('./img/1.jpg')} className='img-responsive rounded' />
                    </div>
                    <div className="carousel-cell cell2 ttt">
                        <img src={require('./img/2.jpg')} className='img-responsive rounded' />
                    </div>
                    <div className="carousel-cell cell3 ttt">
                        <img src={require('./img/3.jpg')} className='img-responsive rounded' />
                    </div>
                    <div className="carousel-cell cell4 ttt">
                        <img src={require('./img/4.jpg')} className='img-responsive rounded' />
                    </div>
                    <div className="carousel-cell cell5 ttt">
                        <img src={require('./img/5.jpg')} className='img-responsive rounded' />
                    </div>
                    <div className="carousel-cell cell6 ttt">
                        <img src={require('./img/6.jpg')} className='img-responsive rounded' />
                    </div>
                    <div className="carousel-cell cell7 ttt">
                        <img src={require('./img/7.jpg')} className='img-responsive rounded' />
                    </div>
                </div>


                <div className="carousel2" data-flickity='{ "cellAlign": "left", "contain": true }'>
                    <div className="carousel-cell cell1">
                        <img src={require('./img/placeholder.png')} className='img-responsive' />
                    </div>
                    <div className="carousel-cell cell2">
                        <img src={require('./img/placeholder.png')} className='img-responsive' />
                    </div>
                    <div className="carousel-cell cell3">
                        <img src={require('./img/placeholder.png')} className='img-responsive' />
                    </div>
                    <div className="carousel-cell cell4">
                        <img src={require('./img/placeholder.png')} className='img-responsive' />
                    </div>
                    <div className="carousel-cell cell5">
                        <img src={require('./img/placeholder.png')} className='img-responsive' />
                    </div>
                    <div className="carousel-cell cell6">
                        <img src={require('./img/placeholder.png')} className='img-responsive' />
                    </div>
                    <div className="carousel-cell cell7">
                        <img src={require('./img/placeholder.png')} className='img-responsive' />
                    </div>
                </div>

            </div>
        );
    }
}



export default FlickSlider;