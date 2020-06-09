import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpeg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hello ! <br />Je suis Julie Nguyen</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/11Kzay7yudOwHRe6RC7WzM9lMYc_E7IiU/view?usp=sharing" target="_blank" rel="noopener noreferrer"style={{color: 'rgba(44, 152, 240, 0.8)'}}><b>Télécharger mon CV  </b><i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg1.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: 'white'}}>Me contacter par mail</h1>
                          <p><a className="btn btn-primary btn-learn" href="mailto:yunguyen@gmail.com" target="_blank" rel="noopener noreferrer"style={{color: 'rgba(44, 152, 240, 0.8)'}}><b>yunguyen94@gmail.com  </b><i className="icon-envelop" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpeg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Mon profil Linkedin</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://www.linkedin.com/in/julie-nguyen-883a69107/" target="_blank" rel="noopener noreferrer" style={{color: 'rgba(44, 152, 240, 0.8)'}}><b>NGUYEN Julie  </b><i className="icon-linkedin2" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
