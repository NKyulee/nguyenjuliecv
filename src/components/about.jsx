import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">A propos de Julie</span>
                    <h2 className="colorlib-heading">Qui suis-je ?</h2>
                    <p>Jeune reconvertie du milieu de l'E-commerce. En Juin 2019, j'ai décidé de me reconvertir dans la programmation, grâce au bootcamp de la Coding Academy by EPITECH.<br />
                    Cette transition s'est conclu avec un stage a l'étranger au Vietnam en tant que developpeuse Full Stack.</p>
                    <p><b>Actuellement, je recherche un emploi dans le Developpement web (préference : Stack MERN, Javascript, PHP) en Ile-de-France.</b></p>
                    <p>Grâce au tir à l'arc, j'estime que la compétition pour moi est un moteur fort pour se developper et se surpasser !
                     Bien que ce soit un sport individuel, j'aime travailler en équipe, facteur d'une cohésion et d'entraide.</p>

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Mes connaissances</span>
                <h2 className="colorlib-heading">Ce sont les choses que je connais</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-6 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-monitor" />
                </span>
                <div className="desc">
                    <h3>Developpement Web & Mobile</h3>
                    <p> Web - Langages : C, PHP, Python, JavaScript, HTML5 et CSS3 <br/>
                    Framework : Laravel, React, Symfony4<br/>
                    WebStack : MERN (MongoDB, Express, REACT, Nodejs)<br/>
                    Mobile - React Native avec Expo</p>
                   
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-shop" />
                </span>
                <div className="desc">
                    <h3>E-commerce & Marketing digital & Optimisation SEO</h3>
                    <p>Connaissance des CMS : Magento, Prestashop, WordPress <br/>
                    SEO, SMO, SEA optimisation <br/>
                    Web Stratégie et Marketing sur les réseaux sociaux</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-photo" />
                </span>
                <div className="desc">
                    <h3>Design Graphique</h3>
                    <p>UI/UX Mockup : Balsamiq / Figma <br/>
                    Adobe Illustrator, Photoshop</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                <i className="icon-clipboard" />
                </span>
                <div className="desc">
                    <h3>Diplômes</h3>
                    <p><i className="icon-check" /> Licence Professionnelle : E-Commerce & Marketing numerique <br/>
                    <i className="icon-check" /> BTS Management des Unités commerciales<br />
                    <i className="icon-check" /> BAC Sciences de la Technologie et de la Gestion option Gestion Finance</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-heart3" />
                </span>
                <div className="desc">
                    <h3>Objectif personnels</h3>
                    <p>
                        <i className="icon-plane" /> Voyager à travers toute l'Asie <br/>
                        <i className="icon-book" /> Se dépasser et toujours apprendre <br/>
                        <i className="icon-target3" /> Monter en compétences aux tir à l'arc <br/>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
