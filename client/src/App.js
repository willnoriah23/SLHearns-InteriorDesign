import React, { Component } from 'react';
import './App.css';
import ImageGallery from '../src/react-image-gallery';

const PREFIX_URL = 'http://res.cloudinary.com/noriahjwill/image/upload/';
  
class App extends Component {

constructor() {
    super();
    this.state = {
      autoPlay: false,
      infinite: true,
      showPlayButton: true,
      slideDuration: 450,
      slideInterval: 2000,
    };  

    this.images = [
      {
        original: `${PREFIX_URL}v1516154332/Slideshow%20Images/001-20160902-AlphaDesignBuild-3683ParkwoodCircle-AnnArbor-Print_2_2_lasbas.jpg`,
        original: `${PREFIX_URL}v1516153545/Slideshow%20Images/010-20160902-AlphaDesignBuild-3683ParkwoodCircle-AnnArbor-Print_1_2_jh8fyn.jpg`,
        original: `${PREFIX_URL}v1516153354/Slideshow%20Images/Alpha_-_Weber_2030_Delaware_Ann_Arbor-5021-1604_ezbd3h.jpg`,
        orignal: `${PREFIX_URL}v1516153248/Slideshow%20Images/Naegle_Bathroom_10_zobbay.jpg`,
        description: 'SL Hearns Interior Design'
      }]
  }
      
  _componentDidUpdate(prevProps, prevState) {
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
    this._resetVideo();
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
};

   render() {
    return (

      <section className='app'>
        <ImageGallery
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
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailHover={this.state.slideOnThumbnailHover}
          additionalClass="app-image-gallery"
        />

        <div className='app-sandbox'>

          <div className='app-sandbox-content'>
            <h2 className='app-header'>Settings</h2>

            <ul className='app-buttons'>
              <li>
                <div className='app-interval-input-group'>
                  <span className='app-interval-label'>Play Interval</span>
                  <input
                    className='app-interval-input'
                    type='text'
                    onChange={this._handleInputChange.bind(this, 'slideInterval')}
                    value={this.state.slideInterval}/>
                </div>
              </li>

              <li>
                <div className='app-interval-input-group'>
                  <span className='app-interval-label'>Slide Duration</span>
                  <input
                    className='app-interval-input'
                    type='text'
                    onChange={this._handleInputChange.bind(this, 'slideDuration')}
                    value={this.state.slideDuration}/>
                </div>
              </li>

              <li>
                <div className='app-interval-input-group'>
                  <span className='app-interval-label'>Thumbnail Bar Position</span>
                  <select
                    className='app-interval-input'
                    value={this.state.thumbnailPosition}
                    onChange={this._handleThumbnailPositionChange.bind(this)}
                  >
                    <option value='bottom'>Bottom</option>
                    <option value='top'>Top</option>
                    <option value='left'>Left</option>
                    <option value='right'>Right</option>
                  </select>
                </div>
              </li>
            </ul>

            <ul className='app-checkboxes'>
              <li>
                <input
                  id='infinite'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'infinite')}
                  checked={this.state.infinite}/>
                  <label htmlFor='infinite'>allow infinite sliding</label>
              </li>
              <li>
                <input
                  id='show_fullscreen'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showFullscreenButton')}
                  checked={this.state.showFullscreenButton}/>
                  <label htmlFor='show_fullscreen'>show fullscreen button</label>
              </li>
              <li>
                <input
                  id='show_playbutton'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showPlayButton')}
                  checked={this.state.showPlayButton}/>
                  <label htmlFor='show_playbutton'>show play button</label>
              </li>
              <li>
                <input
                  id='show_bullets'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showBullets')}
                  checked={this.state.showBullets}/>
                  <label htmlFor='show_bullets'>show bullets</label>
              </li>
              <li>
                <input
                  id='show_thumbnails'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showThumbnails')}
                  checked={this.state.showThumbnails}/>
                  <label htmlFor='show_thumbnails'>show thumbnails</label>
              </li>
              <li>
                <input
                  id='show_navigation'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showNav')}
                  checked={this.state.showNav}/>
                  <label htmlFor='show_navigation'>show navigation</label>
              </li>
              <li>
                <input
                  id='show_index'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showIndex')}
                  checked={this.state.showIndex}/>
                  <label htmlFor='show_index'>show index</label>
              </li>
              <li>
                <input
                  id='slide_on_thumbnail_hover'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'slideOnThumbnailHover')}
                  checked={this.state.slideOnThumbnailHover}/>
                  <label htmlFor='slide_on_thumbnail_hover'>slide on thumbnail hover (desktop)</label>
              </li>
            </ul>
          </div>

        </div>
      </section>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('container'));