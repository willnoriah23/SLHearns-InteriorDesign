import React, { Component } from 'react';
import './homepage.css';
import ImageGallery from './../../components/ImageGallery';
import { Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './../../components/Nav';
import Logo from "../../components/Logo";

//import Questionnaire from './components/Questionnaire';


const PREFIX_URL = 'http://res.cloudinary.com/noriahjwill/image/upload/';

class Homepage extends Component {

    constructor() {
        super();
        this.state = {
            autoPlay: false,
            infinite: true,
            showPlayButton: true,
            slideDuration: 450,
            slideInterval: 6000,
        };

        this.images = [
            {
                original: `${PREFIX_URL}v1516154332/Slideshow%20Images/001-20160902-AlphaDesignBuild-3683ParkwoodCircle-AnnArbor-Print_2_2_lasbas.jpg`
            },
            {
                original: `${PREFIX_URL}v1516153545/Slideshow%20Images/010-20160902-AlphaDesignBuild-3683ParkwoodCircle-AnnArbor-Print_1_2_jh8fyn.jpg`
            },
            {
                original: `${PREFIX_URL}v1516153354/Slideshow%20Images/Alpha_-_Weber_2030_Delaware_Ann_Arbor-5021-1604_ezbd3h.jpg`
            },
            {
                original: `${PREFIX_URL}v1516153248/Slideshow%20Images/Naegle_Bathroom_10_zobbay.jpg`
            }
        ];
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.slideInterval !== prevState.slideInterval ||
            this.state.slideDuration !== prevState.slideDuration) {
            // refresh setInterval
            this._imageGallery.pause();
            this._imageGallery.play();
        }
    }

    _onImageClick(event) {
        console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
    }

    _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    _onSlide(index) {
        console.debug('slid to index', index);
    }

    _onPause(index) {
        console.debug('paused on index', index);
    }

    _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
    }

    _onPlay(index) {
        console.debug('playing from index', index);
    }

    _handleInputChange(state, event) {
        this.setState({[state]: event.target.value});
    }

    _handleCheckboxChange(state, event) {
        this.setState({[state]: event.target.checked});
    }

    _handleThumbnailPositionChange(event) {
        this.setState({thumbnailPosition: event.target.value});
    }


    render() {
        return (

            <MuiThemeProvider>
                <Nav />
                <Logo />
                <section className='app'>

                    <div className="imageGallery">
                        <ImageGallery
                            autoPlay={true}
                            disableArrowKeys={true}
                            ref={i => this._imageGallery = i}
                            items={this.images}
                            lazyLoad={false}
                            onClick={this._onImageClick.bind(this)}
                            onImageLoad={this._onImageLoad}
                            onSlide={this._onSlide.bind(this)}
                            onPause={this._onPause.bind(this)}
                            onScreenChange={this._onScreenChange.bind(this)}
                            onPlay={this._onPlay.bind(this)}
                            infinite={this.state.infinite}
                            //showBullets={this.state.showBullets}
                            showFullscreenButton={false}//{this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                            showPlayButton={false}//{this.state.showPlayButton && this.state.showGalleryPlayButton}
                            showThumbnails={false}//{this.state.showThumbnails}
                            //showIndex={this.state.showIndex}
                            //showNav={this.state.showNav}
                            //thumbnailPosition={this.state.thumbnailPosition}
                            slideDuration={parseInt(this.state.slideDuration)}
                            slideInterval={parseInt(this.state.slideInterval)}
                            slideOnThumbnailHover={this.state.slideOnThumbnailHover}
                            additionalClass="app-image-gallery"
                        />
                    </div>

                </section>
            </MuiThemeProvider>
        );
    }
}

export default Homepage;