import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Expériences</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Stage : Developpeur Web Junior Full-Stack <span>Nov 2019 - Fév 2020</span></h2>
                        <h4>AmagumoLabs (HCMC, Vietnam)</h4>
                        <p>
                          <ul>
                            <li>Création de Mockup design utilisant Balsamiq</li>
                            <li>Développement du Front-End - React.Js</li>
                            <li>Développement du Back-End : REST API - Node.JS (Express), Mongodb</li>
                            <li>MERN Stack</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Assistante Chef de Produit Web <span>Oct 2018 - Avr 2019</span></h2>
                        <h4>Jardiland Siège (Joinville-Le-Pont)</h4>
                        <p>
                          <ul>
                            <li>Mise en conformités des fiches produits web</li>
                            <li>Gestion des prix, promotion et mise en avant des produits web</li>
                            <li>Encadrement d'une petite équipe en création de fiches produits</li>
                            <li>Travail sur le CMS Magento et enrichissement de la base de donnée PIM AKENEO</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Chargée E-Commerce et Communication <span>Déc 2016 - Sept 2017</span></h2>
                        <h4>Ozabi.fr (La Courneuve)</h4>
                        <p>
                          <ul>
                            <li>Suivi de la refonte du site internet</li>
                            <li>Gestion du service client sur le site et les Marketplaces (Amazon, Cdiscount, Priceminister)</li>
                            <li>Picking et préparation des commandes à l'envoi</li>
                            <li>Gestion du site internet (Mise en ligne des produits, promotions)</li>
                            <li>Shooting des produits et retouches des photos</li>
                          </ul>
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Stage BTS : Chargée d'Accueil<span> Nov 2014 - Mar 2016</span></h2>
                        <h4>Société Générale - Agence La Varenne St Hilaire (St Maur des Fossées)</h4>
                        <p>
                          <ul>
                            <li>Gestion de l'accueil des clients</li>
                            <li>Tâches administratives bancaires quotidiennes</li>
                            <li>Vente de produit et de services bancaires</li>
                            <li>Projet BTS (Booster les ventes d'assurance automobiles)</li>
                            </ul>
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
